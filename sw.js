// Plate Hunt service worker: caches the whole app so it runs with no signal.
// Bump VERSION whenever any file changes so devices pick up the update.
const VERSION = "plate-hunt-v1";
const FILES = [
  "./", "index.html", "fonts.css", "manifest.webmanifest",
  "fonts/BigShouldersDisplay-0.woff2", "fonts/Overpass-1.woff", "fonts/Overpass-2.woff2", "fonts/OverpassMono-3.woff2",
  "icons/icon.svg", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache first, then refresh the cache in the background when online.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(cached => {
      const network = fetch(e.request).then(res => {
        if (res && res.ok && new URL(e.request.url).origin === location.origin) {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => cached || caches.match("index.html"));
      return cached || network;
    })
  );
});

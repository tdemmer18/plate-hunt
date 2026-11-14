// Plate Hunt service worker: caches the whole app so it runs with no signal.
// Bump VERSION whenever any file changes so devices pick up the update.
const VERSION = "plate-hunt-v28";
const LOGOS = "plate-hunt-logos";
const FILES = [
  "./",
  "index.html",
  "fonts.css",
  "info.js",
  "learn.js",
  "shapes.js",
  "maps.js",
  "manifest.webmanifest",
  "fonts/BigShouldersDisplay-0.woff2",
  "fonts/ChakraPetch-0.woff2",
  "fonts/ChakraPetch-1.woff2",
  "fonts/ChakraPetch-2.woff2",
  "fonts/JetBrainsMono-3.woff2",
  "fonts/Outfit-4.woff2",
  "fonts/Overpass-1.woff",
  "fonts/Overpass-2.woff2",
  "fonts/OverpassMono-3.woff2",
  "icons/wagon.svg",
  "icons/wagon-180.png",
  "icons/wagon-192.png",
  "icons/wagon-512.png",
  "icons/wagon-maskable-512.png",
  "icons/ridge.svg",
  "icons/ridge-180.png",
  "icons/light.svg",
  "icons/light-180.png"
];

self.addEventListener("install", e => {
  // cache: "reload" skips the browser HTTP cache so a new version never stores stale files
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(f => new Request(f, { cache: "reload" })))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== LOGOS).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache first, then refresh the cache in the background when online.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // Team logos from ESPN: keep a copy on the device (kept across app updates) so they show offline.
  if (new URL(e.request.url).hostname === "a.espncdn.com") {
    e.respondWith(caches.open(LOGOS).then(c => c.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      if (res && (res.ok || res.type === "opaque")) c.put(e.request, res.clone());
      return res;
    }))));
    return;
  }
  // The page itself: network first (so updates show on the next launch), cached copy when offline.
  if (e.request.mode === "navigate") {
    e.respondWith(fetch(e.request, { cache: "no-cache" }).then(res => {
      if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put("index.html", copy)); }
      return res;
    }).catch(() => caches.match("index.html", { ignoreSearch: true }).then(r => r || caches.match(e.request, { ignoreSearch: true }))));
    return;
  }
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

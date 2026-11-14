// Plate Hunt service worker: caches the whole app so it runs with no signal.
// Bump VERSION whenever any file changes so devices pick up the update.
const VERSION = "plate-hunt-v9";
const FILES = [
  "./", "index.html", "fonts.css", "info.js", "manifest.webmanifest",
  "fonts/BigShouldersDisplay-0.woff2", "fonts/Overpass-1.woff", "fonts/Overpass-2.woff2", "fonts/OverpassMono-3.woff2",
  "icons/icon.svg",
  "birds/american-goldfinch.jpg", "birds/american-robin.jpg", "birds/atlantic-puffin.jpg", "birds/baltimore-oriole.jpg", "birds/black-capped-chickadee.jpg", "birds/blue-jay.jpg", "birds/brown-pelican.jpg", "birds/brown-thrasher.jpg", "birds/cactus-wren.jpg", "birds/california-gull.jpg", "birds/california-quail.jpg", "birds/carolina-wren.jpg", "birds/common-loon.jpg", "birds/common-pheasant.jpg", "birds/common-raven.jpg", "birds/delaware-blue-hen.jpg", "birds/eastern-bluebird.jpg", "birds/great-grey-owl.jpg", "birds/great-horned-owl.jpg", "birds/greater-roadrunner.jpg", "birds/gyrfalcon.jpg", "birds/hawaiian-goose.jpg", "birds/hermit-thrush.jpg", "birds/lark-bunting.jpg", "birds/mountain-bluebird.jpg", "birds/northern-cardinal.jpg", "birds/northern-flicker.jpg", "birds/northern-mockingbird.jpg", "birds/osprey.jpg", "birds/purple-finch.jpg", "birds/rhode-island-red.jpg", "birds/rock-ptarmigan.jpg", "birds/ruffed-grouse.jpg", "birds/scissor-tailed-flycatcher.jpg", "birds/sharp-tailed-grouse.jpg", "birds/snowy-owl.jpg", "birds/steller-s-jay.jpg", "birds/western-meadowlark.jpg", "birds/willow-ptarmigan.jpg", "birds/wood-thrush.jpg",
  "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png"
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

/* Service Worker — yasserdbh.com
   Strategy: NETWORK-FIRST for same-origin requests so deployed updates
   (HTML/CSS/JS) are always fresh when online; cache is the offline fallback.
   Bump CACHE on each meaningful change to purge stale entries. */
const CACHE = "yasserdbh-v3";
const CORE = [
  "./",
  "index.html",
  "404.html",
  "assets/styles.css",
  "assets/script.js",
  "assets/favicon.svg",
  "assets/php2.jpeg",
  "assets/og-cover.png",
  "site.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(CORE))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Only manage same-origin requests; let CDN assets go straight to the network.
  if (url.origin !== self.location.origin) return;

  // Network-first: always try the network, fall back to cache when offline.
  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((cache) => cache.put(req, copy));
        return res;
      })
      .catch(() =>
        caches.match(req).then((cached) => {
          if (cached) return cached;
          if (req.mode === "navigate") return caches.match("index.html");
          return new Response("", { status: 504, statusText: "Offline" });
        })
      )
  );
});

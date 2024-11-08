const cacheName = "portfolio-cache-v1";
const assetsToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/script.js",
  "/assets/img/"
  "/assets/img/about.jpg"
  "/assets/img/perfil.png"
  "/assets/img/work1.jpg"
  "/assets/img/work2.jpg"
  "/assets/img/work3.jpg"
  "/assets/img/work4.jpg"
  "/assets/img/work5.jpg"
  "/assets/img/work6.jpg"
  // tambahkan semua file yang ingin Anda cache
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fruit-store').then((cache) => cache.addAll([
      'Fruit game.html',
      'manifest.json'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});

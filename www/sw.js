self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('the-magic-cache').then(function(cache) {
    });
  );
});
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('the-magic-cache').then(function(cache) {
      return cache.addAll([
          '/',
          '/index.html',
          '/index2.html',
          '/animate.css',
          '/bootstrap.min.css',
          '/bootstrap.min.js',
          '/Brooklyn-Nine-Nine.jpg',
          '/contact.html',
          '/credits.html',
          '/favicon.ico',
          '/index3.html',
          '/jquery-2.2.4.min.js',
          '/manifest.json',
          '/materialize.min.css',
          '/materialize.min.js',
          '/privacy.html',
          '/Sans.ttf',
          '/script.js',
          '/stylesheet.css',
          '/support.html',
          '/sw.js',
      ]);
    })
  );
});
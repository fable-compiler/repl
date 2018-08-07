var fableCache = 'fable-repl2-v1';

self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {
            return cacheName !== fableCache;
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
  });

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open(fableCache).then(function(cache) {
        return cache.match(event.request).then(function (response) {
          return response || fetch(event.request).then(function(response) {
            var url = new URL(event.request.url);
            if(!url.pathname.startsWith('/samples'))
                cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  });

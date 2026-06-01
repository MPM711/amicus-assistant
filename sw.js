const CACHE = 'amicus-v5';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.map(c => caches.delete(c)))).then(() => clients.claim()));
});
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request.url + '?v=5', {cache: 'no-store'}).catch(() => fetch(e.request)));
});

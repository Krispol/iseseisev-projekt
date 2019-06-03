var CACHE_NAME = 'my-site-cache-v2';
var urlsToCache = [
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/pics/',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/index.html',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/pics/192.png',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/pics/512.png',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/pics/img1.png',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/pics/img2.png',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/pics/img3.png',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/pics/img4.png',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/pics/mina.jpg',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/pics/teamtreehouse2.png',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/pics/phone.png',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/pics/mail.png',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/pics/facebook.png',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/favicon.png',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/main.js',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/style.css',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/index.js',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/README.md',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/a2hs.js',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/main.css',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/sw.js',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/responsive.css',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/index.js',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/normalize.css',
  'http://greeny.cs.tlu.ee/~krispol/2019/Eesrakenduste_arendus/iseseisev-projekt/manifest.json'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
		console.log(urlsToCache);
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

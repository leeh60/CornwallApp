var BASE_PATH = '/CornwallApp/';

var CACHED_URLS = [

    // Our HTML

    BASE_PATH + 'index.html',


    
    // Images for favicons

    BASE_PATH + 'images/icons/android-icon-36x36.png',

    BASE_PATH + 'images/icons/android-icon-48x48.png',

    BASE_PATH + 'images/icons/android-icon-72x72.png',

    BASE_PATH + 'images/icons/android-icon-96x96.png',

    BASE_PATH + 'images/icons/android-icon-144x144.png',

    BASE_PATH + 'images/icons/android-icon-192x192.png',
 
   BASE_PATH + 'images/icons/favicon-32x32.png',



    //Images for page

    BASE_PATH + 'images/icon/padstow.jpg.png',

    BASE_PATH + 'images/icons/favicon.ico',

    BASE_PATH + 'images/icons/favicon-16x16.png',

    BASE_PATH + 'images/icons/favicon-32x32.png',

    BASE_PATH + 'images/icons/favicon-96x96.png',

    BASE_PATH + 'images/icons/ms-icon-70x70.png',

    BASE_PATH + 'images/icons/ms-icon-144x144.png',

    BASE_PATH + 'images/icons/ms-icon-150x150.png',

    BASE_PATH + 'images/icons/ms-icon-310x310.png',


 
    // JavaScript


    BASE_PATH + 'script.js',




    // Manifest
    
BASE_PATH + 'manifest.json',
 

 // CSS and fonts

    BASE_PATH + 'styles.css'
];

self.addEventListener('install', function(event) {
  // Cache everything in CACHED_URLS. Installation fails if anything fails to cache
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});

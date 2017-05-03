if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      console.log('ServiceWorker was successful);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
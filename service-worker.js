if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
      console.log('ServiceWorker was successful);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
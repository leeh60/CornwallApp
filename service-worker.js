self.addEventListener('fetch', function(event) {
  if (event.request.url.indexOf('padstow.jpg') !== -1) {
    event.respondWith(
      fetch('padstow.jpg')
    );
  }
})

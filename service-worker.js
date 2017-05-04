self.addEventListener('fetch', function(event) {
  if (event.request.url.indexOf('material.teal-red.min.css') !== -1) {
    event.respondWith(
      new Response('body { background: green; }',
      { header: { 'Content-Type': 'text/css' } }
    ));
  }
});

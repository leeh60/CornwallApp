self.addEventListener('fetch', function(event) {
  if (event.request.url.indexOf('styles.css') !== -1) {
    event.respondWith(
      new Response('body { background: green; }',
      { headers: { 'Content-Type': 'text/css' } }
    ));
  }
});

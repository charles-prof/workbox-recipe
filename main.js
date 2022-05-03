// service worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', {
    scope: './'
  })
}

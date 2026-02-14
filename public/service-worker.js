self.addEventListener('install', () => {
  console.log('BermudaSign App installed')
})

self.addEventListener('activate', () => {
  console.log('BermudaSign App activated')
})

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request))
})

let cacheData = "cacheDataV1";

let cacheFiles = [
    '/static/js/bundle.js',
    '/static/media/man.104a5f5d01a464b26600.png',
    '/static/media/IRANSansWeb(FaNum).e2b0436903df14b8a8c2.woff2',
    '/index.html',
    '/favicon.ico',
    '/'
]

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll(cacheFiles);
        })
    )
})

this.addEventListener('fetch', (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                if (response)
                    return response
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }
})
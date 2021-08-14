const sillySentences = "silly-sentences-v1"
const assets = [
    "/",
    "./index.html",
    "./app.js",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(sillySentences).then(cache => {
            cache.addAll(assets)
        })
    )
})

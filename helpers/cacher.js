export const getWithCache = async (endPoint) => {
    let storedApiCall;
    const cache = await caches.open("store")
    storedApiCall = await cache.match(endPoint)
    if (storedApiCall) {
        return await storedApiCall.json()
    }
    await cache.add(endPoint)
    storedApiCall = await cache.match(endPoint)
    return await storedApiCall.json()
}
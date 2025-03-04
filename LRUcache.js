class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()
  }

  get(key) {
    if (!this.cache.has(key)) return -1
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value) 
    return value
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key)
    else if (this.cache.size >= this.capacity)
      this.cache.delete(this.cache.keys().next().value) 

    this.cache.set(key, value)
  }
}

// Example usage
let cache = new LRUCache(2)
cache.put(1, 'A')
cache.put(2, 'B')
console.log(cache.get(1)) // A
cache.put(3, 'C') // Removes key 2
console.log(cache.get(2)) // -1 (not found)

//----------------- CACHE----------------------------------------------------//
function cacheData(key, fetchFunction, expiry = 60000) {
  // Default expiry 60 seconds
  return new Promise((resolve, reject) => {
    let cached = localStorage.getItem(key)
    if (cached) {
      let { value, timestamp } = JSON.parse(cached)
      if (Date.now() - timestamp < expiry) {
        console.log('Fetching from cache')
        return resolve(value)
      }
    }

    fetchFunction()
      .then((data) => {
        localStorage.setItem(
          key,
          JSON.stringify({ value: data, timestamp: Date.now() }),
        )
        resolve(data)
      })
      .catch(reject)
  })
}

// Example usage
cacheData('userData', () =>
  fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()),
)
  .then((data) => console.log('Fetched data:', data))
  .catch((err) => console.error(err))

// Corrected TimedCache implementation
class TimedCacheClass {
  constructor(expiryTime) {
    this.cache = new Map()
    this.expiryTime = expiryTime
  }

  set(key, value) {
    this.cache.set(key, { value, timestamp: Date.now() })
    setTimeout(() => this.cache.delete(key), this.expiryTime)
  }

  get(key) {
    const entry = this.cache.get(key)
    if (!entry || Date.now() - entry.timestamp > this.expiryTime) {
      this.cache.delete(key)
      return null
    }
    return entry.value
  }
}

// Example usage
const timedCache = new TimedCacheClass(5000) // 5 seconds expiration
timedCache.set('user', { name: 'Alice' })

setTimeout(() => console.log(timedCache.get('user')), 3000) // Should return user data
setTimeout(() => console.log(timedCache.get('user')), 6000) // Should return null

export { LRUCache };

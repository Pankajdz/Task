import { LRUCache } from './LRUcache.js';


describe("LRUCache", () => {
    test("should return -1 for non-existing key", () => {
        let cache = new LRUCache(2);
        expect(cache.get(1)).toBe(-1);
    });

    test("should store and retrieve values", () => {
        let cache = new LRUCache(2);
        cache.put(1, "A");
        expect(cache.get(1)).toBe("A");
    });

    test("should remove least recently used item when capacity is exceeded", () => {
        let cache = new LRUCache(2);
        cache.put(1, "A");
        cache.put(2, "B");
        cache.put(3, "C"); // Removes key 1
        expect(cache.get(1)).toBe(-1);
    });

    test("should move accessed item to most recently used", () => {
        let cache = new LRUCache(2);
        cache.put(1, "A");
        cache.put(2, "B");
        cache.get(1);
        cache.put(3, "C"); // Removes key 2
        expect(cache.get(2)).toBe(-1);
        expect(cache.get(1)).toBe("A");
    });
});

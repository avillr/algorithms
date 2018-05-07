class LRUCache {
  constructor (capacity) {
    this.capacity = capacity
    this.cache = {}
    this.cacheVals = new LinkedList()
  }

  set (key, value) {
    if (this.cache[key]) {
      let node = this.cache[key]
      // add node to tail of list
      this.cacheVals.remove(node)
      this.cacheVals.insertAtTail(node)
    } else {
      // evict
      this.evictIfNeedeed()
      // add to cache
      let newNode = new LinkedListNode(key, value)
      this.cacheVals.insertAtTail(newNode)
      this.cache[key] = newNode
    }
  }

  get (key, value) {
    if (this.cache[key]) {
      let node = this.cache[key]
      this.cacheVals.remove(node)
      this.cacheVals.insertAtTail(node)
      return node.data
    } else {
      return -1
    }
  }

  evictIfNeedeed () {
    if (this.cacheVals.size >= this.capacity) {
      let removedNode = this.cacheVals.removeHead()
      this.cache.remove(removedNode)
    }
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.size = 0
  }

  insertAtHead (node) {
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    this.size += 1
  }

  insertAtTail (node) {
    if (!this.tail) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.size += 1
  }

  remove (node) {
    if (!node) return

    if (node.prev !== null) {
      node.prev.next = node.next
    }
    if (node.next !== null) {
      node.next.prev = node.prev
    }
    if (node === this.head) {
      this.head = node.next
      this.head.prev = null
    }
    if (node === this.tail) {
      this.tail = node.prev
      this.tail.next = null
    }

    this.size -= 1

    return node
  }

  removeHead () {
    return this.remove(this.head)
  }

  removeTail () {
    return this.remove(this.tail)
  }
}

class LinkedListNode {
  constructor (key, data) {
    this.data = data
    this.key = key
    this.next = null
    this.prev = null
  }
}

module.exports = { LRUCache }

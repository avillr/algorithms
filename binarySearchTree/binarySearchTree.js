class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
    if (value >= this.value) {
      if (this.right === null) {
        this.right = new BST(value)
      } else {
        this.right.insert(value)
      }
    } else if (this.left === null) {
      this.left = new BST(value)
    } else {
      this.left.insert(value)
    }
    return this
  }

  contains(value) {
    if (value === this.value) {
      return true
    } else if (value > this.value && this.right) {
      return this.right.contains(value)
    } else if (value < this.value && this.left) {
      return this.left.contains(value)
    } else {
      return false
    }
  }

  getMinValue() {
    if (this.left === null) {
      return this.value
    } else {
      return this.left.getMinValue()
    }
  }

  remove(value, parent = null) {
    if (value < this.value) {
      if (this.left !== null) {
        this.left.remove(value, this)
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        this.right.remove(value, this)
      }
    } else if (this.left !== null && this.right !== null) {
      this.value = this.right.getMinValue()
      this.right.remove(this.value, this)
    } else if (parent === null) {
      if (this.left !== null) {
        this.value = this.left.value
        this.right = this.left.right
        this.left = this.left.left
      } else if (this.right !== null) {
        this.value = this.right.value
        this.left = this.right.left
        this.right = this.right.right
      } else {
        this.value = null
      }
    } else if (parent.left === this) {
      parent.left = this.left !== null ? this.left : this.right
    } else if (parent.right === this) {
      parent.right = this.left !== null ? this.left : this.right
    }
    return this
  }
}

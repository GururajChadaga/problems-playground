class Node {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
    this.hasChild = function (child) {
      return this.children.has(child);
    };
    this.getChildNode = function (child) {
      return this.children.get(child);
    };
    this.setChildNode = function (child) {
      this.children.set(child, new Node());
    };

    this.getIsEnd = function () {
      return this.isEnd;
    };
    this.setIsEnd = function (isEnd) {
      this.isEnd = isEnd;
    };
  }
}

class Trie {
  constructor() {
    this.node = new Node();
  }
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let curr = this.node;
  for (let char of word) {
    if (!curr.hasChild(char)) curr.setChildNode(char);
    curr = curr.getChildNode(char);
  }
  curr.setIsEnd(true);
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let curr = this.node;
  for (let char of word) {
    if (!curr.hasChild(char)) return false;
    else curr = curr.getChildNode(char);
  }
  return curr.getIsEnd();
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let curr = this.node;
  for (let char of prefix) {
    if (!curr.children.has(char)) return false;
    else curr = curr.getChildNode(char);
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

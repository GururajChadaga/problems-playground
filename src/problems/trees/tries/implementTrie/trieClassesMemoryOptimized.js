class Node {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.node = new Node();
  }
}

Trie.prototype.insert = function (word) {
  let curr = this.node;
  for (let char of word) {
    if (!curr.children[char]) curr.children[char] = new Node();
    curr = curr.children[char];
  }
  curr.isEnd = true;
};

Trie.prototype.search = function (word) {
  let curr = this.node;
  for (let char of word) {
    if (!curr.children[char]) return false;
    else curr = curr.children[char];
  }
  return curr.isEnd;
};

Trie.prototype.startsWith = function (prefix) {
  let curr = this.node;
  for (let char of prefix) {
    if (!curr.children[char]) return false;
    else curr = curr.children[char];
  }
  return true;
};

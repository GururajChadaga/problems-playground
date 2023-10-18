class Node {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class WordDictionary {
  constructor() {
    this.node = new Node();
  }
}

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let curr = this.node;
  for (let char of word) {
    if (!curr.children[char]) curr.children[char] = new Node();
    curr = curr.children[char];
  }
  curr.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const recursiveSearch = function (index, curr) {
    for (let i = index; i < word.length; i++) {
      const char = word[i];
      if (char === '.')
        return Object.keys(curr.children).some((key) =>
          recursiveSearch(i + 1, curr.children[key])
        );
      if (!curr.children[char]) return false;
      curr = curr.children[char];
    }
    return curr.isEnd;
  };
  return recursiveSearch(0, this.node);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

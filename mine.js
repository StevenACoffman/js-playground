
        function getAlphabeticChars(word) {
  return word
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

var AnagramReader = function(word) {
  this.match = getAlphabeticChars(word);
  this.word = word.toLowerCase();
};

AnagramReader.prototype.matches = function (_words) {
  // If a string was provided, assume the arguments were passed in as var args
  // Otherwise assume that an array is passed in for lack of a simple solution pre Array.isArray
  var words = typeof _words === 'string'
    ? Array.prototype.slice.call(arguments)
    : _words;
  var answer = words.reduce((function(anagrams, each) {
    if (this.word !== each.toLowerCase() && this.match === getAlphabeticChars(each)) {
      anagrams.push(each);
    }
    return anagrams;
  }).bind(this), []);
  console.log('words', words, 'match', this.match, 'answer', answer);
  return answer;


}

module.exports = function anagram(word) {
  return new AnagramReader(word);
}
      

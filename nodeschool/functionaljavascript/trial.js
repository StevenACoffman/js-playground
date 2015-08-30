var countWords = require('./basicreduce.js');

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

console.log(countWords(inputWords));

// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }

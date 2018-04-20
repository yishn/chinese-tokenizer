const tokenizer = require('.')('./cedict.txt')
console.log(tokenizer.tokenize('我是中国人。'))

const tokenizer = require('.')('./cedict.txt', 'traditional')
console.log(tokenizer.tokenize('我是中國人。'))

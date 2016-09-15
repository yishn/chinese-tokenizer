const tokenizer = require('./index')('./cedict.txt')

console.log(tokenizer.tokenize('我是中国人。'))

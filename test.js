const tokenizer = require('.')

let tokenize = tokenizer.loadSimplified('./cedict_ts.u8')
console.log(JSON.stringify(tokenize('我是中国人。'), null, '  '))

let ttokenize = tokenizer.loadTraditional('./cedict_ts.u8')
console.log(JSON.stringify(ttokenize('我是中國人。'), null, '  '))

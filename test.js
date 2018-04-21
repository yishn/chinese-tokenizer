const tokenize = require('.').loadFile('./cedict_ts.u8')

console.log(JSON.stringify(tokenize('我是中国人。'), null, '  '))
console.log(JSON.stringify(tokenize('我是中國人。'), null, '  '))

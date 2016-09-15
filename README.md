# chinese-tokenizer

Tokenizes Chinese texts into words. This is a work in progress.

## Usage

~~~js
const tokenizer = require('./index')('./cedict.txt')
console.log(tokenizer.tokenize('我是中国人。'))
~~~

~~~js
const tokenizer = require('./index')('./cedict.txt', 'traditional')
console.log(tokenizer.tokenize('我是中國人。'))
~~~

Output:

~~~
[ { traditional: '我',
    simplified: '我',
    pinyin: 'wo3',
    pinyinPretty: 'wǒ',
    english: 'I/me/my' },
  { traditional: '是',
    simplified: '是',
    pinyin: 'shi4',
    pinyinPretty: 'shì',
    english: 'is/are/am/yes/to be\nvariant of 是[shi4]/(used in given names)' },
  { traditional: '中國人',
    simplified: '中国人',
    pinyin: 'zhong1 guo2 ren2',
    pinyinPretty: 'zhōng guó rén',
    english: 'Chinese person' },
  { traditional: '。',
    simplified: '。',
    pinyin: null,
    pinyinPretty: null,
    english: null } ]
~~~

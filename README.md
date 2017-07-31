# chinese-tokenizer

Tokenizes Chinese texts into words using [CC-CEDICT](https://cc-cedict.org/). You can try it out at [the demo page](https://yishn.github.io/chinese-tokenizer/).

## How this works

This tokenizer uses a simple greedy algorithm: It always looks for the longest word in the CC-CEDICT dictionary that matches the input, one at a time.

## Installation

Use npm to install:

~~~
npm install chinese-tokenizer --save
~~~

## Usage

Make sure to provide the [CC-CEDICT](https://cc-cedict.org/) data.

~~~js
const tokenizer = require('chinese-tokenizer')('./cedict.txt')
console.log(tokenizer.tokenize('我是中国人。'))
~~~

~~~js
const tokenizer = require('chinese-tokenizer')('./cedict.txt', 'traditional')
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

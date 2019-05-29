# chinese-tokenizer [![Build Status](https://travis-ci.org/yishn/chinese-tokenizer.svg?branch=master)](https://travis-ci.org/yishn/chinese-tokenizer)

Simple algorithm to tokenize Chinese texts into words using [CC-CEDICT](https://cc-cedict.org/). You can try it out at [the demo page](https://yishn.github.io/chinese-tokenizer/). The code for the demo page can be found in the [`gh-pages` branch](https://github.com/yishn/chinese-tokenizer/tree/gh-pages) of this repository.

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
const tokenize = require('chinese-tokenizer').loadFile('./cedict_ts.u8')

console.log(JSON.stringify(tokenize('我是中国人。'), null, '  '))
console.log(JSON.stringify(tokenize('我是中國人。'), null, '  '))
~~~

Output:

~~~
[
  {
    "text": "我",
    "traditional": "我",
    "simplified": "我",
    "matches": [
      {
        "pinyin": "wo3",
        "pinyinPretty": "wǒ",
        "english": "I/me/my"
      }
    ]
  },
  {
    "text": "是",
    "traditional": "是",
    "simplified": "是",
    "matches": [
      {
        "pinyin": "shi4",
        "pinyinPretty": "shì",
        "english": "is/are/am/yes/to be"
      }
    ]
  },
  {
    "text": "中國人",
    "traditional": "中國人",
    "simplified": "中国人",
    "matches": [
      {
        "pinyin": "Zhong1 guo2 ren2",
        "pinyinPretty": "Zhōng guó rén",
        "english": "Chinese person"
      }
    ]
  },
  {
    "text": "。",
    "traditional": "。",
    "simplified": "。",
    "matches": []
  }
]
~~~

## API

### `loadFile(path)`

Reads the [CC-CEDICT](https://cc-cedict.org/) file from given `path` and returns a tokenize function based on the dictionary.

### `load(content)`

Parses [CC-CEDICT](https://cc-cedict.org/) string content from `content` and returns a tokenize function based on the dictionary.

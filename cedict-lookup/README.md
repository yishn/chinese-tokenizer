# cedict-lookup

A Node.js package for looking up Chinese words in [CC-CEDICT](http://www.mdbg.net/chindict/chindict.php?page=cc-cedict)

* [npm](https://www.npmjs.com/package/cedict-lookup)
* [TypeDoc](http://takumif.github.io/cedict-lookup/docs)

## Usage
```javascript
var cedict = require('cedict-lookup');
var dict = cedict.loadTraditional('path/to/your/cedict_ts.u8');
// var dict = cedict.loadSimplified('path/to/your/cedict_ts.u8');

console.log(
    dict.getMatch('你好')
);
// [ Entry {
//     traditional: '你好',
//     simplified: '你好',
//     pinyin: 'ni3 hao3',
//     english: 'Hello!/Hi!/How are you?' } ]


console.log(
    dict.getMatch('找不到的東西')
);
// []


console.log(
    dict.getEntriesStartingWith('中文')
);
// [ Entry {
//     traditional: '中文',
//     simplified: '中文',
//     pinyin: 'Zhong1 wen2',
//     english: 'Chinese/Chinese written language/Chinese writing' },
//   Entry {
//     traditional: '中文標準交換碼',
//     simplified: '中文标准交换码',
//     pinyin: 'Zhong1 wen2 biao1 zhun3 jiao1 huan4 ma3',
//     english: 'CSIC, Chinese standard interchange code used from 1992' } ]


console.log(
    dict.getPrefixEntries('小籠包')
);
// [ Entry {
//     traditional: '小',
//     simplified: '小',
//     pinyin: 'xiao3',
//     english: 'small/tiny/few/young' },
//   Entry {
//     traditional: '小籠包',
//     simplified: '小笼包',
//     pinyin: 'xiao3 long2 bao1',
//     english: 'steamed dumpling' } ]
```

## License
The MIT License
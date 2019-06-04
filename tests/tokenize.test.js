const {join} = require('path')
const t = require('tap')
const tokenize = require('..').loadFile(join(__dirname, 'cedict_ts.u8'))

t.test('should tokenize simplified Chinese text', async t => {
    let tokens = tokenize('我是中国人。')
    let tokenTexts = tokens.map(token => token.text)

    t.assert(tokens.slice(0, -1).every(token => token.matches.length > 0))
    t.strictDeepEqual(tokenTexts, ['我', '是', '中国人', '。'])
})

t.test('should tokenize traditional Chinese text', async t => {
    let tokens = tokenize('我是中國人。')
    let tokenTexts = tokens.map(token => token.text)

    t.assert(tokens.slice(0, -1).every(token => token.matches.length > 0))
    t.strictDeepEqual(tokenTexts, ['我', '是', '中國人', '。'])
})

t.test('should tokenize text that includes both simplified and traditional Chinese characters', async t => {
    let tokens = tokenize('中国人中國人。')
    let tokenTexts = tokens.map(token => token.text)

    t.assert(tokens.slice(0, -1).every(token => token.matches.length > 0))
    t.strictDeepEqual(tokenTexts, ['中国人', '中國人', '。'])
})

t.test('should detect simplified 么 correctly', async t => {
    let tokens = tokenize('你吃饭了么？')
    let tokenTexts = tokens.map(token => token.simplified)

    t.assert(tokens.slice(0, -1).every(token => token.matches.length > 0))
    t.strictDeepEqual(tokenTexts, ['你', '吃饭', '了', '么', '？'])
})

t.test('should tokenize non-Chinese text', async t => {
    let tokens = tokenize('我的名字是 Daniel Müller。')
    let tokenTexts = tokens.map(token => token.text)

    t.assert(tokens.slice(0, 4).every(token => token.matches.length > 0))
    t.strictDeepEqual(tokenTexts, ['我', '的', '名字', '是', ' ', 'Daniel', ' ', 'Müller', '。'])
})

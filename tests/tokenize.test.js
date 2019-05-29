const {join} = require('path')
const t = require('tap')
const tokenize = require('..').loadFile(join(__dirname, 'cedict_ts.u8'))

t.test('should tokenize simplified Chinese text', async t => {
    let tokens = tokenize('我是中国人。')
    let tokenTexts = tokens.map(token => token.text)

    t.strictDeepEqual(tokenTexts, ['我', '是', '中国人', '。'])
})

t.test('should tokenize traditional Chinese text', async t => {
    let tokens = tokenize('我是中國人。')
    let tokenTexts = tokens.map(token => token.text)

    t.strictDeepEqual(tokenTexts, ['我', '是', '中國人', '。'])
})

t.test('should tokenize non-Chinese text', async t => {
    let tokens = tokenize('我的名字是 Daniel Müller。')
    let tokenTexts = tokens.map(token => token.text)

    t.strictDeepEqual(tokenTexts, ['我', '的', '名字', '是', 'Daniel', 'Müller', '。'])

    for (let i = 0; i < 4; i++) {
        t.notEqual(tokens[i].simplified, null)
        t.notEqual(tokens[i].traditional, null)
    }

    t.equal(tokens[4].simplified, null)
    t.equal(tokens[4].traditional, null)
    t.equal(tokens[5].simplified, null)
    t.equal(tokens[5].traditional, null)
    t.equal(tokens[6].simplified, tokens[6].text)
    t.equal(tokens[6].traditional, tokens[6].text)

    let newTokens = tokenize('我的名字是Daniel Müller。')

    t.strictDeepEqual(newTokens, tokens)
})

const {readFileSync} = require('fs')
const Cedict = require('./cedict')

const chinesePunctuation = [
    '·', '×', '—', '‘', '’', '“', '”', '…',
    '、', '。', '《', '》', '『', '』', '【', '】',
    '！', '（', '）', '，', '：', '；', '？'
]

exports.loadFile = function(path) {
    return exports.load(readFileSync(path, 'utf-8'))
}

exports.load = function(contents) {
    let dictionary = new Cedict()
    dictionary.load(contents)

    function tokenize(text, traditional) {
        text = Array.from(text)

        let result = []
        let i = 0

        let pushToken = word => {
            let entries = dictionary.get(word, traditional)

            result.push({
                text: word,
                traditional: entries[0] ? entries[0].traditional : word,
                simplified: entries[0] ? entries[0].simplified : word,

                matches: entries.map(({pinyin, pinyinPretty, english}) => ({
                    pinyin,
                    pinyinPretty,
                    english
                }))
            })
        }

        while (i < text.length) {
            // Try to match two or more characters

            if (i !== text.length - 1) {
                let getTwo = text.slice(i, i + 2).join('')
                let entries = dictionary.getPrefix(getTwo, traditional)
                let found = false
                let foundWord = null

                entries.sort((x, y) => y.traditional.length - x.traditional.length)

                for (let entry of entries) {
                    let word = text.slice(i, i + entry.traditional.length).join('')

                    if (![entry.traditional, entry.simplified].includes(word))
                        continue

                    pushToken(word)
                    found = true
                    foundWord = word

                    break
                }

                if (found) {
                    i += foundWord.length
                    continue
                }
            }

            // If it fails, match one character

            let character = text[i]
            let isChinese = character =>
                chinesePunctuation.includes(character)
                || dictionary.get(character, traditional).length > 0

            if (isChinese(character) || character.match(/\s/) != null) {
                pushToken(character)
                i++
                continue
            }

            // Handle non-Chinese characters

            let end = i + 1

            for (; end < text.length; end++) {
                if (text[end].match(/\s/) != null || isChinese(text[end])) break
            }

            let word = text.slice(i, end).join('')
            pushToken(word)

            i = end
        }

        return result
    }

    return function(text, {mode = 'auto'} = {}) {
        if (mode === 'simplified') {
            return tokenize(text, false)
        } else if (mode === 'traditional') {
            return tokenize(text, true)
        }

        let simplifiedTokens = tokenize(text, false)
        let traditionalTokens = tokenize(text, true)

        return simplifiedTokens.length <= traditionalTokens.length
            ? simplifiedTokens
            : traditionalTokens
    }
}

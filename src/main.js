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

    return function tokenize(text) {
        text = Array.from(text)

        let result = []
        let preference = {simplified: 0, traditional: 0}
        let i = 0

        let pushToken = word => {
            let simplifiedEntries = dictionary.get(word, false)
            let traditionalEntries = dictionary.get(word, true)

            let entries = simplifiedEntries.length === 0 ? traditionalEntries
                : traditionalEntries.length === 0 ? simplifiedEntries
                : preference.simplified < preference.traditional ? traditionalEntries
                : preference.simplified > preference.traditional ? simplifiedEntries
                : [...simplifiedEntries, ...traditionalEntries]

            if (traditionalEntries.length === 0 && simplifiedEntries.length > 0) {
                preference.simplified++
            } else if (simplifiedEntries.length === 0 && traditionalEntries.length > 0) {
                preference.traditional++
            }

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
                let simplifiedEntries = dictionary.getPrefix(getTwo, false)
                let traditionalEntries = dictionary.getPrefix(getTwo, true)
                let foundWord = null
                let foundEntries = null

                for (let entries of [traditionalEntries, simplifiedEntries]) {
                    for (let entry of entries) {
                        let matchText = entries === traditionalEntries ? entry.traditional : entry.simplified
                        let word = text.slice(i, i + Array.from(matchText).length).join('')

                        if (
                            matchText === word
                            && (
                                foundWord == null
                                || Array.from(word).length > Array.from(foundWord).length
                            )
                        ) {
                            foundWord = word
                            foundEntries = entries
                        }
                    }
                }

                if (foundWord != null) {
                    pushToken(foundWord)
                    i += Array.from(foundWord).length

                    if (foundEntries === simplifiedEntries) {
                        preference.simplified++
                    } else if (foundEntries === traditionalEntries) {
                        preference.traditional++
                    }

                    continue
                }
            }

            // If it fails, match one character

            let character = text[i]
            let isChinese = character =>
                chinesePunctuation.includes(character)
                || dictionary.get(character, false).length > 0
                || dictionary.get(character, true).length > 0

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
}

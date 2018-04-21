const {readFileSync} = require('fs')
const Cedict = require('./cedict')

exports.loadFile = function(path) {
    return exports.load(readFileSync(path, 'utf-8'))
}

exports.load = function(contents) {
    let dictionary = new Cedict()
    dictionary.load(contents)

    return function tokenize(text) {
        let result = []
        let i = 0

        let pushToken = text => {
            let entries = dictionary.get(text)

            result.push({
                traditional: entries[0] ? entries[0].traditional : text,
                simplified: entries[0] ? entries[0].simplified : text,

                matches: entries.map(({pinyin, pinyinPretty, english}) => {
                    return {
                        pinyin,
                        pinyinPretty,
                        english
                    }
                })
            })
        }

        while (i < text.length) {
            // First match two or more characters

            if (i !== text.length - 1) {
                let getTwo = text.substr(i, 2)
                let entries = dictionary.getPrefix(getTwo)
                let found = false
                let foundWord = null

                entries.sort((x, y) => y.traditional.length - x.traditional.length)

                for (let entry of entries) {
                    let word = text.substr(i, entry.traditional.length)

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

            // If all fails, match one character

            let character = text[i]
            pushToken(character)

            i++
        }

        return result
    }
}

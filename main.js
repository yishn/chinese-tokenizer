const cedict = require('cedict-lookup')
const pinyin = require('prettify-pinyin')
const dedupe = require('dedupe')

class Tokenizer {
    constructor(dictionary, options) {
        this.dictionary = dictionary
        this.options = options
    }

    tokenize(text) {
        let {type} = this.options
        let result = []
        let i = 0

        let pushEntry = text => {
            let matches = this.dictionary.getMatch(text)

            if (!matches.length) {
                result.push({
                    traditional: text,
                    simplified: text,
                    pinyin: null,
                    pinyinPretty: null,
                    english: null
                })
            } else {
                let rawPinyin = dedupe(matches.map(x => x.pinyin.trim().toLowerCase()))

                result.push({
                    traditional: matches[0].traditional,
                    simplified: matches[0].simplified,
                    pinyin: rawPinyin.join('/'),
                    pinyinPretty: rawPinyin.map(x => pinyin.prettify(x.replace(/u:/g, 'ü'))).join('/'),
                    english: dedupe(matches.map(x => x.english)).join('\n')
                })
            }
        }

        while (i < text.length) {
            // First match two or more characters

            if (i != text.length - 1) {
                let getTwo = text.slice(i, i + 2)
                let entries = this.dictionary.getEntriesStartingWith(getTwo)
                let entry

                entries.sort((x, y) => y[type].length - x[type].length)

                for (let j = 0; j < entries.length; j++) {
                    if (text.slice(i, i + entries[j][type].length) != entries[j][type])
                        continue

                    entry = entries[j]
                    pushEntry(entry[type])
                    break
                }

                if (entry) {
                    i += entry[type].length
                    continue
                }
            }

            // If all fails, match one character

            let character = text[i]
            pushEntry(character)

            i++
        }

        return result
    }
}

module.exports = function(path, type = 'simplified') {
    let dictionary, options = {path, type}

    if (type == 'simplified') {
        dictionary = cedict.loadSimplified(path)
    } else {
        dictionary = cedict.loadTraditional(path)
    }

    return new Tokenizer(dictionary, options)
}

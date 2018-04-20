const cedict = require('cedict-lookup')
const {prettify} = require('prettify-pinyin')

function load(path, type) {
    let dictionary = type === 'traditional'
        ? cedict.loadTraditional(path) 
        : cedict.loadSimplified(path)

    return function tokenize(text) {
        let result = []
        let i = 0

        let pushEntry = text => {
            let matches = dictionary.getMatch(text)

            result.push({
                traditional: matches[0] ? matches[0].traditional : text,
                simplified: matches[0] ? matches[0].simplified : text,

                matches: matches.map(match => {
                    let pinyin = match.pinyin.trim()

                    return {
                        pinyin,
                        pinyinPretty: prettify(pinyin.replace(/u:/g, 'ü')),
                        english: match.english
                    }
                })
            })
        }

        while (i < text.length) {
            // First match two or more characters

            if (i !== text.length - 1) {
                let getTwo = text.slice(i, i + 2)
                let entries = dictionary.getEntriesStartingWith(getTwo)
                let entry

                entries.sort((x, y) => y[type].length - x[type].length)

                for (let j = 0; j < entries.length; j++) {
                    if (text.slice(i, i + entries[j][type].length) !== entries[j][type])
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

exports.loadSimplified = function(path) {
    return load(path, 'simplified')
}

exports.loadTraditional = function(path) {
    return load(path, 'traditional')
}

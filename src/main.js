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

/*
Priority
- Definition without infrequent keyword
- Surname
- Modern Variant
- Old Variant
*/

const sortEntries = (entries) => {
    return [...entries].sort((a, b) => {
        let aIsOldVariant = a.english.includes("old variant of ")
        let bIsOldVariant = b.english.includes("old variant of ")

        let aIsSurname = a.english.includes("surname")
        let bIsSurname = b.english.includes("surname")

        let aIsModernVariant = a.english.includes("variant of ")
        let bIsModernVariant = b.english.includes("variant of ")

        let aLowPriority = Boolean(aIsOldVariant || aIsSurname || aIsModernVariant)
        let bLowPriority = Boolean(bIsOldVariant || bIsSurname || bIsModernVariant)

        if (aLowPriority && !bLowPriority) return 1
        if (!aLowPriority && bLowPriority) return -1

        if(aLowPriority && bLowPriority) {
            if (aIsOldVariant && !bIsOldVariant) return 1
            if (!aIsOldVariant && bIsOldVariant) return -1

            if (aIsModernVariant && !bIsModernVariant) return 1
            if (!aIsModernVariant && bIsModernVariant) return -1    

            if (aIsSurname && !bIsSurname) return 1
            if (!aIsSurname && bIsSurname) return -1
        }

        return 0
    })
}

exports.load = function(contents) {
    let dictionary = new Cedict()
    dictionary.load(contents)

    return function tokenize(text) {
        text = Array.from(text.replace(/\r/g, ''))

        let result = []
        let i = 0
        let [offset, line, column] = [0, 1, 1]
        let [simplifiedPreference, traditionalPreference] = [0, 0]

        let pushToken = word => {
            let simplifiedEntries = dictionary.get(word, false)
            let traditionalEntries = dictionary.get(word, true)

            let entries = simplifiedEntries.length === 0 ? traditionalEntries
                : traditionalEntries.length === 0 ? simplifiedEntries
                : simplifiedPreference < traditionalPreference ? traditionalEntries
                : simplifiedPreference > traditionalPreference ? simplifiedEntries
                : [...simplifiedEntries, ...traditionalEntries]

            if (traditionalEntries.length === 0 && simplifiedEntries.length > 0) {
                simplifiedPreference++
            } else if (simplifiedEntries.length === 0 && traditionalEntries.length > 0) {
                traditionalPreference++
            }

            let sortedEntries = sortEntries(entries)

            result.push({
                text: word,
                traditional: sortedEntries[0] ? sortedEntries[0].traditional : word,
                simplified: sortedEntries[0] ? sortedEntries[0].simplified : word,

                position: {
                    offset,
                    line,
                    column
                },

                matches: sortedEntries
            })

            let wordArr = Array.from(word)
            let lastLineBreakIndex = word.lastIndexOf('\n')

            i += wordArr.length
            offset += word.length
            line += wordArr.filter(x => x === '\n').length
            column = lastLineBreakIndex >= 0
                ? word.length - lastLineBreakIndex
                : column + word.length
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

                    if (foundEntries === simplifiedEntries) {
                        simplifiedPreference++
                    } else if (foundEntries === traditionalEntries) {
                        traditionalPreference++
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
                continue
            }

            // Handle non-Chinese characters

            let end = i + 1

            for (; end < text.length; end++) {
                if (text[end].match(/\s/) != null || isChinese(text[end])) break
            }

            let word = text.slice(i, end).join('')
            pushToken(word)
        }

        return result
    }
}

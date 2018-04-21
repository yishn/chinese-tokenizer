const {prettify} = require('prettify-pinyin')

function parseLine(line) {
    let match = line.match(/^(\S+)\s(\S+)\s\[([^\]]+)\]\s\/(.+)\//)
    if (match == null) return

    let [, traditional, simplified, pinyin, english] = match

    pinyin = pinyin.replace(/u:/g, 'ü')
    let pinyinPretty = prettify(pinyin)

    return {traditional, simplified, pinyin, pinyinPretty, english}
}

class Trie {
    constructor() {
        this.content = {}
    }

    getKeyObject(key, create = false) {
        key = key.toString()

        let chars = key === '' ? [key] : key.split('')
        let obj = this.content

        for (let char of chars) {
            if (obj[char] == null) {
                if (create) obj[char] = {}
                else return {}
            }

            obj = obj[char]
        }

        return obj
    }

    get(key) {
        let obj = this.getKeyObject(key)

        return obj.values || []
    }

    getPrefix(key) {
        let _getPrefix = (key, obj = null) => {
            if (obj == null) obj = this.getKeyObject(key)
            let result = obj.values ? [...obj.values] : []

            for (let char in obj) {
                if (char === 'values' || obj[char] == null) continue

                result.push(..._getPrefix(key + char, obj[char]))
            }

            return result
        }

        return _getPrefix(key)
    }

    push(key, value) {
        let obj = this.getKeyObject(key, true)

        if (obj.values == null) obj.values = []
        if (!obj.values.includes(value)) obj.values.push(value)

        return this
    }
}

class Cedict {
    load(contents) {
        this.trie = new Trie()

        let lines = contents.split('\n')

        for (let line of lines) {
            if (line.trim() === '' || line[0] === '#') continue

            let entry = parseLine(line)
            if (entry == null) continue

            this.trie.push(entry.simplified, entry)
            this.trie.push(entry.traditional, entry)
        }
    }

    get(word) {
        return this.trie.get(word)
    }

    getPrefix(word) {
        return this.trie.getPrefix(word)
    }
}

module.exports = Cedict

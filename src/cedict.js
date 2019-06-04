const {prettify} = require('prettify-pinyin')
const Trie = require('./trie')

function parseLine(line) {
    let match = line.match(/^(\S+)\s(\S+)\s\[([^\]]+)\]\s\/(.+)\//)
    if (match == null) return

    let [, traditional, simplified, pinyin, english] = match

    pinyin = pinyin.replace(/u:/g, 'ü')
    let pinyinPretty = prettify(pinyin)

    return {traditional, simplified, pinyin, pinyinPretty, english}
}

class Cedict {
    load(contents) {
        this.simplifiedTrie = new Trie()
        this.traditionalTrie = new Trie()

        let lines = contents.split('\n')

        for (let line of lines) {
            if (line.trim() === '' || line[0] === '#') continue

            let entry = parseLine(line)
            if (entry == null) continue

            this.simplifiedTrie.push(entry.simplified, entry)
            this.traditionalTrie.push(entry.traditional, entry)
        }
    }

    get(word, traditional = false) {
        return traditional ? this.traditionalTrie.get(word) : this.simplifiedTrie.get(word)
    }

    getPrefix(word, traditional = false) {
        return traditional ? this.traditionalTrie.getPrefix(word) : this.simplifiedTrie.getPrefix(word)
    }
}

module.exports = Cedict

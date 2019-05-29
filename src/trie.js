class Trie {
    constructor() {
        this.content = {}
    }

    getKeyObject(key, create = false) {
        key = key.toString()

        let chars = key === '' ? [key] : Array.from(key)
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
        let inner = (key, obj = null) => {
            if (obj == null) obj = this.getKeyObject(key)
            let result = obj.values ? [...obj.values] : []

            for (let char in obj) {
                if (char === 'values' || obj[char] == null) continue

                result.push(...inner(key + char, obj[char]))
            }

            return result
        }

        return inner(key)
    }

    push(key, value) {
        let obj = this.getKeyObject(key, true)

        if (obj.values == null) obj.values = []
        if (!obj.values.includes(value)) obj.values.push(value)

        return this
    }
}

module.exports = Trie

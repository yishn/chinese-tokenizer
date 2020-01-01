import tokenizer from 'chinese-tokenizer'

const highlightHistoryMaxLength = 100

export const initState = {
    loading: 0,
    cedictData: null,
    tokenize: null,
    input: '',
    type: 'simplified',
    highlightHistory: [],
    highlightIndex: 0
}

export function commitDictionary(state, data) {
    return {
        loading: Infinity,
        cedictData: data,
        tokenize: tokenizer.load(data)
    }
}

export function updateProgress(state, value) {
    if (value === state.loading) return {}
    return {loading: value}
}

export function updateInput(state, value) {
    if (value === state.input) return {}
    return {input: value}
}

export function updateType(state, value) {
    if (value === state.type) return {}
    return {type: value}
}

export function updateHighlight(state, token) {
    if (
        token != null
        && state.highlightHistory[state.highlightIndex] != null
        && token.traditional === state.highlightHistory[state.highlightIndex].traditional
    ) return {}

    let newHistory = state.highlightHistory.slice(0, state.highlightIndex + 1)

    if (token != null) {
        token.matches.sort((x, y) => {
            return x.english < y.english ? -1 : +(x.english !== y.english)
        });

        token.matches = token.matches.filter((x, i, arr) => {
            return i === 0 || arr[i - 1].english !== x.english || arr[i - 1].pinyin !== x.pinyin
        })

        if (newHistory.length >= highlightHistoryMaxLength) newHistory.shift()
        newHistory.push(token)
    }

    return {
        highlightHistory: newHistory,
        highlightIndex: token != null ? newHistory.length - 1 : newHistory.length
    }
}

export function goBackHighlight(state) {
    return {
        highlightIndex: Math.max(state.highlightIndex - 1, 0)
    }
}

export function goForwardHighlight(state) {
    return {
        highlightIndex: Math.min(state.highlightIndex + 1, state.highlightHistory.length - 1)
    }
}

export function clearHighlight(state) {
    return updateHighlight(state, null)
}

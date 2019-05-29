import tokenizer from 'chinese-tokenizer'

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
    if (token == null) {
        return {
            highlightIndex: state.highlightHistory.length
        }
    }

    let newHistory = highlightHistory.slice(0, state.highlightIndex + 1)
    newHistory.push(token)

    return {
        highlightHistory: newHistory,
        highlightIndex: newHistory.length - 1
    }
}

export function goToPreviousHighlight(state) {
    return {
        highlightIndex: Math.max(state.highlightIndex - 1, 0)
    }
}

export function goToNextHighlight(state) {
    return {
        highlightIndex: Math.min(state.highlightIndex + 1, state.highlightHistory.length - 1)
    }
}

export function clearHighlight(state) {
    return updateHighlight(state, null)
}

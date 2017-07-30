export const initState = {
    loading: 0,
    input: '',
    type: 'simplified',
    highlight: null
}

export function commitDictionary(state, data) {
    window.cedictData = data
    return {loading: Infinity}
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
    return {highlight: token}
}

export function clearHighlight(state) {
    return updateHighlight(state, null)
}

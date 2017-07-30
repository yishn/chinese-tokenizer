export const initState = {
    loading: true,
    input: '',
    type: 'simplified',
    highlight: null
}

export function commitDictionary(state, data) {
    if (!state.loading || window.cedictData != null)
        return {}

    window.cedictData = data
    return {loading: false}
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

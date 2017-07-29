export const initState = {
    loading: true
}

export function loadDictionary(state, data) {
    if (!state.loading || window.cedictData != null)
        return {}

    window.cedictData = data
    return {loading: false}
}

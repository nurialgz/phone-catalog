let initialState = {
    phoneList: []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'FETCH_PHONES') {
        return {
            ...state,
            phoneList: action.data
        }
    } else {
        return {
            ...state
        }
    }
}

export default reducer;
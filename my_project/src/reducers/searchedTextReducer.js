let initialState = ""

const searchedTextReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = action.payload
            return state
        case "REMOVE":
            return state
        default:
            return state
    }
}
export default searchedTextReducer

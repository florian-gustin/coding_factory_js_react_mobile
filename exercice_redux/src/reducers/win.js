
const winReducer = (state = false, action) => {
    switch (action.type) {
        case "ISWIN" :
            state = true
            return state
        case "ISLOOSE" :
            state = false
            return state
        default:
            return state
    }
}
export default winReducer;

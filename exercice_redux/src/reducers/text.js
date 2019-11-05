
const textReducer = (state = "", action) => {
    switch (action.type) {
        case "SET":
            return state + action.payload
        case "CLEAR":
            return state;
        default:
            return state;
    }
}
export default textReducer;

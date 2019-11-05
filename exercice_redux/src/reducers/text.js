
const textReducer = (state = "", action) => {
    let newState = "";
    switch (action.type) {
        case "SET":
            newState = action.payload;
            return newState;
        case "CLEAR":
            return newState;
        default:
            return state;
    }
}
export default textReducer;

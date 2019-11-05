
const counterReducer = (state = 5, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state+1;
        case "RESET" :
            return state;
        default:
            return state;
    }
}
export default counterReducer;

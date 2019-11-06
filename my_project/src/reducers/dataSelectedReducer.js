// one object of one data result by name
let initialState = {};

const dataSelectedReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD" :
            state = action.payload
            return state;
        default:
            return state;
    }
}

export default dataSelectedReducer;

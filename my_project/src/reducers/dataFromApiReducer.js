let initialState = []

const dataFromApiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET":
            state = action.payload
            return state;
        default:
            return state;
    }
}

export default dataFromApiReducer;

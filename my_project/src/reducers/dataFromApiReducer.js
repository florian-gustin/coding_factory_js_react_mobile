let initialState = {
    data : {},
}

const dataFromApiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET":
            return {data : action.payload} ;
        default:
            return state;
    }
}

export default dataFromApiReducer;


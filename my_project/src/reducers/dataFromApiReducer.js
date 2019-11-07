let initialState = {
    data : {},
    status : true
}

const dataFromApiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET":
            return {...state, data : action.payload, status : true} ;
        case "CHANGESTATUS":
            return {...state, status : !state.status}
        default:
            return state;
    }
}

export default dataFromApiReducer;


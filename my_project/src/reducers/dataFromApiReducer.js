let initialState = {
    data : {},
    loaded : false,
    lock : false
}

const dataFromApiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET":
            return {...state, data : action.payload, loaded : true} ;
        case "CHANGESTATUS":
            return {...state, loaded : false}
        case "TOGGLELOCK":
            return {...state, lock: !state.lock}
        default:
            return state;
    }
}

export default dataFromApiReducer;


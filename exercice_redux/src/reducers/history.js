let initialState = [{}];


const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD" :
            if(state.length > 4) {
                state.shift()
                state.push(action.payload)
            }else {
                state.push(action.payload)
            }
            return state;
        default:
            return state;
    }
};

export default historyReducer;

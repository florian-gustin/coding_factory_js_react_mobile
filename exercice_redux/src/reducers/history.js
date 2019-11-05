let initialState = [{}];


const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD" :
            state.push({})
            return state;
        default:
            return state;
    }
};

export default historyReducer;

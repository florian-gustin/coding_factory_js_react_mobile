const darkModeReducer = (state = false, action) => {
    switch(action.type) {
        case "TOGGLE_DARKMODE" : 
            return !state;
        case "SET_DARKMODE":
            state = action.payload;
            return state;
        default:
            return state;
    }
};

export default darkModeReducer;
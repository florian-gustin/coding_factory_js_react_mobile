const darkModeReducer = (state = false, action) => {
    switch(action.type) {
        case "TOGGLE_DARKMODE" : 
        state = !state;
        console.log("toggle dk", state);
            return state;
        case "SET_DARKMODE":
            state = action.payload;
            return state;
        default:
            return state;
    }
};

export default darkModeReducer;
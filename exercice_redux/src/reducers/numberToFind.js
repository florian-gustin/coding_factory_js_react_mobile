function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const numberToFindReducer = (state = getRandomInt(9), action) => {
    switch (action.type) {
        case "RESET":
            return state;
        default:
            return state;
    }
}

export default numberToFindReducer;

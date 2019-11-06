let initialState = []

const favoritesListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = action.payload
            return state;
        case "REMOVE":
            let getNameToDelete = action.payload
            let tmpState = state
            let indexToRemove = ""
            tmpState.forEach((value, index) => {
                if(value.title==getNameToDelete){
                    indexToRemove = index
                }
            })
            tmpState.splice(indexToRemove, 1)
            return tmpState
        default:
            return state


    }
}

export default favoritesListReducer;

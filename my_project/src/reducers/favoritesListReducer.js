let initialState = {
    favorites : [],
    status : null
}

const favoritesListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDFAV":
            state.favorites.push(action.payload)
            return state
        case "REMOVEFAV":
            let getNameToDelete = action.payload
            let tmpState = state.favorites
            let indexToRemove = ""
            tmpState.forEach((value, index) => {
                if(value.title==getNameToDelete){
                    indexToRemove = index
                }
            })
            tmpState.splice(indexToRemove, 1)
            return {...state, favorites: tmpState, status: 'removed'}
        default:
            return state

    }
}

export default favoritesListReducer;

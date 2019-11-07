function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let initialState = [
    {
        id: getRandomInt(1000000),
        username: "admin",
        password: "admin"
    }
]

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDUSER":
            let getNew = action.payload
            let addId = getRandomInt(1000000)
            getNew.id = addId
            state.push(getNew);
            return state;
        case "REMOVE":
            let getRemove = action.payload
            let tmpState = state
            let indexToRemove = ''
            tmpState.forEach((value, index) => {
                if(value.title==getRemove){
                    indexToRemove = index
                }
            })
            tmpState.splice(indexToRemove, 1)
            return tmpState
        case "UPDATE":
            let getUpdate = action.payload
            let tmpStateBis = state
            let indexToUpdate = ''
            tmpState.forEach((value, index) => {
                if(value.title==getUpdate){
                    indexToUpdate = index
                }
            })
            tmpStateBis[index].username = getUpdate
            return tmpStateBis
        default:
            return state
    }
}

export default usersReducer

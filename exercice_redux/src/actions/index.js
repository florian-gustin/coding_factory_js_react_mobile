export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const resetCounter = () => {
    return {
        type : 'RESET'
    }
}

export const addHistory = (v) => {
    return {
        type : 'ADD',
        payload : v
    }
}


export const setText = (text) => {
    return {
        type: "SET",
        payload: text
    }
}

export const clearText = () => {
    return {
        type : "CLEAR"
    }
}

export const resetNumberToFind = () => {
    return {
        type : "RESET"
    }
}

export const isWin = () => {
    return {
        type : "ISWIN"
    }
}

export const isLoose = () => {
    return {
        type : "ISLOOSE"
    }
}

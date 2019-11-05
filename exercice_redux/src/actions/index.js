export const increment = () => {
    return {
        type: 'INCREMENT'
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

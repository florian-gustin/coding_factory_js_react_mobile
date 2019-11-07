// users
export const addUser = (v) => {
    return {
        type : "ADD",
        payload : v
    }
}
export const removeUser = (v) => {
    return {
        type : "REMOVE",
        payload : v
    }
}
export const updateUser = () => {
    return {
        type : "UPDATE",
        payload : v
    }
}
// searched text
export const addText = (v) => {
    return {
        type : "ADD",
        payload : v
    }
}
export const removeText = () => {
    return {
        type : "REMOVE"
    }
}

// data from API
export const getData = (v) => {
    return {
        type : "GET",
        payload : v
    }
}
export const changeStatusApi = () => {
    return {
        type : "CHANGESTATUS",
    }
}

// data selected
export const addSelectedData = (v) => {
    return {
        type : "ADD",
        payload : v
    }
}

// favorites list
export const addFavorite = (v) => {
    return {
        type : "ADD",
        payload : v
    }
}
export const removeFavorite = (v) => {
    return {
        type : "REMOVE",
        payload : v
    }
}

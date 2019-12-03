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

// favorites list
export const addFavorite = (v) => {
    console.log("add favorite", v);
    return {
        type : "ADDFAV",
        payload : v
    }
}

export const setFavorite = (v) => {
    console.log("set favorite", v);
    return {
        type : "SETFAV",
        payload : v
    }
}

export const removeFavorite = (v) => {
    return {
        type : "REMOVEFAV",
        payload : v
    }
}

// signin action

export const username = (v) => {
    return {
        type: "USERNAME",
        payload: v
    }
}

export const password = (v) => {
    return {
        type: "PASSWORD",
        payload: v
    }
}

export const clearSign = () => {
    return {
        type: "CLEAR"
    }
}

export const setMessage = (v) => {
    return {
        type: "SETMESSAGE",
        payload: v
    }
}

export const setLogged = (v) => {
    return {
        type: "SETLOGGED",
        payload : v
    }
}

// users list
export const addUser = (v) => {
    return {
        type : "ADDUSER",
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

// Dark Mode (et non pas Dark Horse de Katy Perry)

export const toggleDarkMode = () => {
    return {
        type: "TOGGLE_DARKMODE"
    }
}

export const setDarkMode = (v) => {
    return {
        type : "SET_DARKMODE",
        payload: v
    }
}
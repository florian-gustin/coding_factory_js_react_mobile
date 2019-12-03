let init = {
    email : "cedric@surflorianne.fr",
    password : "123456",
    message: "",
    logged : false,
}

const signReducer = (state = init, action) => {
    switch(action.type) {
        case "USERNAME":
            return {...state, email: action.payload};
        case "PASSWORD":
            return {...state, password: action.payload};
        case "CLEAR":
            state = init;
            return state;
        case "SETMESSAGE":
            return {...state, message : action.payload};
        case "LOGGED": 
        return {...state, logged : action.payload};
        default: 
            return state;
    }
}

export default signReducer;
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../types";

const userReducer =  (state = {}, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, 
            };
        case LOGIN_USER:
            return { ...state, 
                username: action.payload.username, 
                accesstoken: action.payload.accesstoken,
                refreshtoken: action.payload.refreshtoken,
                login: true,
            };
        case LOGOUT_USER:
            return { ...state, logout: action.payload,
                username: "",
                accesstoken: "",
                refreshtoken: "",
                login: false,
             };
        default:
            return state;
    }
};

export default userReducer;
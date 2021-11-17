import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../types";

const userReducer =  (state = {}, action) => {
    console.log(action.payload)
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, 
            };
        case LOGIN_USER:
            return { ...state, 
                ...action.payload,
                login: true,
            };
        case LOGOUT_USER:
            return { ...state,
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
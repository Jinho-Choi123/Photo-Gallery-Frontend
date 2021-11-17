import request from '../../lib/axios';

import { REGISTER_USER, LOGIN_USER} from '../types';

const USER_URL = "/auth";

//Action Creator
export const loginAction = (user) => {
    return (
        async (dispatch) => {
            request('post', USER_URL + "/login/", user)
                .then(response => {
                    dispatch({
                        type: LOGIN_USER,
                        payload: response.data
                    })
                })
        })
};

export const registerAction = (user) => {
    const data = request("post", USER_URL + "/register/", user);
    return {
        type: REGISTER_USER,
        payload: data
    };
};
import {request} from '../../lib/axios';

import { REGISTER_USER, LOGIN_USER} from '../types';

const USER_URL = "/auth";

//Action Creator
export const loginAction = (user) => {
    const data = request("post", USER_URL + "/token/", user);
    return {
        type: USER_LOGIN,
        payload: data
    };
};

export const registerAction = (user) => {
    const data = request("post", USER_URL + "/register/", user);
    return {
        type: USER_REGISTER,
        payload: data
    };
}
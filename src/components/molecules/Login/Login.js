import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../../redux/actions/User';
import {withRouter} from 'react-router-dom';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onUsernameHandler = (e) => {
        setUsername(e.target.value);
    }
    
    const onPasswordHandler = (e) => {
        setPassword(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const user = {
            username: username,
            password: password,
        }

        dispatch(login())
    }

}
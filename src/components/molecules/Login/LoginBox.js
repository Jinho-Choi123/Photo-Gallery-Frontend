import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../../redux/actions/User';
import {withRouter} from 'react-router-dom';

const LoginBox = (props) => {
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
        let user = new FormData();
        user.append('username', username);
        user.append('password', password);

        dispatch(loginAction(user))
            .then((res) => {
                if(res.status === 200) {
                    props.history.push('/');
                }
                else {
                    console.log(res)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" value={username} onChange={onUsernameHandler} />

                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={onPasswordHandler} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}

export default LoginBox;
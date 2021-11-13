import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import {useSelector} from 'react-redux';
import {FaUserCircle} from 'react-icons/fa';

const Stylenav = styled.nav`
    width: 100%;
    display: inline-block;
    text-align: right;
`;

const MyPagebtn = () => {
    const username = useSelector(state => state.username);
    return (
        <div>
            <Button> <FaUserCircle />Hello, {username} </Button>
        </div>
    )
}

function Navbar() {
    const login = useSelector(state => state.login);
    if(login === true) {
        return (
            <Stylenav>
                <Button transparent white>Gallery</Button>
                <Button transparent white>About</Button>
                <Button transparent white>Search</Button>
                <MyPagebtn />
            </Stylenav>

        )
    }
    else {
        return (
            <Stylenav>
                <Button transparent white>Gallery</Button>
                <Button transparent white>About</Button>
                <Button transparent white>Search</Button>
                <Button >Register</Button>
                <Button>Login</Button>
            </Stylenav>
        )
    }

}


export default Navbar;
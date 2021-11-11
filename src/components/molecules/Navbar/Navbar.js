import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

const Stylenav = styled.nav`
    width: 100%;
    display: inline-block;
    text-align: right;
`;

function Navbar() {
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


export default Navbar;
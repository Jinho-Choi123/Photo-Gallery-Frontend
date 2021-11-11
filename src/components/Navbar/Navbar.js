import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button/Button';

const Stylenav = styled.nav`
    float: right;
    padding-right: 5rem;
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
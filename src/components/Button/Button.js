import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
    font-size: 1.5rem;
    padding: 0.3rem 1rem;
    border-radius: 2rem;
    border: none;
    margin-left: 3rem;
    margin-top: 1rem;
    font-family: 'Roboto', sans-serif;
    background-color: ${props => props.transparent ? 'transparent': '#FFFFFF'};
    color: ${props => props.white ? '#FFFFFF' : '#000000'};
`;

Button.propTypes = {
    transparent: PropTypes.bool,
    white: PropTypes.bool,
}

Button.defaultProps = {
    transparent: false,
    white: false,
}
export default Button
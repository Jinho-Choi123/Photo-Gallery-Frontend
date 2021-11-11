import React from 'react';
import styled from 'styled-components';

const Styletext = styled.text`
    font-size: 8rem;
    font-family: 'Roboto', sans-serif;
    background-color: 'transparent';
    color: #FFFFFF;
    display: block;
    padding-top: 15rem;
`;

function Maintext(props) {
  return (
    <Styletext>{props.text}</Styletext>
    );
}

export default Maintext;
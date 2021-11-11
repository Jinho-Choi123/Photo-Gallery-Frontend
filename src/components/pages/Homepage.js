import React from 'react';
import Navbar from '../molecules/Navbar/Navbar';
import Maintext from '../atoms/Maintext/Maintext';
import styled from 'styled-components';

const Styleimg = styled.img`
    margin-top: 3.5rem;
`;


function Homepage() {
  return (
    <div>
        <Navbar />
        <Maintext text="YOUR OWN GALLERY"/>
        <Styleimg src="/icons/Playbutton.png"/>
    </div>
    );
}
export default Homepage;
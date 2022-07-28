import React from 'react';
import styled from 'styled-components';
import { HeroButtonAlt, HeroButtonPrimary } from '../components/Buttons/HeroButtons';
import { HeroText } from '../components/HeroSection/HeroText';

const HomeContainer = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
background: url(${require(`../images/background.jpg`)}) no-repeat fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-position-y: 80%;
background-size: cover;
position: relative;
padding: 2rem 0rem;
padding-left: 2rem;

@media screen and (max-width: 768px){
  padding: 0;
  padding-left: 0;
  align-items: center;
}
`

const ButtonContainer = styled.div`
display: flex

@media screen and (max-width: 768px){
  flex-direction: column;
}
`

export const Home = () => {
  return (
    <HomeContainer>
        <HeroText/>
        <ButtonContainer>
          <HeroButtonPrimary></HeroButtonPrimary>
          <HeroButtonAlt></HeroButtonAlt>
        </ButtonContainer>
    </HomeContainer>
  )
}


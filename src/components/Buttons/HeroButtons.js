import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroButton = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 0.5rem;
font-family: 'Bodoni Moda', serif;
font-size: 1rem;
margin: 2rem 1rem 0 0;
width: 10rem;
font-weight: 800;
color: var(--tertiary);
cursor: pointer;
background-color: var(--secondary);
border: 2px solid var(--tertiary);
text-decoration: none;

&:hover {
  color: var(--tertiary);
  background-color: var(--primary);
  border: 2px solid var(--tertiary);
}

@media screen and (max-width: 768px){
  margin: 1rem 0 0 0;
}
`

const HeroButtonAltStyle = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 0.5rem;
font-family: 'Bodoni Moda', serif;
margin: 2rem 1rem 0 0;
width: 10rem;
font-weight: 800;
color: var(--secondary);
cursor: pointer;
background-color: var(--tertiary);
border: 2px solid var(--secondary);
text-decoration: none;

&:hover {
  color: var(--tertiary);
  background-color: var(--primary);
  border: 2px solid var(--tertiary);
}

@media screen and (max-width: 768px){
  margin: 1rem 0 0 0;
}
`

export const HeroButtonPrimary = () => {
  return (
    <HeroButton to="/sign-up">SIGN UP</HeroButton>
  )
}

export const HeroButtonAlt = () => {
  return (
    <HeroButtonAltStyle to="/discover">DISCOVER</HeroButtonAltStyle>
  )
}

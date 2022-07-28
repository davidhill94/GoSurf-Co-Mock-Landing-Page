import React from 'react';
import styled from 'styled-components';

const HeroTextContainer = styled.div`
display: flex;
width: 65%;
font-family: 'Dancing Script', cursive;

@media screen and (max-width: 768px){
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
`

const Content = styled.h3`
font-size: 5rem;
color: var(--secondary);

@media screen and (max-width: 960px){
  font-size: 4rem;
}
@media screen and (max-width: 500px){
  font-size: 2.5rem;
}
`

export const HeroText = () => {
  return (
    <HeroTextContainer>
        <Content>Learn Surfing the<br></br>gnarly way</Content>
    </HeroTextContainer>
  )
}

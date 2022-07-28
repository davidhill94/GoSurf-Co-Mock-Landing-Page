import React from 'react';
import styled from 'styled-components';

const LocationsContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background: url(${require(`../images/background.jpg`)}) no-repeat fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-position-y: 80%;
background-size: cover;
`

const LocationsText = styled.h1`
color: var(--secondary);
`

export const Locations = () => {
  return (
    <LocationsContainer>
        <LocationsText>LOCATIONS</LocationsText>
    </LocationsContainer>
  )
}

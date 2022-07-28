import styled from "styled-components";
import { Link } from "react-router-dom";

export const SocialBarContainer = styled.div`
width: 100%;
height: auto;
padding: 0.5rem 2rem;
display: flex;
aling-items: center;
justify-content: center;
margin: 2rem 0 0 0;
`

export const SocialItem = styled.a`
font-size: 2rem;
color: var(--primary);
margin: 0 0.5rem;
background-color: var(--tertiary);
border-radius: 50%;
padding: 1rem;
display: flex;
align-items: center;
justify-content: center;
transition: all 1s ease;

&:hover {
    border-radius: 5%;
    background-color: var(--primary);
    color: var(--tertiary);
    transform: rotateZ(360deg);
}

@media screen and (max-width: 500px){
    font-size: 1rem;
}
`

export const SocialItemLink = styled(Link)`
font-size: 2rem;
color: var(--primary);
margin: 0 0.5rem;
background-color: var(--tertiary);
border-radius: 50%;
padding: 1rem;
display: flex;
align-items: center;
justify-content: center;
transition: all 1s ease;

&:hover {
    border-radius: 5%;
    background-color: var(--primary);
    color: var(--tertiary);
    transform: rotateZ(360deg);
}

@media screen and (max-width: 500px){
    font-size: 1rem;
}
`
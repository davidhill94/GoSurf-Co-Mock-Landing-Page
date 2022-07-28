import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
width: 95%;
height: 90px;
display: flex;
align-items: center;
justify-content: start;
border-radius: 20px;
margin: 1rem;
padding: 0 1rem;
position: fixed;
top: 0;
left: 0;
z-index: 10;

@media screen and (max-width: 768px){
    justify-content: space-between;
}
`

export const NavbarMenu = styled.div`
display: flex;
margin-left: 7rem;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavbarItem = styled.div`
margin: 2rem 1.5rem 0 0;
`

export const NavbarLink = styled(Link)`
font-size: 1.5rem;
color: var(--secondary);
cursor: pointer;
font-family: 'Bodoni Moda', serif;
font-weight: 800;
border-bottom: 2px solid transparent;
text-decoration: none;

&:hover {
   color: var(--secondary);
}

@media screen and (max-width: 960px){
    font-size: 1rem;
}
`

export const LogoLink = styled(Link)`

`

export const NavbarLogo = styled.img`
width: 150px;
height: auto;

@media screen and (max-width: 500px){
    width: 100px;
}
`

export const NavBars = styled.p`
display: none;

@media screen and (max-width: 768px){
    font-size: 1.5rem;
    background-color: var(--tertiary);
    color: var(--secondary);
    cursor: pointer;
    display: flex;
}
`
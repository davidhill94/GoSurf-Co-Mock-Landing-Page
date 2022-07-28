import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
width: 100%;
height: 100vh;
background: #419FA7;
background: -webkit-linear-gradient(top, #419FA7, #FFFFFF);
background: -moz-linear-gradient(top, #419FA7, #FFFFFF);
background: linear-gradient(to bottom, #419FA7, #FFFFFF);
z-index: 999;
position: fixed;
top: 0vh;
left: 0;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
transition: 0.3s ease-in-out;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const TopContainer = styled.div`
display: flex;
align-items: center;
padding: 1rem;
justify-content: space-between;
background-color: var(--tertiary);
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 20vh;
`

export const CloseIcon = styled.div`
color: var(--secondary);
font-size: 3rem;
margin-top: 1rem;

@media screen and (max-width: 500px){
    font-size: 2rem;
}
`

export const SidebarLogoLink = styled(Link)`

`

export const SidebarLogo = styled.img`
width: 150px;
height: auto;

@media screen and (max-width: 500px){
    width: 100px;
}
`

export const SidebarMenu = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 20vh;
padding-top: 2rem;
`

export const SidebarItem = styled.div`
width: 50%;
margin: 0.5rem 0;
background-color: var(--tertiary);
color: var(--secondary);
border: 2px solid var(--secondary);
border-left: 10px solid var(--secondary);
border-right: 10px solid var(--secondary);
border-radius: 20px 20px 70px 70px;
padding: 0.3rem;
font-weight: 800;
text-align: center;
font-family: 'Bodoni Moda', serif;

@media screen and (max-width: 500px){
    width: 90%;
    font-size: 0.8rem;
}
`

export const SidebarLink = styled(Link)`
text-decoration: none;
`
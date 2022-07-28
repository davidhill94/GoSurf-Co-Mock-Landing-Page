import React from 'react';
import logo from '../../images/logo.png';
import { FaBars } from 'react-icons/fa';
import {
    NavbarContainer,
    NavBars,
    LogoLink,
    NavbarLogo,
    NavbarMenu,
    NavbarItem,
    NavbarLink
} from './NavbarElements.js';

export const Navbar = ({ toggle }) => {
    return (
        <NavbarContainer>
            <NavBars onClick={toggle}><FaBars /></NavBars>
            <LogoLink to="/">
            <NavbarLogo src={logo} alt="Surf Logo"></NavbarLogo>
            </LogoLink>
            <NavbarMenu>
                <NavbarItem>
                    <NavbarLink to="/about">ABOUT</NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/camp">CAMP</NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/locations">LOCATIONS</NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/reviews">REVIEWS</NavbarLink>
                </NavbarItem>
            </NavbarMenu>
        </NavbarContainer>
    )
}

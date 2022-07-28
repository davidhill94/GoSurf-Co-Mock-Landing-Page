import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { 
    SidebarContainer,
    TopContainer,
    CloseIcon,
    SidebarLogoLink,
    SidebarLogo,
    SidebarMenu,
    SidebarItem,
    SidebarLink
 } from './SidebarElements';
 import logo from '../../images/logo.png';
import { SocialBar } from '../Social/SocialBar';


export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
        <TopContainer>
        <CloseIcon onClick={toggle}><IoMdClose />
        </CloseIcon>
        <SidebarLogoLink to="/" onClick={toggle}>
            <SidebarLogo src={logo} alt="Surf Logo"></SidebarLogo>
        </SidebarLogoLink>
        </TopContainer>
        <SidebarMenu>
            <SidebarItem>
                <SidebarLink to="/about" onClick={toggle}>ABOUT</SidebarLink>
            </SidebarItem>
            <SidebarItem>
                <SidebarLink to="/camp" onClick={toggle}>CAMP</SidebarLink>
            </SidebarItem>
            <SidebarItem>
                <SidebarLink to="/locations" onClick={toggle}>LOCATIONS</SidebarLink>
            </SidebarItem>
            <SidebarItem>
                <SidebarLink to="/reviews" onClick={toggle}>REVIEWS</SidebarLink>
            </SidebarItem>
            <SidebarItem>
                <SidebarLink to="/sign-up" onClick={toggle}>SIGN UP</SidebarLink>
            </SidebarItem>
        </SidebarMenu>
        <SocialBar toggle={toggle}/>
    </SidebarContainer>
  )
}
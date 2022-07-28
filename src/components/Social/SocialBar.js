import React from 'react'
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa'
import { 
    SocialBarContainer,
    SocialItem,
    SocialItemLink
} from './SocialBarElements'

export const SocialBar = ({ toggle }) => {
  return (
    <SocialBarContainer>
        <SocialItem href='/' target="_blank" onClick={toggle}>
            <FaFacebook />
        </SocialItem>
        <SocialItem href='/' target="_blank" onClick={toggle}>
            <FaInstagram />
        </SocialItem>
        <SocialItem href='/' target="_blank" onClick={toggle}>
            <FaTwitter />
        </SocialItem>
        <SocialItemLink to="/contact" onClick={toggle}>
            <FaPhone />
        </SocialItemLink>
    </SocialBarContainer>
  )
}

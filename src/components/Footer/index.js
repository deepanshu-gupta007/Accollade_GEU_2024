import styled from 'styled-components'
import {Bio} from '../../data/constants'
import {theme} from '../../backgrounds/Themes'
import {Instagram as InstagramIcon, Email as EmailIcon} from '@mui/icons-material'
import React, { useState } from 'react';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`
const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
`
const Logo = styled.h1`
  font-weight: 700;
  font-size: 36px;
  letter-spacing: 2px;
  color: ${theme.primary};
`
const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`
const NavLink = styled.a`
  color: ${theme.white+90};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    font-weigth: 1000;
    color: ${theme.primary};
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${theme.white};
  text-align: center;
`
const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  color: #bcbcbc;
`
const SocialMediaIcon = styled.div`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  &:hover{
    transform: scale(1.2);
  }
`;
const SocialMediaLink = styled.a`
  color: #bcbcbc;
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  &:hover{
    transform: scale(1.2);
  }
`;

function Footer() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <FooterContainer id="help">
      <FooterWrapper>
        <Logo>{Bio.name}</Logo>
        <Nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="#events">Events</NavLink>
          <NavLink href="#contact">Contact Us</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaLink href={Bio.insta} target="_blank"><InstagramIcon/></SocialMediaLink>
          <SocialMediaIcon onClick={() => copyToClipboard(Bio.email)}><EmailIcon color="inherit" /></SocialMediaIcon>
          {copied && <span>Copied to clipboard!</span>}
        </SocialMediaIcons>
        <Copyright>&copy; 2024 {Bio.name}. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer
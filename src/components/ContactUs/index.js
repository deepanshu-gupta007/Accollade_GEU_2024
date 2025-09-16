import React, { useState } from 'react';
import {theme} from '../../backgrounds/Themes'
import {Email as EmailIcon, Phone as PhoneIcon, Instagram as InstagramIcon,} from '@mui/icons-material'
import {Bio} from '../../data/constants'
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 60px 120px;
  padding-bottom: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 32px 60px;
  }
  @media (max-width: 768px) {
    padding: 32px 16px;
  }
`
export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${theme.content_text};
  line-height: 75px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`
export const Span = styled.span`
  font-weight: 500;
  font-size: 36px;
  display: flex;
  gap: 12px;
  color: ${theme.white};
  line-height: 40px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`
export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  text-align: justify;
  color: ${theme.content_text};
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`
const SocialMediaIcons = styled.div`
display: flex;
flex-direction: column;
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
  transform: scale(1.1);
}
`;
const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    };
  
  return (
    <div id="about">
      <Container id="contact">
        <br/>
        <Title>Contact Us</Title>
        <br/>
        <SocialMediaIcons>
          <SocialMediaIcon onClick={() => copyToClipboard(Bio.email)}><EmailIcon color="inherit" />   {Bio.email}</SocialMediaIcon>
          <SocialMediaIcon onClick={() => copyToClipboard(Bio.insta)}><InstagramIcon color="inherit" />   {Bio.insta}</SocialMediaIcon>
          {Bio.contact.map((contact, index) => (
            <SocialMediaIcon key={index} onClick={() => copyToClipboard(contact)}><PhoneIcon />{contact}</SocialMediaIcon>
          ))}
          {copied && <span>Copied to clipboard!</span>}
        </SocialMediaIcons>
        <br/>
      </Container>
    </div>
  )
}

export default Contact
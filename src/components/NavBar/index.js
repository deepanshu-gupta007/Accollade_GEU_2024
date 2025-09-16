import React from 'react'
import {theme} from '../../backgrounds/Themes'
import { Bio } from '../../data/constants'
import { FaBars } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    trastion: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`
export const NavLogo = styled.div`
  width: 80%;    
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${theme.primary};
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`
export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:end;
  gap: 20px;
  padding: 0 0px;
  list-style: none;
  @media screen and (max-width: 610px) {
    display: none;
  }
`
export const NavLink = styled.a`
  font-size: 20px;
  color: ${theme.primary};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`
export const Decor = styled.div`
  &:hover {
    color: ${theme.primary};
    text-decoration: underline;
    text-underline-offset: 1rem;
    transform: scale(1.1);
  }
`
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 610px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${theme.primary};
  }
`
export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: rgba(240, 255, 255, 0.75);;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`
export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`
export const MobileMenuLink = styled(LinkR)`
  color: ${theme.primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${theme.primary};
  }
  &.active {
    border-bottom: 2px solid ${theme.primary};
  }
`
export const MobileMenuButton = styled.a`
  border: 1.8px solid ${theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  &:hover {
    background: ${theme.primary};
    color: ${theme.white};
  }
`
export  const MobileLink = styled.a`
  color: black;
  text-shadow: 0 0 4px ${theme.white};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${theme.primary};
    text-shadow: ${theme.text_shadow};
    text-decoration: underline;
    text-underline-offset: 0.7rem;
  }
`
export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`
export const Image = styled.img`
  width: 200px;
  height: 50px;
  padding-top: 5px 5px;
`
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Nav>
      <NavbarContainer>
        <NavLink href="/">
          <NavLogo to='/' style={{ display: "flex", alignItems: "center", color: `${theme.white}`, marginBottom: '20;' }}>
            <Image src={Bio.logo}/>
          </NavLogo>
        </NavLink>
        <MobileIcon>
          <FaBars onClick={() => {setIsOpen(!isOpen)}} />
        </MobileIcon>
        <NavItems>
          <NavLink href="/"><Decor>Home</Decor></NavLink>
          <NavLink href='#events'><Decor>Events</Decor></NavLink>
          <NavLink href='#help'><Decor>Help</Decor></NavLink>
          <NavLink href='#contact'><Decor>Contact Us</Decor></NavLink>
        </NavItems>
        { isOpen && 
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="/" onClick={() => {setIsOpen(!isOpen)}}>Home</MobileLink>
            <MobileLink href='#events' onClick={() => {setIsOpen(!isOpen)}}>Events</MobileLink>
            <MobileLink href='#help' onClick={() => {setIsOpen(!isOpen)}}>Help</MobileLink>
            <MobileLink href='#contact' onClick={() => {setIsOpen(!isOpen)}}>Contact Us</MobileLink>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
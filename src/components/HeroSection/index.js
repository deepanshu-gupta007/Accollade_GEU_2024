import React from 'react'
import {theme} from '../../backgrounds/Themes'
import {Bio} from '../../data/constants'
import styled from "styled-components"
import back from "./back.JPG"

export const HeroContainer = styled.div`
  background-image: url(${back}); 
  background-size: cover;
  background-position: center;
  display: flex;
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
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 1;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 640px) {
    order: 1;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }
  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`
export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 45%;
  border: 3px solid ${theme.primary};
  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }
  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`
export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${theme.white};
  text-shadow: 0 0 4px black;
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
  text-shadow: 0 0 4px black;
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
const ECard = styled.a`
    width: 100%;
    max-width: 350px;
    margin: auto;
    background: rgba(225, 255, 200, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    box-shadow: 0 3px 4px 0 #ced4da;
    border-top: 1px solid ${theme.primary};
    border-left: 1px solid ${theme.primary};
    justify-content: space-between;
    position: relative;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    height: 100%;
    text-decoration: none;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 4px 4px 0 #ced4da, 0 10px 8px -8px #ced4da;
        background: rgba(200, 225, 200, 0.1); 
        filter: brightness(1.1);
    }
`
const ETitle = styled.div`
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    color: ${theme.white};
    padding-bottom: 5px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 640px) {
      font-size: 24px;
    }
`
const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroLeftContainer>
          <Title>{Bio.name}</Title>
          <Span>{Bio.moto}</Span>
          <br/>
          <br/>
        </HeroLeftContainer>
        <HeroRightContainer>
          <ECard href="#events">
            <ETitle>REGISTER NOW</ETitle>
          </ECard>
        </HeroRightContainer>
      </HeroContainer>
    </div>
  )
}

export default HeroSection
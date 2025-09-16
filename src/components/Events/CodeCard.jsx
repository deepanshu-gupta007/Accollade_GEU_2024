import React from 'react'
import styled from 'styled-components'
import { theme } from '../../backgrounds/Themes'

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  overflow-x: hidden;
  margin-left: 150px;
  margin-right: 150px;
  @media (max-width: 960px){
    margin-left: 100px;
    margin-right: 100px;
  }
  @media (max-width: 768px){
    margin-left: 50px;
    margin-right: 50px;
  }
  @media (max-width: 400px){
    margin-left: 20px;
    margin-right: 20px;
  }
`
export const Head = styled.a`
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    color: ${theme.head};
    text-decoration: none;
    padding-bottom: 10px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const SubHeadContentContainer = styled.div`
  display: flex;
`
export const SubHead = styled.div`
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    color: ${theme.primary};
    padding-left: 25px;
    padding-bottom: 5px;
`
export const Content = styled.div`
    font-size: 16px;
    font-weight: 800;
    text-align: left;
    color: ${theme.content_text};
    padding-left: 5px;
    padding-top: 2px;
    padding-bottom: 6px;
`
export const Desc = styled.div`
    font-size: 16px;
    font-weight: 750;
    text-align: justify;
    color: ${theme.content_text};
    padding-left: 30px;
    padding-top: 2px;
    padding-bottom: 6px;
`
export const IDesc = styled.div`
    font-size: 16px;
    font-weight: 750;
    text-align: center;
    color: ${theme.content_text};
    padding-left: 30px;
    padding-top: 2px;
    padding-bottom: 6px;
`
export const ContentLink = styled.a`
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    color: ${theme.primary};
    padding-left: 10px;
    padding-bottom: 5px;
    cursor: pointer;
`
const ECard = styled.a`
    width: 100%;
    max-width: 250px;
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
const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: ${theme.white};
    padding-bottom: 5px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const CardContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-content: center;
  grid-gap: 12px;
  grid-template-columns: repeat(3, 1fr);
  @media (min-width: 900px) {
    padding-left: 10%;
    padding-right: 10%;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 512px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    padding-left: 20%;
    padding-right: 20%;
  }
`
const CodeCard = ({event}) => {
    return (
        <Body id={event.ename}>
            <br/>
            <br/>
            <Head href={event.reg_link}>{event.name}</Head>
            <br/>
            <SubHeadContentContainer>
              <SubHead>Registration Link: </SubHead>
              <ContentLink href={event.reg_link}>Click here</ContentLink>
            </SubHeadContentContainer>
            <SubHeadContentContainer>
              <SubHead>PPT Submission Link: </SubHead>
              <ContentLink href={event.ppt_sub}>Click here</ContentLink>
            </SubHeadContentContainer>
            <br/>
            <SubHeadContentContainer>
              <SubHead>Category: </SubHead>
              <Content>{event.category}</Content>
            </SubHeadContentContainer>
            <SubHeadContentContainer>
              <SubHead>Date: </SubHead>
              <Content>{event.date}</Content>
            </SubHeadContentContainer>
            <SubHeadContentContainer>
              <SubHead>Location: </SubHead>
              <Content>{event.location}</Content>
            </SubHeadContentContainer>
            <SubHeadContentContainer>
              <SubHead>Time: </SubHead>
              <Content>{event.time}</Content>
            </SubHeadContentContainer>
            <SubHeadContentContainer>
              <SubHead>Eligibility: </SubHead>
              <Content>{event.eligibility}</Content>
            </SubHeadContentContainer>
            <SubHeadContentContainer>
              <SubHead>Price: </SubHead>
              <Content>{event.price}</Content>
            </SubHeadContentContainer>
            <br/>
            <SubHead>Description: </SubHead>
            <Desc>{event.description}</Desc>
            <br/>
            <br/>
            <IDesc>READ THE INSTRUCTIONS CAREFULLY</IDesc>
            <br/>
            <CardContainer>
              <ECard href={event.instruction}>
                <Title>Instructions</Title>
              </ECard>
              <ECard href={event.domains}>
                <Title>Domains</Title>
              </ECard>
              <ECard href={event.template}>
                <Title>PPT Template</Title>
              </ECard>
            </CardContainer>
            <br/>
        </Body>
    )
}

export default CodeCard
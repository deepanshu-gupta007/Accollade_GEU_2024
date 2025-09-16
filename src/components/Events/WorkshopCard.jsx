import React from 'react'
import styled from 'styled-components'
import { theme } from '../../backgrounds/Themes'
import { Link } from 'react-router-dom'

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow-x: hidden;
  @media (min-width: 960px){
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (min-width: 550px){
    padding-left: 50px;
    padding-right: 50px;
  }
`
export const Head = styled.a`
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    color: ${theme.white};
    text-decoration: none;
    padding-bottom: 10px;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  @media (min-width: 900px) {
    padding-left: 10%;
    padding-right: 10%;
  }
  @media (max-width: 512px) {
    margin: 0 auto;
    position: relative;
    display: grid;
    justify-content: center;
    grid-gap: 12px;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    padding-left: 20%;
    padding-right: 20%;
  }
`
const ECard = styled.div`
    width: 100%;
    max-width: 400px;
    background: rgba(225, 255, 200, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    box-shadow: 0 3px 4px 0 #ced4da;
    border-top: 1px solid ${theme.primary};
    border-left: 1px solid ${theme.primary};
    justify-content: space-between;
    position: relative;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    height: 100%;
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
    color: ${theme.white};
`
export const Content = styled.div`
    font-size: 16px;
    font-weight: 800;
    text-align: left;
    color: ${theme.primary};
`
export const Desc = styled.div`
    font-size: 18px;
    font-weight: 750;
    text-align: left;
    padding: 10px 150px 10px 150px;
    color: ${theme.white};
    @media (max-width: 900px) {
      padding: 10px 100px 10px 100px;
    }
    @media (max-width: 512px) {
      padding: 10px 25px 10px 25px;
    }
    @media (max-width: 768px) {
      padding: 10px 50px 10px 50px;
    }
`
export const ContentLink = styled.a`
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    color: ${theme.primary};
    cursor: pointer;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; 
`
const WorkshopCard = ({event}) => {
    return (
        <Body>
          <br/>
          <Head href={event.reg_link}>{event.name.toUpperCase()}</Head>
          <Desc>{event.description} There are some greateful workshops mentioned below... </Desc>
          <br/>
          <CardContainer>
            {event.events.map((singleEvent) => (
              <StyledLink to={`/event_info/${event.id}/${singleEvent.eid}`} key={singleEvent.eid}>
                <ECard key={singleEvent.eid}>
                  <Title>{singleEvent.ename}</Title>
                </ECard>
              </StyledLink>
            ))}
          </CardContainer>
          <br/>
        </Body>
    )
}

export default WorkshopCard
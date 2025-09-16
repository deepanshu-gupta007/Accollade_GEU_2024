import React from 'react'
import styled from 'styled-components'
import EventCard from './EventCard'
import { Link } from 'react-router-dom';
import { events } from '../../data/constants'
import { theme } from '../../backgrounds/Themes'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 80px 30px;
    @media (max-width: 960px) {
      padding: 66px 16px;
    }
    @media (max-width: 640) {
      padding: 32px 16px;
    }
`
export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0 0 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`
export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${theme.content_text};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`
export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 75%;
    color: ${theme.primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
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
  @media (max-width: 778px) {
    width: 90%;
    margin: 0 auto;
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    justify-content: center;
    grid-gap: 12px;
    grid-template-columns: repeat(2, 1fr);
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
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; 
`
const Events = () => {
  return (
    <Container id="events">
      <Wrapper>
        <Title>EVENTS</Title>
        <Desc>Events encompass a spectrum of activities, ranging from code crusades and workshops, fostering technical skill development, to artistic and ground events encompassing acting, dancing, and singing. They serve as platforms for professional growth, creative expression, and community engagement, catering to diverse interests and aspirations within both technical and non-technical domains.</Desc>
        <br/>
        <CardContainer>
          {events.map((event) => (
            <StyledLink to={`/event_info/${event.id}`} key={event.id}>
              <EventCard event={event} />
            </StyledLink>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Events
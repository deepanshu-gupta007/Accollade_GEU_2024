import React from 'react'
import styled from 'styled-components'
import { theme } from '../../backgrounds/Themes'

const Card = styled.div`
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
    font-weight: 400;
    text-align: center;
    color: ${theme.white};
    padding-bottom: 10px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`
const EventCard = ({event}) => {
    return (
        <Card>
            <Title>{event.name}</Title>
        </Card>
    )
}

export default EventCard

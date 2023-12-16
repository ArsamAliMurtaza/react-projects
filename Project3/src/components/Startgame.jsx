import React from 'react'
import styled from 'styled-components'

const Startgame = () => {
  return (
    <Container>
        <div><img src="/dices.png" alt="Dices" /></div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button>Play Now</Button>
        </div>
    </Container>
  )
}

export default Startgame;


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1182px;
    margin: 0 auto;
    height: 100vh;
    .content {
        h1 {
            font-size: 96px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            white-space: nowrap;
        } 
    }
    `
const Button = styled.button`
    background-color: black;
    display: flex; 
    padding: 10px 18px;
    justify-content: center;
    border-radius: 5px;
    color: white;
    min-width: 220px;
    border: none;
    font-size: 16px;
    
    &:hover {
        cursor: pointer;
        background-color: #525252;
    }   
    `;

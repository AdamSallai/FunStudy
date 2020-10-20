import React from 'react'
import styled from 'styled-components';


export default function MemoryGame() {
    return (
        <Memory id="memory">
            <h1>Memory game</h1>
            <div>Enter difficulty</div>
            <div>START</div>
        </Memory>
    )
}

const Memory = styled.div`
    margin: 300px 0px;
`

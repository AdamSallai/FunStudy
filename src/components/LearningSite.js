import React from 'react'
import styled from 'styled-components';

export default function LearningSite() {
    return (
        <Learning id="learning_site">
            <h1>Learning</h1>
            <div>Enter difficulty</div>
            <div>START</div>
        </Learning>
    )
}

const Learning = styled.div`
    margin: 300px 0px;
`

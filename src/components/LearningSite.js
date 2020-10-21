import React from 'react'
import styled from 'styled-components';
import LearningData from './LearningData';

export default function LearningSite() {
    return (
        <Learning id="learning_site">
        <h1>Learning</h1>
        <form action="/learning">
            <label htmlFor="difficulty">Set difficulty </label>
                <select id="difficulty" name="difficulty">
                    <option value="easy">Easy</option>
                    <option value="hard">Hard</option>
                </select>
        <button>Start</button>
      </form>
        </Learning>
    )
}

const Learning = styled.div`
    margin: 300px 0px;
`

import React from 'react'
import styled from 'styled-components';
import LearningData from './LearningData';

export default function LearningSite() {
    return (
        <Learning id="learning_site">
      
      <Img>image</Img>
      <Content>
        <h1>Learning</h1>
        <form action="/learning">
            <label htmlFor="difficulty">Set difficulty </label>
                <select id="difficulty" name="difficulty">
                    <option value="easy">Easy</option>
                    <option value="hard">Hard</option>
                </select>
        <button>Start</button>
      </form>
      
      </Content>
        </Learning>
    )
}

const Content = styled.div`
  margin: 0px, 60px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const Learning = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Img = styled.div`
  height: 300px;
  width: 400px;
  background-color: grey;
`;

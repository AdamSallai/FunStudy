import React from "react";
import styled from "styled-components";
import LearningData from "./LearningData";

export default function LearningSite() {
  return (
    <Learning id="learning_site">
      <IMG src="/learning.JPG" alt="" />
        <Form action="/learning">
          <h1>Learning</h1>
          <div>
          <label htmlFor="difficulty">Choose difficulty </label><br/>
          <select id="difficulty" name="difficulty">
            <option value="easy">Easy</option>
            <option value="hard">Hard</option>
          </select>
          </div>
          <button>Start</button>
        </Form>
    </Learning>
  );
}

const Form = styled.form`
  padding-top: 82px;
  margin: 0px, 60px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  font-size: 30px;
  button, option, select {
    width: 80px;
    height: 35px;
    font-size: 20px;
  }
`;

const Learning = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const IMG = styled.img`
  width: 600px;
  background-color: grey;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

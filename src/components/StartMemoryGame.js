import React from "react";
import styled from "styled-components";

export default function StartMemoryGame() {
  return (
    <Memory id="memory">
      <Form action="/memorygame">
      <h1>Memory game</h1>
        <label htmlFor="difficulty"></label>
        <div>
          <h4>Choose difficulty:</h4>
        <select id="difficulty" name="difficulty">
          <option value="easy">Easy</option>
          <option value="hard">Hard</option>
        </select>
        </div>
        <button>Start</button>
      </Form>
      <Img>image</Img>
    </Memory>
  );
}

const Form = styled.form`
  margin: 0px, 60px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const Memory = styled.div`
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

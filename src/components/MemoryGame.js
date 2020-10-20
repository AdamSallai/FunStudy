import React from "react";
import styled from "styled-components";

export default function MemoryGame() {
  return (
    <Memory id="memory">
      <h1>Memory game</h1>
      <form action="/memorygame">
        <label htmlFor="difficulty"></label>
        <select id="difficulty" name="difficulty">
          <option value="easy">Easy</option>
          <option value="hard">Hard</option>
        </select>
        <button>Start</button>
      </form>
    </Memory>
  );
}

const Memory = styled.div`
  margin: 300px 0px;
`;

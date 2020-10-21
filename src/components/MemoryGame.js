import React from "react";
import styled from "styled-components";
import GetMemoryCard from "./GetMemoryCard";

export default function MemoryGame() {
  const content = [];
  for (let i = 0; i < 10; i++) {
    const memo = GetMemoryCard();
    content.push(memo[0]);
    content.push(memo[1]);
  }

  shuffle(content);

  return <GameBoard>{content}</GameBoard>;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const GameBoard = styled.div`
  top: 82px;
  position: relative;
  display: flex;
  flex-wrap:wrap;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  background-color: #eeeeff;
  margin: auto;
`;

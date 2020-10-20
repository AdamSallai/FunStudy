import React from "react";
import styled from "styled-components";
import GetMemoryCard from "./GetMemoryCard";

export default function MemoryGame() {
  const content = [];
  for (let i = 0; i < 5; i++) {
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
  display: flexbox;
  flex-wrap:wrap;
`;

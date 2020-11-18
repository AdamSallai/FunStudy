import React, { useContext } from "react";
import styled from "styled-components";
import { ScoreContext } from "./SelectedCardContext";


export default function MemoryGameScore(    ) {
  const [score] = useContext(ScoreContext)

  return (
    <Score>
      <p>Score: {score}</p>
    </Score>
  );
}

const Score = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 30px;
`;

import React from "react";
import styled from "styled-components";

export default function MemoryGameScore(    ) {

  return (
    <Score>
      <p>Score: {}</p>
    </Score>
  );
}

const Score = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 30px;
`;

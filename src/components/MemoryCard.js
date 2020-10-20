import React, {useState} from 'react';
import styled from "styled-components";

export default function MemoryCard({content, word}) {
  const [cont] = useState(content)
  // const [identifier] = useState(word)

  return (
    <GameCard>
      {cont}
    </GameCard>
  )
}

const GameCard = styled.div`
  height: 200px;
  width: 150px;
  font-size: 20px;
  border-radius: 5%;
  border-color: black;
  border-width: 5px;
  border-style:solid;
  padding: 10px 10px;
  text-align: center;
  overflow:scroll;
  color:black;
  cursor: pointer;
`;
import React, { useState } from "react";
import styled from "styled-components";

export default function MemoryCard({ content, word }) {
  const [cont] = useState(content);
  // const [identifier] = useState(word)
  const [transform, setTransform] = useState("back");

  const flipCard = () => {
    setTransform(prev => prev === "front" ? "back" : "front")
  }

  return (
    <GameCard onClick={flipCard} transform={transform}>
      <Back></Back>
      <Front>
        <div className="text-container">{cont}</div>
      </Front>
    </GameCard>
  );
}

const transforms = {
  front: "none",
  back: "rotateY(180deg)"
}

const GameCard = styled.div`
  background-color: transparent;
  position: relative;
  height: 240px;
  width: 170px;
  box-sizing: border-box;
  margin: 40px;
  transition: transform 1s ease-in-out;
  transform-style: preserve-3d;
  transform: ${props => transforms[props.transform]};
`;

const Front = styled.div`
  position: absolute;
	backface-visibility: hidden;
  height: 240px;
  width: 170px;
  box-sizing: border-box;
  font-size: 20px;
  border-radius: 25px;
  border-color: black;
  border-width: 5px;
  border-style: solid;
  padding: 0;
  cursor: pointer;
  font-size: 24px;
  background-color: #181931;
  color: white;
	z-index: 2;
	transform: rotateY(0deg);
  .text-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    background-color: #323348;
    overflow: auto;
    text-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80%;
    ::-webkit-scrollbar {
      width: 15px;
    }
    ::-webkit-scrollbar-track {
      background: #323348;
    }
    ::-webkit-scrollbar-thumb {
      background: #181931;
    }
  }
`;

const Back = styled.div`
backface-visibility: hidden;
  position: absolute;
  height: 240px;
  width: 170px;
  box-sizing: border-box;
  font-size: 20px;
  border-radius: 25px;
  border-color: black;
  border-width: 5px;
  border-style: solid;
  padding: 0;
  background: #181931;
  cursor: pointer;
  transform: rotateY(180deg);
`;

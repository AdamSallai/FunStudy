import React, { useState, useContext } from "react";
import styled from "styled-components";
import { SelectedCardContext } from "./SelectedCardContext";

export default function MemoryCard({ content, word }) {
  const [selectedCards, setSelectedCards] = useContext(SelectedCardContext);
  const [cont] = useState(content);
  const [identifier] = useState(word);
  const [transform, setTransform] = useState("back");
  const [disable, setDisable] = useState("notDisabled");
  const [found, setFound] = useState(false);

  const flipCard = () => {
    setTransform((prev) => (prev === "front" ? "back" : "front"));
  };

  const addToSelectedCard = () => {
    if (selectedCards.card1 === "") {
      setSelectedCards((prev) => {
        return { card1: [identifier, flipCard, disableCard, cardFound], card2: "" };
      });
    } else {
      setSelectedCards((prev) => {
        return {
          card1: selectedCards.card1,
          card2: [identifier, flipCard, disableCard, cardFound],
        };
      });
    }
    disableCard();
  };

  const cardFound = () => {
    console.log("found");
    setFound(true)
  }

  const disableCard = () => {
    setDisable((prev) => (prev === "disabled" ? "notDisabled" : "disabled"));
  };

  return (
    <GameCard
      onClick={() => {
        if (disable === "notDisabled") {
          flipCard();
          addToSelectedCard();
        }
      }}
      transform={transform}
      disable={disable}
    >
      <Back></Back>
      <Front found={found}>
        <div className="text-container">{cont}</div>
      </Front>
    </GameCard>
  );
}

const transforms = {
  front: "none",
  back: "rotateY(180deg)",
};

const GameCard = styled.div`
  background-color: transparent;
  position: relative;
  height: 280px;
  width: 200px;
  box-sizing: border-box;
  margin: 30px 60px;
  transition: transform 1s ease-in-out;
  transform-style: preserve-3d;
  transform: ${(props) => transforms[props.transform]};
`;

const Front = styled.div`
  position: absolute;
  backface-visibility: hidden;
  height: 280px;
  width: 200px;
  box-sizing: border-box;
  font-size: 20px;
  border-radius: 25px;
  border-color: black;
  border-width: 5px;
  border-style: solid;
  padding: 0;
  cursor: pointer;
  font-size: 24px;
  background-color: ${(props) => props.found ? "#183119" :"#181931"};
  color: white;
  z-index: 2;
  transform: rotateY(0deg);
  .text-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    background-color: ${(props) => props.found ? "#285029" :"#323348"};
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
      background: ${(props) => props.found ? "#285029" :"#323348"};
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.found ? "#183119" :"#181931"};
    }
  }
`;

const Back = styled.div`
  backface-visibility: hidden;
  position: absolute;
  height: 280px;
  width: 200px;
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

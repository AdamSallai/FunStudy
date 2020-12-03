import React, { useState, useEffect } from "react";
import LearningCard from "./LearningCard";
import {getCardDataWithOutPicture, getCardDataWithPicture} from "../../api/GetCardData";

export default function LearningData(props) {
  const [card, setCard] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [guess, setGuess] = useState();
  const [points, setPoints] = useState(0);
  const difficulty = props.location.search.split("=")[1];

  useEffect(() => {
    setIsLoading(true);
    if (difficulty == "hard") {
      getCardDataWithOutPicture(setCard, setIsLoading);
    } else {
      getCardDataWithPicture(setCard, setIsLoading);
    }
  }, [guess]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <LearningCard
        callback={setGuess}
        card={card}
        points={points}
        setPoints={setPoints}
        difficulty={difficulty}
      />
    );
  }
}

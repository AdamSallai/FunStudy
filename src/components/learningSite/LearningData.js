import React, { useState, useEffect } from "react";
import LearningCard from "./LearningCard";
import getCardData from '../GetCardData';

export default function LearningData() {
  const [card, setCard] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [guess, setGuess] = useState();
  const [points, setPoints] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getCardData(setCard, setIsLoading);
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
      />
    );
  }
}

 
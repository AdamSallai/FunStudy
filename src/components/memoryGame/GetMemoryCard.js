import React, { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";
import {getCardData} from "../../api/GetCardData";

export default function GetMemoryCard() {
  const [card, setCard] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCardData(setCard, setIsLoading);
  }, []);

  if (!isLoading) {
    return [
      <MemoryCard key={card.word} content={card.word} word={card.word} />,
      <MemoryCard key={card.definition} content={card.definition} word={card.word} />,
    ];
  } else return [];
}

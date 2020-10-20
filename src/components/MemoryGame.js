import React from "react";
import MemoryCard from "./MemoryCard";

export default function MemoryGame() {

  const cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push(i)
  }

  console.log(cards);
  return cards.map((card) => {
    return <MemoryCard key={card}/>
  })
}

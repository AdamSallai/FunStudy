import React from "react";
import MemoryCard from "./MemoryCard";

export default function MemoryGame() {


  const content = [];
  for (let i = 0; i < 5; i++) {
    const memo = MemoryCard()
    content.push(memo[0])
    content.push(memo[1])
  }

  console.log(content);
  shuffle(content)

  return <div>{content}</div>
}


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
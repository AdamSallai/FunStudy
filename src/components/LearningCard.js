import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function LearningCard({callback, card, image, points, setPoints}) {
    const increasePoints = () => {
        let guess = document.getElementById('cpDev1').value;
        if(card.word === guess){
            setPoints(points => points + 1);
        }
    }

    const addNewCard = () => {
        increasePoints();
        callback(Math.random());
    };

    return (
        <div>
        <p>{points}</p>
        <div className="card">
          <p>{card.word}</p>
          <img src={image} alt="" />
          <p>{card.definitions[0].definition}</p>

            <label htmlFor="guess">Your guess: </label>
            <input type="text" name="guess" id="cpDev1"></input>
            <button type="submit" onClick={addNewCard}>Guess</button>

        </div>
      </div>
    )
}

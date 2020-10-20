import React from "react";
import styled from 'styled-components';


export default function About() {
  return (
    <AboutStyle id="about">
      <h1>About</h1>
      <p>It is an easy and fun way to learn words and expand your vocabulary</p>
      <br/>
      <h2>Learning</h2>
      <p>
        This is the best way to memorize new expressions by associating words
        with pictures and descriptions. You get a picture or description and
        your goal is to guess the right word.
      </p>
      <br/>
      <h2>Memory game</h2>
      <p>
        Memory game is a card game in which all of the cards are laid face down
        on a surface and two cards are flipped face up over each turn. The
        object of the game is to turn over pairs of matching cards. One of the
        cards contains a word (easy mode) or explanation (hard mode), and the
        other one is a picture of that word or explanation. Your goal is to find
        all of the pairs before the time is out.
      </p>
    </AboutStyle>
  );
}

const AboutStyle = styled.div`
  margin: 30px 0px;
`

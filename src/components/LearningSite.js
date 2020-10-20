import React from "react";
import styled from "styled-components";

export default function LearningSite() {
  return (
    <Learning id="learning_site">
      <Img>image</Img>
      <Content>
        <h1>Learning</h1>
        <div>
          <h4>Choose difficulty</h4>
          {/* <button>Easy</button>
          <button>Hard</button> */}
        </div>
        <div>START</div>
      </Content>
    </Learning>
  );
}

const Content = styled.div`
  margin: 0px, 60px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const Learning = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Img = styled.div`
  height: 300px;
  width: 400px;
  background-color: grey;
`;

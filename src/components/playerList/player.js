import React from "react";
import styled from "styled-components";
import { deletePlayer } from "../../api/GetPlayer";

export default function Player({ player }) {
  return (
    <PlayerDiv>
      <Box>{player.firstName}</Box>
      <Box>{player.lastName}</Box>
      <Box>{player.email}</Box>
      <Box>
      <button
        onClick={() => {
          deletePlayer(player.id);
        }}
      >
        Delete player
      </button>
      </Box>
    </PlayerDiv>
  );
}

const PlayerDiv = styled.div`
  height: 50px;
`;


const Box = styled.div`
  width: 200px;
  display: inline-block;
  margin: 0px;
`;
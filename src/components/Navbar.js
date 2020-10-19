import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Nav>
        <Link className="link" to="/">
          <h1>Fun Study</h1>
        </Link>
        <FlexBox>
          <Link className="link" to="/">
            About
          </Link>
          <Link className="link" to="/learning_site">
            Learning site
          </Link>
          <Link className="link" to="/memory">
            Memory game
          </Link>
          <Link className="link" to="/">
            Login
          </Link>
          <Link className="link" to="/">
            Registration
          </Link>
        </FlexBox>
      </Nav>
    </div>
  );
}

const Nav = styled.nav`
  background-color: #313648;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  .link {
    color: white;
    text-decoration: none;
    display: inline-block;
    margin: 10px;
  }
`;

const FlexBox = styled.div`
  display: flex;
`;

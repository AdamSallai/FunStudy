import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dropdownStatus, setDropdownStatus] = useState("none");

  const changeDropdown = () => {
    if (dropdownStatus === "none") {
      setDropdownStatus("flex");
    } else {
      setDropdownStatus("none");
    }
  };

  return (
    <div>
      <Nav>
        <Link className="link" to="/">
          <h1>Fun Study</h1>
        </Link>
        <FlexBox dropdownStatus={dropdownStatus}>
          <Img onClick={changeDropdown} src="./dropdown.png"></Img>
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
  position: relative;
  background-color: #313648;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  .link {
    color: white;
    text-decoration: none;
    display: inline-block;
    padding: 10px;
    border-radius:10px;
    font-size: 20px;
  }
  h1 {
    font-size: 36px;
  }
  @media (max-width: 768px) {
    display: block;

  }
`;

const FlexBox = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    .link {
      position: relative;
      display: ${(props) => props.dropdownStatus};
      margin: 5px;
      padding: 10px;
    }
  }
  .link:hover {
    background-color: white;
    color: #313648;
  }
`;

const Img = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
    width: 50px;
    position: absolute;
    top: 20px;
    right: 40px;
    cursor: pointer;
    &:hover {
      background-color: #111628;
      border-radius: 10px;
    }
  }
`;

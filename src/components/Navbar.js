import React, { useState } from "react";
import styled from "styled-components";
import { animateScroll as scroll, Link } from "react-scroll";

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
        <Link className="link" to="about" smooth={true} duration={1000}>
          <h1>Fun Study</h1>
        </Link>

        <FlexBox dropdownStatus={dropdownStatus}>
          <Img onClick={changeDropdown} src="./dropdown.png"></Img>
          <Link className="link" to="about" smooth={true} duration={1000}>
            About
          </Link>
          <Link className="link" to="learning_site" smooth={true} duration={1000}>
            Learning site
          </Link>
          <Link className="link" to="memory" smooth={true} duration={1000}>
            Memory game
          </Link>
          <Link className="link" to="about" smooth={true} duration={1000}>
            Login
          </Link>
          <Link className="link" to="about" smooth={true} duration={1000}>
            Registration
          </Link>
        </FlexBox>
      </Nav>
      <ArrowToTop onClick={() => scroll.scrollToTop()}>
        ↑
          </ArrowToTop>
    </div>
  );
}

const Nav = styled.nav`
  position: relative;
  background-color: #313648;
  display: flex;
  padding: 10px 10px;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  height: 50px;
  .link {
    color: white;
    text-decoration: none;
    display: inline-block;
    padding: 10px 10px;
    height: 50px;
    cursor: pointer;
    &:hover{
      background-color: white;
      color: #313648;
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

const ArrowToTop = styled.button`
  position: fixed;
  bottom: 8%;
  right: 8%;
  width: 40px;
  height: 50px;
  border-radius: 50px;
  font-size: 30px;
`

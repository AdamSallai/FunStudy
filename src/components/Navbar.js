import React from "react";
import styled from "styled-components";
import { animateScroll as scroll, Link } from "react-scroll";

export default function Navbar() {
  return (
    <div>
      <Nav>
        <Link className="link" to="about" smooth={true} duration={1000}>
          <h1>Fun Study</h1>
        </Link>
        <FlexBox>
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

const ArrowToTop = styled.button`
  position: fixed;
  bottom: 8%;
  right: 8%;
  width: 40px;
  height: 50px;
  border-radius: 50px;
  font-size: 30px;
`

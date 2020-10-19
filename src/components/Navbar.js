import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div>
            <h1>Fun Study</h1>
            <Nav>
                <Link className="link" to="/learning_site">Learning site</Link> |
                <Link className="link" to="/memory">Memory game</Link>
            </Nav>
        </div>
    )
}

const Nav = styled.nav`
    text-align: center;
    padding: 10 px;
    .link{
        display: inline-block;
        margin: 10px;
    }
`

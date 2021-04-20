import React from 'react';
import "./NavbarMenuItem.css";
import styled from 'styled-components'

import {Link} from "react-router-dom";

const StyledLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    padding: 10px 15px;
    color: #fff;
    font-size: 24px;
    `
const NavbarMenuItem = ({to, text}) => {
    return (
        <li className="navbar-nav-item">
            <StyledLink exact to={to}  >
                {text}
            </StyledLink>
        </li>
    )
}

export default NavbarMenuItem;
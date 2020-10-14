import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  max-width: 1170px;
  padding: 0 50px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  font-family: Raleway, sans-serif;
`;
const Logo = styled.h2`
  font-size: 36px;
  font-weight: 700;
`;
const Nav = styled.ul`
  display: flex;
  list-style: none;
`;
const NavOptions = styled.li`
  a {
    text-decoration: none;
    padding-left: 30px;
    color: #774ee8;
    font-weight: 600;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Fruit Emprium</Logo>
      <Nav>
        <NavOptions>
          <NavLink
            exact
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "#FF0F7B",
              textDecoration: "underline",
            }}
          >
            Home
          </NavLink>
        </NavOptions>

        <NavOptions>
          <NavLink
            to="/about"
            activeStyle={{
              fontWeight: "bold",
              color: "#FF0F7B",
              textDecoration: "underline",
            }}
          >
            About
          </NavLink>
        </NavOptions>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

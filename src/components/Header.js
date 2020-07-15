import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const QuizHeader = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const StyledWrapper = styled.section`
background-color: cornflowerblue;
color: white;
padding: 10px;
`;


function Header() {
  return (
    <StyledWrapper>
      <QuizHeader>
        Quiz Creator
      </QuizHeader>
      <Link to="/">Home </Link>
      <br />
      <Link to="/signin">Login</Link>
    </StyledWrapper>
  )
}

export default Header;
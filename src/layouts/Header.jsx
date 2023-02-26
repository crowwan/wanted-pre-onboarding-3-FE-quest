import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  height: 10%;
  border-bottom: 1px solid black;
`;

function Header() {
  return <StyledHeader>Wanted Pre-onboarding course</StyledHeader>;
}

export default Header;

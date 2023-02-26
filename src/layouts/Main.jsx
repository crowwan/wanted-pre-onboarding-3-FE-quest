import React from "react";
import styled from "styled-components";

const StyledMainSection = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

function Main({ children }) {
  return <StyledMainSection>{children}</StyledMainSection>;
}

export default Main;

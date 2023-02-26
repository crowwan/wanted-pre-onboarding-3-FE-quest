import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../layouts/Header";
import Nav from "../layouts/Nav";
import Main from "../layouts/Main";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`;
function MainPageTemplate() {
  const location = useLocation();
  return (
    <StyledContainer>
      <Header />
      <Nav selected={location.pathname.slice(-1)} />
      <Main>
        <Outlet />
      </Main>
    </StyledContainer>
  );
}

export default MainPageTemplate;

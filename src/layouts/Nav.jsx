import React, { useState } from "react";
import styled from "styled-components";
import PageItem from "../components/PageItem";

const StyledNav = styled.nav`
  padding: 2rem;
  font-size: 1.3rem;
  font-weight: bold;
  width: 20%;
  height: 90%;
  border-right: 1px solid black;
`;

const StyledNavItemContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Nav({ selected }) {
  const [pages, setPages] = useState(["Page A", "Page B", "Page C"]);
  return (
    <StyledNav>
      <StyledNavItemContainer>
        {pages.map((page) => (
          <PageItem
            key={page}
            pageName={page}
            selected={selected === page.slice(-1)}
          />
        ))}
      </StyledNavItemContainer>
    </StyledNav>
  );
}

export default Nav;

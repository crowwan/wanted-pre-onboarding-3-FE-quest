import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledPageItem = styled.li`
  list-style: none;
  color: ${(props) => (props.selected ? "skyblue" : "inherit")};
  cursor: pointer;
`;
function PageItem({ pageName, selected }) {
  const navigation = useNavigate();
  const handlePageItemClick = () => {
    navigation(`${pageName.slice(-1)}`);
  };
  return (
    <StyledPageItem onClick={handlePageItemClick} selected={selected}>
      {pageName}
    </StyledPageItem>
  );
}

export default PageItem;

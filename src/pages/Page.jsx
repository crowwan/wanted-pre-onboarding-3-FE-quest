import React from "react";
import { useParams } from "react-router-dom";
import StyledPage from "../components/StyledPage";
function Page() {
  const { page } = useParams();
  return <StyledPage>{`This is Page ${page}`}</StyledPage>;
}

export default Page;

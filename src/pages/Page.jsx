import React from "react";
import { useParams } from "react-router-dom";

function Page() {
  const { page } = useParams();
  return <div>{page}</div>;
}

export default Page;

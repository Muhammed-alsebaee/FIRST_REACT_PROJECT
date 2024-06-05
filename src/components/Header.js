import React from "react";
import styled from "styled-components";

const StyleHeader = styled.div`
  width: 30rem;
  height: 4rem;
  border-radius: 0.75rem;
  background-color: #d9d9d9;
  border: none;
  font-size: 2rem;
  padding-left: 4rem;
`;

export default function Header() {
  return (
    <StyleHeader>
      <h1>StyleHeader</h1>
    </StyleHeader>
  );
}

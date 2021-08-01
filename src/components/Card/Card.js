import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
  padding: 20px;
  border-radius: 6px;
`;

export default function Card({ children, ...rest }) {
  return (
    <div
      style={{
        padding: "10px 5px",
        height: "100%",
      }}
    >
      <CardStyle {...rest}>{children}</CardStyle>
    </div>
  );
}

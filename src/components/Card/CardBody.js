import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 10px 0;
`;

export default function CardBody({ children, ...rest }) {
  return <CardStyle {...rest}>{children}</CardStyle>;
}

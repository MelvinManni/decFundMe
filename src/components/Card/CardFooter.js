import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  width: 100%;
  background-color: #fff;
  padding-top: 10px;
  border-top: ${(props) => (props.noBorder ? 0 : `1px solid #eee`)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function CardFooter({ children, ...rest }) {
  return <CardStyle {...rest}>{children}</CardStyle>;
}

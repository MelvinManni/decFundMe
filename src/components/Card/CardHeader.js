import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  width: 100%;
  background-color: #fff;
  padding-bottom: 10px;
  border-bottom: ${(props) => (props.noBorder ? 0 : `1.5px solid #eee`)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export default function CardHeader({ children, ...rest }) {
  return <CardStyle {...rest}>{children}</CardStyle>;
}

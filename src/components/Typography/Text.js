import React from "react";
import styled from "styled-components";
import colors from "../../assets/jss/colours";

const TextItem = styled.p`
  color: ${(props) =>
    props.color ? colors[props.color] : props.primary ? colors.primary : props.success ? colors.success : props.danger ? colors.danger : colors.secondary};
  font-size: ${(props) => (props.size ? props.size + "px" : "14")};
  line-height: ${(props) => (props.size ? props.size + 6 + "px" : "20px")};
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  text-align: ${(props) => (props.align !== undefined ? props.align : "left")};
  font-family: "Nunito", sans-serif;
  margin-top: ${({ mt }) => mt || "0px"};
  margin-bottom: ${({ mb }) => mb || "0px"};
  margin-left: ${({ ml }) => ml || "0px"};
  margin-right: ${({ mr }) => mr || "0px"};
  display: inline-block;

  display: ${(props) => props.block && "block"};
  @media all and (max-width: 996px) {
    color: ${(props) =>
      props.navlink ? "#fff" : props.primary ? colors.primary : props.success ? colors.success : props.danger ? colors.danger : colors.secondary} !important;
  }
`;

export default function Text({ children, ...rest }) {
  return <TextItem {...rest}>{children}</TextItem>;
}

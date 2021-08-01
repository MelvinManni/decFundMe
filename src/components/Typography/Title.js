import React from "react";
import styled from "styled-components";
import colors from "../../assets/jss/colours";

const TitleItem = styled.p`
  color: ${(props) =>
    props.color
      ? colors[props.color]
      : props.primary || props.title
      ? colors.primary
      : props.success
      ? colors.success
      : props.danger
      ? colors.danger
      : colors.secondary};
  font-size: ${(props) => (props.title ? "32px" : props.size ? props.size + "px" : "32px")};
  line-height: ${(props) => (props.size ? props.size + 12 + "px" : "44px")};
  font-weight: ${(props) => (props.weight ? props.weight : "700")};
  text-align: ${(props) => (props.align !== undefined ? props.align : "left")};
  font-family: "Libre Baskerville", serif;
  margin-top: ${({ mt }) => mt || "0px"};
  margin-bottom: ${({ mb }) => mb || "0px"};
  margin-left: ${({ ml }) => ml || "0px"};
  margin-right: ${({ mr }) => mr || "0px"};
  position: relative;
  z-index: 4;
  display: inline-block;
  display: ${(props) => props.block && "block"};
  &::before {
    content: "";
    position: absolute;
    height: 10px;
    width: 80%;
    bottom: 5px;
    background-color: ${colors.success};
    display: ${(props) => (props.line !== undefined ? "block" : "none")};
    /* opacity: 0.6; */
    z-index: -1;
  }
`;

export default function Title({ children, ...rest }) {
  return <TitleItem {...rest}>{children}</TitleItem>;
}

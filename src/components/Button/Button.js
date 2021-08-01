import React from "react";
import styled from "styled-components";
import colors from "../../assets/jss/colours";
import spinner from "../../assets/img/spinner.svg";
import spinnerOutline from "../../assets/img/spinner-outline.svg";
import { useHistory } from "react-router";

const Button = styled.button`
  min-width: ${(props) => (props.block ? "100%" : "160px")};
  padding: 10px 15px;
  max-width: max-content;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font: normal normal 700 16px/25px "Nunito";
  letter-spacing: 0.8px;
  color: ${(props) =>
    props.outline === undefined ? "#fff" : props.primary ? colors.primary : props.success ? colors.success : props.danger ? colors.danger : colors.primary};
  opacity: 1;
  margin-top: ${({ mt }) => mt || "0px"};
  margin-bottom: ${({ mb }) => mb || "0px"};
  margin-left: ${({ ml }) => ml || "0px"};
  margin-right: ${({ mr }) => mr || "0px"};
  transition: 0.45s ease all;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.outline !== undefined
      ? "transparent"
      : props.primary
      ? colors.primary
      : props.success
      ? colors.success
      : props.danger
      ? colors.danger
      : colors.primary};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border-width: ${(props) => (props.outline !== undefined ? "2,7px" : 0)};
  border-style: solid;
  border-color: ${(props) => (props.primary ? colors.primary : props.success ? colors.success : props.danger ? colors.danger : colors.primary)};
  position: relative;
  z-index: 1;
  &:hover {
    box-shadow: 0px 13px 15px -5px rgba(103, 115, 153, 0.75);
    -webkit-box-shadow: 0px 13px 15px -5px rgba(103, 115, 153, 0.75);
    -moz-box-shadow: 0px 13px 15px -5px rgba(103, 115, 153, 0.75);
    opacity: 0.94;
  }
  &:active {
    top: -200%;
    box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 0.2);
    animation: 0.7s pulse 1 forwards;
  }
`;

const Loader = styled.img`
  width: 30px;
`;

export default function CustomButton(props) {
  const history = useHistory();
  const { loading, disabled, children, ...rest } = props;
  return (
    <Button onClick={props.linkTo ? () => history.push(props.linkTo) : props.onClick} disabled={disabled === undefined ? loading : disabled} {...rest}>
      {loading === true ? <Loader src={props.outline === undefined ? spinner : spinnerOutline} alt="Spinner" /> : children}
    </Button>
  );
}

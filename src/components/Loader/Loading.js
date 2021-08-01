import React from "react";
import spinner from "../../assets/img/spinner.svg";
import spinnerDark from "../../assets/img/spinner-outline.svg";
import styled from "styled-components";

const Load = styled.img`
  width: ${(props) => (props.size ? props.size + "px" : "34px")};
`;
export default function Loader({ clear, ...rest }) {
  return <Load src={clear ? spinner : spinnerDark} {...rest} />;
}

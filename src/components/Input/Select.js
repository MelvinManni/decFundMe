import React from "react";
import styled from "styled-components";
import colors from "../../assets/jss/colours";
import Icons from "../Icons/Icons";
import Text from "../Typography/Text";

const Inputstyle = styled.select`
  width: 100%;
  height: 50px;
  padding: 5px ${(props) => (props.icon !== undefined ? "50px" : "10px")} 5px 10px;
  border-radius: 3px;
  border-width: ${(props) => (props.outline === undefined ? "0 0 1px 0" : "1px 1px 1px 1px")};
  border-style: solid;
  border-color: #ccc;
  font-weight: 500;
  font-size: 15;
  color: ${colors.secondary};
  font-family: "Raleway", sans-serif;
  background: transparent;
`;

const Iconstyle = styled.div`
  position: absolute;
  right: 0;
  bottom: 8px;
  padding: 5px 10px;
`;
export default function Select({ label, helperText, options, ...rest }) {
  return (
    <div style={{ marginBottom: 25, width: "100%" }}>
      <div style={{ width: "100%", position: "relative" }}>
        <Inputstyle icon className="_input" placeholder={label} {...rest}>
          <option selected value="" >{`Choose ${label}...`}</option>
          {options !== undefined && options.map((item) => <option value={item.value}>{item.text}</option>)}
        </Inputstyle>
        <Iconstyle>
          <Icons name="FaCaretDown" fa />
        </Iconstyle>

        <span class="focus-border"></span>
      </div>
      {helperText !== undefined && (
        <Text style={{ marginTop: 5 }} size={12} danger>
          {helperText}
        </Text>
      )}
    </div>
  );
}

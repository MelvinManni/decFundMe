import React from "react";
import styled from "styled-components";
import colors from "../../assets/jss/colours";
import Text from "../Typography/Text";

const Inputstyle = styled.input`
  width: 100%;
  height: 50px;
  padding: 5px 10px 5px 10px;
  border-radius: 3px;
  border-width: ${(props) => (props.outline === undefined ? "0 0 1px 0" : "1px 1px 1px 1px")};
  border-style: solid;
  border-color: #ccc;
  font-weight: 500;
  font-size: 15;
  color: ${colors.secondary};
  font-family: "Raleway", sans-serif;
`;

export default function Input({ label, helperText, ...rest }) {
  return (
    <div style={{ marginBottom: 25, width: "100%" }}>
      <Inputstyle className="_input" placeholder={label} {...rest} />
      {helperText !== undefined && (
        <Text style={{ marginTop: 5 }} size={12} danger>
          {helperText}
        </Text>
      )}
    </div>
  );
}

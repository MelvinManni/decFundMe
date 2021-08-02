import React from "react";
import styled from "styled-components";
import colors from "../../assets/jss/colours";

const Inputstyle = styled.textarea`
  border: 1px solid #ccc;
  padding: 7px 14px 9px;
  transition: 0.4s;
  width: 100%;
  border-radius: 3px;
  font-weight: 500;
  font-size: 15px;
  color: ${colors.text};
  font-family: "Nunito", sans-serif;
`;

export default function Textarea({ label, rows, ...rest }) {
  return (
    <div style={{ width: "100%", position: "relative", marginBottom: 25, marginTop: 30 }}>
      <Inputstyle rows={rows !== undefined ? rows : 6} className="_textArea" placeholder={label} {...rest} />
      <span class="focus-border">
        <i></i>
      </span>
    </div>
  );
}

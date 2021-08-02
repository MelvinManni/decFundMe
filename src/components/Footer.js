import React from "react";
import styled from "styled-components";
import colors from "../assets/jss/colours";
import Text from "./Typography/Text";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  background-color: ${colors.secondary};
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Text color="text">
        Built with ❤️ by{" "}
        <a href="https://github.com/MelvinManni" target="_blank">
          <Text primary>melvin-manni</Text>
        </a>
      </Text>
    </FooterWrapper>
  );
}

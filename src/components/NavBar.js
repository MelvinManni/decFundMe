import { useStoreActions, useStoreState } from "easy-peasy";
import React from "react";
import styled from "styled-components";
import CustomButton from "./Button/Button";
import Text from "./Typography/Text";
import Title from "./Typography/Title";
import Identicon from "react-identicons";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  padding: 5px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function NavBar() {
  const { connectToBlockchain } = useStoreActions((actions) => actions.connection);
  const { account, loading } = useStoreState((state) => state.connection);
  

  return (
    <Nav>
      <Link to="/">
        <Title size={20} line>
          dec
          <Text weight={600} primary>
            FundMe
          </Text>
        </Title>
      </Link>

      {account !== null ? (
        <div className="row">
          <Identicon size={20} string={account} />
          <Text ml="10px">{account.substring(0, 10) + "..."}</Text>
        </div>
      ) : (
        <CustomButton loading={loading} onClick={() => connectToBlockchain()}>
          Connect
        </CustomButton>
      )}
    </Nav>
  );
}

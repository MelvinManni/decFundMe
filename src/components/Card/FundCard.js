import React from "react";
import Card from "./Card";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import Identicon from "react-identicons";
import Text from "../Typography/Text";
import Title from "../Typography/Title";
import styled from "styled-components";
import colors from "../../assets/jss/colours";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${colors.secondary};
  border-radius: 8px;
  padding: 5px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 10px;
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font: normal normal 700 14px/21px "Nunito";
  border: 0;
  width: max-content;
  color: #fff;
  border-radius: 0px 8px 8px 0px;
  :disabled{
    background-color: ${colors.secondary};
    color: ${colors.text};
    opacity: 0.65
  }
`;

const Input = styled.input`
  padding: 10px 10px;
  font: normal normal 700 14px/21px "Nunito";
  border: 0;
  width: 100%;
  color: ${colors.text};
  border-radius: 0px 8px 8px 0px;
  ::placeholder {
    color: ${colors.secondary};
    font: normal normal 700 12px/21px "Nunito";
  }
`;

export default function FundCard({ currentAmount, requestAmount, name, description, title, image }) {
  const [amountToFund, setAmountToFund] = React.useState("");
  const numRegex = /^\d+(?:\.\d{1,4})?$/;

  return (
    <Card>
      <CardHeader>
        <Identicon size={20} /> <Text ml="10px">{name}</Text>
      </CardHeader>
      <CardBody>
        <img src={image} alt="" className="w-100" />

        <Title size={18} mt="10px" primary block>
          {title}
        </Title>

        <Text color="text" mt="25px" block>
          {description}
        </Text>

        <div>
          <Text>
            Raised <Text color="text">{currentAmount}</Text> of <Text color="text">{requestAmount}</Text>
          </Text>
        </div>
      </CardBody>
      <CardFooter>
        <InputWrapper>
          <div style={{ flex: 1 }}>
            <Input
              placeholder="Enter ether to fund"
              value={amountToFund}
              onChange={(e) => {
                const value = e.target.value;
                (numRegex.test(value) || value === "") && setAmountToFund(value);
              }}
            />
          </div>
          <Button disabled={amountToFund === ""}>Fund +</Button>
        </InputWrapper>
      </CardFooter>
    </Card>
  );
}

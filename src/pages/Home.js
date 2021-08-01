import React from "react";
import img from "../assets/img/card.png";
import { GridCol, GridContainer } from "../assets/jss/flexGrid";
import Section from "../assets/jss/section";
import CustomButton from "../components/Button/Button";
import FundCard from "../components/Card/FundCard";
import Text from "../components/Typography/Text";
import Title from "../components/Typography/Title";

export default function Home() {
  return (
    <>
      <Section>
        <div className="gridx2 responsive-grid">
          <div>
            <Title size={32} mt={"40px"} color="text">
              Decentralized Fund Me,
            </Title>

            <Text block mt="20px">
              A new way for requesting <Text primary>funding</Text> from friends and the public.
            </Text>
            <Text block>To get started click the button below.</Text>

            <CustomButton mt="60px">Get Started</CustomButton>
            <Text size={13} mt="10px">
              we rise by lifting others.
            </Text>
          </div>
          <div>
            <img src={img} alt="" className="w-100" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="row">
          <img src="/images/podium.svg" width="40px" alt="" />
          <Title ml="10px">Top Funding</Title>
        </div>

        <GridContainer>
          <GridCol xs={12} lg={4}>
            <FundCard />
          </GridCol>

          <GridCol xs={12} lg={4}>
            <FundCard />
          </GridCol>

          <GridCol xs={12} lg={4}>
            <FundCard />
          </GridCol>
        </GridContainer>
      </Section>
    </>
  );
}

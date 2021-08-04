import { useStoreActions, useStoreState } from "easy-peasy";
import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/img/card.png";
import { GridCol, GridContainer } from "../assets/jss/flexGrid";
import Section from "../assets/jss/section";
import CustomButton from "../components/Button/Button";
import FundCard from "../components/Card/FundCard";
import Loader from "../components/Loader/Loading";
import Text from "../components/Typography/Text";
import Title from "../components/Typography/Title";

export default function Home() {
  const { contract } = useStoreState((state) => state.connection);
  const { getPosts } = useStoreActions((action) => action.posts);
  const { data, loading } = useStoreState((state) => state.posts);
  const [posts, setPosts] = React.useState([]);

  console.log(data);

  React.useEffect(() => {
    getPosts();

    // eslint-disable-next-line
  }, [contract]);

  React.useEffect(() => {
    if (data !== []) {
      setPosts(data);
    }
  }, [data]);
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

            <CustomButton linkTo="/create-funding-post" mt="60px">
              Create a request
            </CustomButton>
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
          {loading ? (
            <Loader size="70" />
          ) : (
            posts.map(
              (post, index) =>
                index < 3 && (
                  <GridCol key={index} xs={12} lg={4}>
                    <FundCard
                      currentAmount={window.web3.utils.fromWei(post.amountFunded?.toString(), "Ether")}
                      requestAmount={window.web3.utils.fromWei(post.amountRequested?.toString(), "Ether")}
                      name={post.name}
                      description={post.description}
                      title={post.title}
                      image={post.imageHash}
                      id={post.id}
                    />
                  </GridCol>
                )
            )
          )}
          {posts.length > 0 && (
            <div className="w-100">
              <Text mt="20px">
                <Link to="/all-posts">View All</Link>
              </Text>
            </div>
          )}
        </GridContainer>
      </Section>
    </>
  );
}

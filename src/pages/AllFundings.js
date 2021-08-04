import { useStoreActions, useStoreState } from "easy-peasy";
import React from "react";
import { GridCol, GridContainer } from "../assets/jss/flexGrid";
import Section from "../assets/jss/section";
import FundCard from "../components/Card/FundCard";
import Loader from "../components/Loader/Loading";

export default function AllFundings() {
  const { contract } = useStoreState((state) => state.connection);
  const { getPosts } = useStoreActions((action) => action.posts);
  const { data, loading } = useStoreState((state) => state.posts);
  const [posts, setPosts] = React.useState([]);

  console.log(data);

  React.useEffect(() => {
    getPosts();
      // eslint-disable-next-line
  }, [contract]);

  React.useEffect( () => {
    if (data !== []) {
      setPosts(data);
    }
        // eslint-disable-next-line
  }, [data]);


  return (
    <Section>
      <GridContainer justify="center">
        {loading ? (
          <Loader size="100" />
        ) : (
          posts.map((post, index) => (
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
          ))
        )}
      </GridContainer>
    </Section>
  );
}

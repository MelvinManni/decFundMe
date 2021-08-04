import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllFundings from "./pages/AllFundings";
import CreateFundMe from "./pages/CreateFundMe";
import Home from "./pages/Home";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const { getAccount, connectToContract, connectToBlockchain } = useStoreActions((actions) => actions.connection);
  const { connected } = useStoreState((state) => state.connection);

  useEffect(() => {
    if (window.web3) connectToBlockchain();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (connected) {
      getAccount();
      connectToContract();
    }
    // eslint-disable-next-line
  }, [connected]);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create-funding-post" component={CreateFundMe} />
          <Route exact path="/all-posts" component={AllFundings} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

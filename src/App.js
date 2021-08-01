import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllFundings from "./pages/AllFundings";
import CreateFundMe from "./pages/CreateFundMe";
import Home from "./pages/Home";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";

function App() {
  const { getAccount } = useStoreActions((actions) => actions.connection);
  const { connected } = useStoreState((state) => state.connection);
  
  useEffect(() => {
    connected && getAccount();
    // eslint-disable-next-line
  }, [connected]);
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create-funding-post" component={CreateFundMe} />
          <Route exact path="/all-post" component={AllFundings} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

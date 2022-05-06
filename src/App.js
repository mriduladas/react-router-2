import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import NewQuote from "./pages/NewQuote";
import AllQuotes from "./pages/AllQuotes"
import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="/quotes/:id">
            <QuoteDetails />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/">
            <Redirect to="/quotes" />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

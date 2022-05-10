import { Redirect } from "react-router-dom";
import React,{Suspense } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes"
import Layout from "./components/layout/layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";


const NewQuote=React.lazy(()=> import("./pages/NewQuote"))
const QuoteDetails=React.lazy(()=> import("./pages/QuoteDetails"))
const NotFound = React.lazy(()=>import("./pages/NotFound"))

function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={
          <div className="centered">
            <LoadingSpinner/>
          </div>
        }>
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
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path ='*'>
            <NotFound />
          </Route>
        </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;

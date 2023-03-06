import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalState, GlobalStateProvider } from "~/screens/globalState";
import OrdersShow from "~/screens/Orders/Show";
import OrdersList from "../../screens/Orders/List";
import Empty from "../Empty";
import Navbar from "../Navbar";
import styles from "./styles.m.styl";

function Index(): JSX.Element {
  const [globalState] = React.useState(new GlobalState());
  if (window.location.pathname === "/") window.location.pathname = "/orders/";

  return (
    <GlobalStateProvider value={globalState}>
      <Router>
        <div className={styles.app}>
          <Navbar />
          <Switch>
            <Route path="/orders/:id">
              <OrdersShow />
            </Route>
            <Route path="/orders">
              <OrdersList />
            </Route>
            <Route>
              <Empty />
            </Route>
          </Switch>
        </div>
      </Router>
    </GlobalStateProvider>
  );
}

export default Index;

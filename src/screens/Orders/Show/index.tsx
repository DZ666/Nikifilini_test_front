import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import Order from "./components/Order";
import OrdersShowStore from "./store";
import styles from "./styles.m.styl";
import { Helmet } from "react-helmet";

type ShowParams = {
  id: string;
};

const OrdersShow = observer(
  (): JSX.Element => {
    const [state] = React.useState(new OrdersShowStore());

    const page = parseInt(
      new URLSearchParams(window.location.search).get("page") || "1"
    );

    useEffect(() => {
      if (state.initialized) return;
      state.initialize();
    });

    return (
      <div className={styles.screenWrapper}>
        <div className={styles.screen}>
          <Order page={page} loading={state.loading} order={state.order} />
        </div>
      </div>
    );
  }
);

export default OrdersShow;

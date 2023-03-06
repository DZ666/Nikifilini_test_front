import React, { useEffect } from "react";
import styles from "./styles.m.styl";
import { map } from "lodash";
import { observer } from "mobx-react-lite";
import OrdersListState from "./store";
import { OrdersListItem } from "./types";

import Button from "../../../components/Button";
import AngleLeftIcon from "../../../assets/icons/angle-left-solid.svg";
import AngleRightIcon from "~/assets/icons/angle-right-solid.svg";
import ListItem from "./components/ListItem";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";

const OrdersList = observer(
  (): JSX.Element => {
    const [state] = React.useState(new OrdersListState());

    const location = useLocation();

    useEffect(() => {
      state.setPage();
      state.loadOrders();
    }, [location, state]);

    useEffect(() => {
      if (state.initialized) return;
      state.initialize();
    });

    return (
      <React.Fragment>
        <Helmet>
          <title>Заказы</title>
        </Helmet>
        <div className={styles.screenWrapper}>
          <div className={styles.screen}>
            {state.loading && (
              <span className={styles.loading}>Loading...</span>
            )}
            {!state.loading && (
              <div className={styles.table}>
                <div className={styles.head}>
                  <div className={styles.row}>
                    <div>Номер</div>
                    <div>Создан</div>
                    <div>Доставка</div>
                    <div>В работе</div>
                    <div>Статус</div>
                  </div>
                </div>
                <div className={styles.body}>
                  {map(state.orders, (order: OrdersListItem, index: number) => (
                    <ListItem order={order} page={state.page} key={index} />
                  ))}
                </div>
              </div>
            )}
            {!state.loading && (
              <div className={styles.pagination}>
                <Button
                  small
                  text="PREV"
                  icon={AngleLeftIcon}
                  resting
                  disabled={!state.canPrev}
                  onClick={() => state.prevPage()}
                />
                <Button
                  small
                  text="NEXT"
                  rightIcon={AngleRightIcon}
                  resting
                  disabled={!state.canNext}
                  onClick={() => state.nextPage()}
                />
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
);

export default OrdersList;

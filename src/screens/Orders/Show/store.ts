import { createBrowserHistory, History } from "history";
import { makeAutoObservable } from "mobx";
import client from "~/api/gql";
import { SingleOrder } from "~/screens/Orders/Show/types";
import { ORDER_QUERY } from "./queries";

export default class OrdersShowStore {
  initialized: boolean = false;
  loading: boolean = false;
  private _order: SingleOrder | null = null;
  private _id: string | null = null;

  history: History;

  constructor() {
    makeAutoObservable(this);

    this.history = createBrowserHistory();

    this.id = this.orderUrlId;
  }

  get orderUrlId () {
    return this.history.location.pathname.split("/")[2];
  }

  get order() {
    return this._order;
  }

  set order(order: SingleOrder | null) {
    this._order = order;
  }

  get id() {
    return this._id;
  }

  set id(id: string | null) {
    this._id = id;
  }

  async loadOrder() {
    this.loading = true;
    await client
      .query(ORDER_QUERY, {
        number: this.id,
      })
      .toPromise()
      .then(({ data: { order } }) => {
        this.order = order;
      });
    this.loading = false;
  }

  initialize() {
    if (this.initialized) return;
    this.initialized = true;
    this.loadOrder();
  }
}

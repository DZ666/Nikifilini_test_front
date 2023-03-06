import { makeAutoObservable } from "mobx";
import { OrdersListItem } from "./types";
import { createBrowserHistory, History } from "history";
import client from "api/gql";
import { GET_ORDERS_QUERY } from "~/screens/Orders/List/queries";

export default class OrdersListState {
  initialized = false;
  loading = false;
  page = 1;
  totalPages = 1;
  orders: OrdersListItem[] = [];
  history: History;

  getSearchPage() {
    return Number(new URL(window.location.href).search.split("=")[1]);
  }

  setInitialized(val: boolean) {
    this.initialized = val;

    this.setPage(this.getSearchPage() || this.page);
  }

  constructor() {
    makeAutoObservable(this);
    this.history = createBrowserHistory();

    this.setPage(this.getSearchPage() || this.page);
  }

  setOrders(orders: OrdersListItem[]): void {
    this.orders = orders;
  }

  startLoading(): void {
    this.loading = true;
  }

  stopLoading(): void {
    this.loading = false;
  }

  setPage(page: number = this.getSearchPage()): void {
    this.page = page;
    const url = new URL(window.location.href);
    if (url.searchParams.get("page") !== this.page.toString()) {
      url.searchParams.set("page", "" + this.page);

      this.history.push(`${url.pathname}${url.search}`);
    }
  }

  nextPage(): void {
    if (this.page >= this.totalPages) return;
    this.definePage(this.page + 1);
  }

  prevPage(): void {
    if (this.page <= 1) return;
    this.definePage(this.page - 1);
  }

  definePage(page: number): void {
    this.setPage(page);
    this.loading = true;
    this.loadOrders();
  }

  setTotalPages(totalPages: number): void {
    this.totalPages = totalPages;
  }

  get canNext(): boolean {
    return this.page < this.totalPages;
  }

  get canPrev(): boolean {
    return this.page > 1;
  }

  async loadOrders() {
    this.loading = true;
    await client
      .query(GET_ORDERS_QUERY, {
        page: this.page,
      })
      .toPromise()
      .then(
        ({
          data: {
            getOrders: {
              orders,
              pagination: { totalPageCount },
            },
          },
        }) => {
          this.setOrders(orders);
          this.setTotalPages(totalPageCount);
        }
      );
    this.loading = false;
  }

  initialize() {
    if (this.initialized) return;
    this.initialized = true;
    this.loadOrders();
  }
}

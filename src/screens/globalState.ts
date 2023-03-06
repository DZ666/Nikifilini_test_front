import { createContext, useContext } from "react";
import client from "api/gql";
import {
  DELIVERY_TYPES_QUERY,
  ORDER_STATUSES_QUERY,
  PRODUCT_STATUSES_QUERY,
} from "~/screens/queries";
import { CrmType } from "~/api/types/crmType";
import { makeAutoObservable } from "mobx";

type Status = null | Promise<any> | true;

export class GlobalState {
  data: {
    orderStatuses: CrmType[];
    deliveryTypes: CrmType[];
    productStatuses: CrmType[];
  } = {
    orderStatuses: [],
    deliveryTypes: [],
    productStatuses: [],
  };

  status: {
    orderStatuses: Status;
    deliveryTypes: Status;
    productStatuses: Status;
  } = {
    orderStatuses: null,
    deliveryTypes: null,
    productStatuses: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  get orderStatuses() {
    if (this.status.orderStatuses === null) {
      this.status.orderStatuses = client
        .query(ORDER_STATUSES_QUERY)
        .toPromise()
        .then(({ data: { orderStatuses } }) => {
          this.setOrderStatuses(orderStatuses);
        });
    }
    return this.data.orderStatuses;
  }

  get productStatuses() {
    if (this.status.productStatuses === null) {
      this.status.productStatuses = client
        .query(PRODUCT_STATUSES_QUERY)
        .toPromise()
        .then(({ data: { productStatuses } }) => {
          this.setProductStatuses(productStatuses);
        });
    }
    return this.data.productStatuses;
  }

  get deliveryTypes() {
    if (this.status.deliveryTypes === null) {
      this.status.deliveryTypes = client
        .query(DELIVERY_TYPES_QUERY)
        .toPromise()
        .then(({ data: { deliveryTypes } }) => {
          this.setDeliveryTypes(deliveryTypes);
        });
    }
    return this.data.deliveryTypes;
  }

  setOrderStatuses(statuses: CrmType[]) {
    this.data.orderStatuses = statuses;
    this.status.orderStatuses = true;
  }

  setProductStatuses(statuses: CrmType[]) {
    this.data.productStatuses = statuses;
    this.status.productStatuses = true;
  }

  setDeliveryTypes(statuses: CrmType[]) {
    this.data.deliveryTypes = statuses;
    this.status.deliveryTypes = true;
  }
}

export const GlobalStateContext = createContext(new GlobalState());
export const GlobalStateProvider = GlobalStateContext.Provider;

export function useGlobalState() {
  return useContext(GlobalStateContext);
}

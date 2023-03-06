import { state } from "fp-ts";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import DeliveryType from "~/components/DeliveryType";
import Empty from "~/components/Empty";
import ProductStatus from "~/components/ProductStatus";
import { SingleOrder, SingleOrderItem } from "../../types";
import Item from "../Item";
import styles from "./styles.m.styl";

export default function Order({
  order,
  loading = false,
  page,
}: {
  order: SingleOrder | null;
  loading?: boolean;
  page: number;
}) {
  return order ? (
    <article className={styles.order}>
      <Helmet>
        <title>Заказ {order?.number}</title>
      </Helmet>
      <header className={styles.header}>
        <h3 className={styles.orderNumber}>Заказ: №{order.number}</h3>
        <Link to={`/orders?page=${page}`}>Назад</Link>
      </header>

      <div className={styles.deliveryCode}>
        <span>Тип доставки: </span>
        <DeliveryType code={order.delivery.code} />
      </div>

      <h2>Список товаров:</h2>
      <ul className={styles.items}>
        {order.items.map((item: SingleOrderItem) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      <footer>
        <ProductStatus code={order.status} />
      </footer>
    </article>
  ) : loading ? (
    <article className={styles.order}>
      <div className={styles.orderLoading}>Loading...</div>
    </article>
  ) : (
    <Empty />
  );
}

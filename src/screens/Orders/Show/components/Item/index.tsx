import { observer } from "mobx-react-lite";
import { SingleOrderItem } from "~/screens/Orders/Show/types";
import styles from "./styles.m.styl";

const Item = observer(
  ({ item }: { item: SingleOrderItem }): JSX.Element => {
    return (
      <li className={styles.item}>
        <b>{item.offer.displayName}</b>
      </li>
    );
  }
);

export default Item;

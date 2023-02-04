import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const increaseItemAmountHandler = () => {
    dispatch(cartActions.addItemToCart({id, title, price}));
  };

  const removeItemAmountHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${total.toFixed(2)}{" "}
          <span className={styles.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quanti}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={removeItemAmountHandler}>-</button>
          <button onClick={increaseItemAmountHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

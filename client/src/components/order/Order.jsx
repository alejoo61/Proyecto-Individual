import { useDispatch } from "react-redux";
import { orderCards } from "../../redux/actions";
import "./order.styles.css";

const Order = () => {
  const dispatch = useDispatch();
  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    console.log(e.target.value);
  };

  return (
    <div className="order">
      <h2>Order</h2>
      <select onChange={handleOrder} defaultValue="">
        <option value="" disabled>
          --Select
        </option>
        <option value="DEFAULT">DEFAULT</option>
        <option value="A-Z">A - Z</option>
        <option value="Z-A">Z - A</option>
        <option value="MAS_ATAQUE">+ Ataque</option>
        <option value="MENOS_ATAQUE">- Ataque</option>
      </select>
    </div>
  );
};

export default Order;

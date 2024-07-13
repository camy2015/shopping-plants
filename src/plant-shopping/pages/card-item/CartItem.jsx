import { useSelector, useDispatch } from "react-redux";
import "./CartItem.css";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../../store/CreatSlice";
import { useNavigate } from "react-router-dom";

export const CartItem = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let totalCost = 0;
    cart.forEach((item) => {
      totalCost += Number(item.cost.slice(1)) * item.quantify;
    });
    return totalCost;
  };

  const handleContinueShopping = () => {
    navigate("/plants/list");
  };
  const handleCheckoutShopping = () => {
    alert("Functionality to be added for future reference");
  };

  const handleIncrement = (item) => {
    if (item) {
      dispatch(incrementQuantity(item));
    }
  };

  const handleDecrement = (item) => {
    if (item && item.quantify > 1) {
      dispatch(decrementQuantity(item));
    } else {
      dispatch(removeItem(item));
    }
  };

  const handleRemove = (item) => {
    if (item.quantify > 0) {
      dispatch(removeItem(item));
    }
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const costTotal = Number(item.cost.slice(1)) * item.quantify;
    return costTotal;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: "black" }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>
      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">
                  {item.quantify}
                </span>
                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>
              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{ marginTop: "20px", color: "black" }}
        className="total_cart_amount"
      ></div>
      <div className="continue_shopping_btn">
        <button
          className="get-started-button"
          onClick={() => handleContinueShopping()}
        >
          Continue Shopping
        </button>
        <br />
        <button
          className="get-started-button1"
          onClick={() => handleCheckoutShopping()}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

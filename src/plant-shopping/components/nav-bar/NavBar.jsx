import { Link } from "react-router-dom";
import "./nav-bar.css";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const cart = useSelector((state) => state.cart.items);
  const calculateTotalQuantify = () => {
    let totalQuantify = 0;
    cart.forEach((item) => {
      totalQuantify += item.quantify;
    });
    return totalQuantify;
  };

  const styleObj = {
    backgroundColor: "#4CAF50",
    color: "#fff!important",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignIems: "center",
    fontSize: "20px",
  };
  const styleObjUl = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "1100px",
  };
  const styleA = {
    color: "white",
    fontSize: "30px",
    textDecoration: "none",
  };
  return (
    <div className="navbar" style={styleObj}>
      <div className="tag">
        <div className="luxury">
          <img
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt=""
          />
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div>
              <h3 style={{ color: "white" }}>Paradise Nursery</h3>
              <i style={{ color: "white" }}>Where Green Meets Serenity</i>
            </div>
          </Link>
        </div>
      </div>
      <div style={styleObjUl}>
        <div>
          <Link to={"/plants/list"} style={styleA}>
            Plants
          </Link>
        </div>
        <div>
          <Link to={"/plants/cart"} style={styleA}>
            <h1 className="cart">
              {calculateTotalQuantify()}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                id="IconChangeColor"
                height="68"
                width="68"
              >
                <rect width="156" height="156" fill="none"></rect>
                <circle cx="80" cy="216" r="12"></circle>
                <circle cx="184" cy="216" r="12"></circle>
                <path
                  d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                  fill="none"
                  stroke="#faf9f9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  id="mainIconPathAttribute"
                ></path>
              </svg>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

import { useDispatch } from "react-redux";
import { addItem } from "../../../store/CreatSlice";
import { plantsArray } from "../../data/plants";
import "./ProductList.css";

export const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <div key={index}>
            <h1>
              <div>{category.category}</div>
            </h1>
            <div className="product-list">
              {category.plants.map((plant, plantIndex) => (
                <div className="product-card" key={plantIndex}>
                  <img
                    className="product-image"
                    src={plant.image}
                    alt={plant.name}
                  />
                  <div className="product-title">{plant.name}</div>
                  <p>{plant.description}</p>
                  <p className="product-price">{plant.cost}</p>
                  <button
                    className="product-button"
                    onClick={() => handleAddToCart(plant)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

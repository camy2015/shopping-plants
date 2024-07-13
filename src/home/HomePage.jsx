import { useNavigate } from "react-router-dom";
import { AboutUs } from "../plant-shopping";

export const HomePage = () => {
  const navigate = useNavigate();
  const onNavigateListPlant = () => {
    navigate("/plants/list");
  };

  return (
    <div className={`landing-page`}>
      <div className="background-image"></div>
      <div className="content">
        <div className="landing_content">
          <h1>Welcome To Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>

          <button className="get-started-button" onClick={onNavigateListPlant}>
            Get Started
          </button>
        </div>
        <div className="aboutus_container">
          <AboutUs />
        </div>
      </div>
    </div>
  );
};

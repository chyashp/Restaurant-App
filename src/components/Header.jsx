import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/Balela-Salad-Recipe-The-Mediterranean-Dish-2.jpg";

const Header = () => {
  return (
    <header className="header">
      <section className="header-content">
        <div className="banner-img">
          <img src={bannerImg} alt="Delicious Mediterranean Dish" />
        </div>
        <div className="banner">
          <h2>Little Lemon Restaurant</h2>
          <h3>Calgary</h3>
          <p>
            A cozy Mediterranean restaurant serving fresh, flavorful dishes with
            vibrant spices and zesty flavors in a welcoming atmosphere.
          </p>
          <Link to="/booking">
            <button aria-label="Reserve a Table">Make a Table Reservation</button>
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;

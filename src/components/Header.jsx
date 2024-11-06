import React from "react";
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'


const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Calgary</h3>
          <p>
            A cozy Mediterranean restaurant serving fresh, flavorful dishes with
            vibrant spices and zesty flavors in a welcoming atmosphere.
          </p>
          <Link to="/booking">
            <button aria-label='on Click'>Reserve Table</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;

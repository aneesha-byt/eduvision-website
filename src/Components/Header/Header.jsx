import React from "react";
import "./Header.css";
import techimg from '../../assets/img/techimg.jpeg';
import { Link } from "react-router-dom";

function Header() {
  const nav_titles = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/courses",
      display: "Courses",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/contact",
      display: "Contact",
    },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="nav_container">
          <div className="logo">
            <div className="logo-img">
              <img src={techimg} alt="Techvision AI Logo" />
            </div>
            <h2>Techvision AI</h2>
          </div>

          <div className="navigation">
            <ul className="menu">
              {nav_titles.map((item, index) => (
                <li className="nav_item" key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

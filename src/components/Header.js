import React from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
import { Menu, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";

export default function Header() {
  return (
    <div className="header">
      <span className="logo-container">
        <h1 className="logo">MoGo</h1>
      </span>
      <div className="right-menu">
        <Menu className="menu-icon" />
        <nav className="header-nav">
          <ul className="header-ul">
            <li className="header-li">
              <Link to="#">ABOUT</Link>
              <Link to="#">SERVICE</Link>
              <Link to="#">WORK</Link>
              <Link to="#">BLOG</Link>
              <Link to="/contact">CONTACT</Link>
              <Link to="#">
                <ShoppingCartOutlined />
              </Link>
              <Link to="#">
                <SearchOutlined />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

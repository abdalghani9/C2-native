import React from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
import {
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

export default function Header() {
  return (
    <div className="header">
      <span className="logo-container">
        <h1 className="logo">MoGo</h1>
      </span>
      <nav className="header-nav">
        <ul>
          <li className="header-li">
            <Link to="/about">ABOUT</Link>
            <Link to="/service">SERVICE</Link>
            <Link to="/work">WORK</Link>
            <Link to="/blog">BLOG</Link>
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
  );
}

import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
import { Menu, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";

export default function Header() {
  const ScrollRef = useRef(false);

  //add 'scroll' class to header, make background fill when scrolling
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    ScrollRef.current = scroll;
    window.addEventListener("scroll", function () {
      window.scrollY >= 200 ? setScroll(true) : setScroll(false);
    });
  }, [scroll]);

  return (
    <div className={`header ${scroll ? "scroll" : ""}`} ref={ScrollRef}>
      <span className="logo-container">
        <h1 className="logo">
          <Link to="/">MoGo</Link>
        </h1>
      </span>
      <HeaderMenu />
    </div>
  );
}

const HeaderMenu = () => {
  return (
    <div className="right-menu">
      <Menu className="menu-icon" />
      <nav className="header-nav">
        <ul>
          <li className="header-li">
            <Link to="#">ABOUT</Link>
            <Link to="#">SERVICE</Link>
            <Link to="#">WORK</Link>
            <Link to="#">BLOG</Link>
            <Link to="/Contact">CONTACT</Link>
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
};

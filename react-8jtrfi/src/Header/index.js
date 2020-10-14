import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import useDocumentScrollThrottled from "./useDocumentScrollThrottled";

function Header() {
  const [shouldFixHeader, setshouldFixHeader] = useState(false);
  let history = useHistory();

  const MINIMUM_SCROLL = 120;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setTimeout(() => {
      setshouldFixHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const isFixed = shouldFixHeader ? "visible" : "";

  return (
    <div>
      <header className={`header `}>
        <div className="logo header-left">
          <img className="logo-img" src="https://picsum.photos/200" />
        </div>
        <div className="header-right main-nav">
          <ul>
            <li className="link-item" onClick={() => history.push("/")}>Home</li>
            <li className="link-item" onClick={() => history.push("/services")}> Services</li>
            <li className="link-item" onClick={() => history.push("/contact")}>Contact Us</li>
          </ul>
        </div>
      </header>
      <div className={`fixed-nav ${isFixed}`}>
        <div className="container">
          <ul className=" fixed-main-menu">
           <li className="link-item" onClick={() => history.push("/")}>Home</li>
            <li className="link-item" onClick={() => history.push("/services")}> Services</li>
            <li className="link-item" onClick={() => history.push("/contact")}>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

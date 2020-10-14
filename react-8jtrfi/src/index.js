import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./CSS/Home.css";
import "./index.css";
import Home from "./Home";
import Services from "./Services";
import ContactUs from "./ContactUs";
import Header from "./Header";
import Footer from "./Footer";
// import App from "./Services";
import App from "./ContactUs";

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/contact">
          <ContactUs />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>,
  document.getElementById("root")
);

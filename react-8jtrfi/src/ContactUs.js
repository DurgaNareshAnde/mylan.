import React, { Component } from "react";
import { MyMapComponent } from "./GoogleMap.js";
import "./style.css";
import "./index.css";
import "./CSS/Services.css";

export default class App extends Component {
  render() {
    // <CoApp />
    return (
      <div>
        <section class="page-title">
          <div class="auto-container">
            <h1>Contact Us 01</h1>
            <ul class="page-breadcrumb">
              <li>
                <a href="index.html">home</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </section>
        <section class="map-section">
          <div class="auto-container">
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div className="map-canvas" />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </section>
        <section class="contact-info-section">
          <div class="auto-container">
            <div class="row clearfix">
              <div class="info-box col-lg-3 col-md-6 col-sm-12">
                <div class="inner-box">
                  <div class="icon">
                    <img src="https://picsum.photos/200" alt="" />
                  </div>
                  <h5>Mail us for information</h5>
                  <a class="email" href="mailto:manzil@support.com">
                    manzil@support.com
                  </a>
                </div>
              </div>
              <div class="info-box col-lg-3 col-md-6 col-sm-12">
                <div class="inner-box">
                  <div class="icon">
                    <img src="https://picsum.photos/200" alt="" />
                  </div>
                  <h5>Working hours</h5>
                  <div class="text">Mon-Sat: 9.30 am To 7.00 pm</div>
                </div>
              </div>
              <div class="info-box col-lg-3 col-md-6 col-sm-12">
                <div class="inner-box">
                  <div class="icon">
                    <img src="https://picsum.photos/200" alt="" />
                  </div>
                  <h5>Call for help</h5>
                  <a class="phone" href="tel:+734-697-2907">
                    (734) 697 2907
                  </a>
                  ,
                  <a class="phone" href="tel:+843-971-1906">
                    (843) 971-1906
                  </a>
                </div>
              </div>
              <div class="info-box col-lg-3 col-md-6 col-sm-12">
                <div class="inner-box">
                  <div class="icon">
                    <img src="https://picsum.photos/200" alt="" />
                  </div>
                  <h5>Address:</h5>
                  <div class="text">25BT, San Rojartar, New York</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="request-quote-section">
          <div class="image-layer" />
          <div class="auto-container">
            <div class="inner-container">
              <div class="row clearfix">
                <div class="form-column col-lg-6 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <div class="title-box">
                      <h2>Request A Quote</h2>
                      <div class="text">
                        Complete control over products allows us to ensure our
                        customers <br /> receive the best quality prices and
                        service.
                      </div>
                    </div>

                    <div class="default-form contact-form">
                      <form id="contact-form">
                        <div class="form-group">
                          <input
                            type="text"
                            name="name"
                            value=""
                            placeholder="Name"
                            required
                          />
                        </div>

                        <div class="form-group">
                          <input
                            type="email"
                            name="email"
                            value=""
                            placeholder="Email"
                            required
                          />
                        </div>

                        <div class="form-group">
                          <input
                            type="text"
                            name="subject"
                            value=""
                            placeholder="Subject"
                            required
                          />
                        </div>

                        <div class="form-group">
                          <textarea name="message" placeholder="Your Massage" />
                        </div>

                        <div class="form-group text-center">
                          <button
                            type="submit"
                            class="theme-btn btn-style-four"
                          >
                            <span class="txt">Send Now</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                  <div
                    class="inner-column wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div class="image">
                      <img src="images/resource/quote.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="three-item-carousel owl-carousel owl-theme" />
          </div>
        </section>
      </div>
    );
  }
}

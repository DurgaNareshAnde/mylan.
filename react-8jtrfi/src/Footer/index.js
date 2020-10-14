import React from "react";

export default function Footer(props) {
  return (
    <footer className="main-footer">
      <div className="auto-container">
        <div className="widgets-section">
          <div className="row clearfix">
            <div className="footer-column col-lg-4 col-md-6 col-sm-12">
              <div className="footer-widget logo-widget">
                <div className="widget-content">
                  <div className="logo">
                    <a href="index.html">
                      <img src="https://picsum.photos/200" alt="" />
                    </a>
                  </div>
                  <div className="text">
                    <p>
                      Manzil is an exclusive multi-purpose 100% responsive
                      Template Theme with powerful features.
                    </p>
                    <p>
                      Simple and well-structured coding, high quality and
                      flexible layout, scalable features along with color
                      schemes to create tailor-cut websites.
                    </p>
                  </div>
                  <ul className="social-box">
                    <li>
                      <a href="#" className="fa fa-facebook-f" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-linkedin" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-twitter" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-google" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column col-lg-4 col-md-6 col-sm-12">
              <div className="footer-widget links-widget">
                <h4>Useful Links</h4>
                <div className="row clearfix">
                  <div className="column col-lg-6 col-sm-6 col-sm-12">
                    <ul className="list-link">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="about.html">About us</a>
                      </li>
                      <li>
                        <a href="testimonial.html">Testimonials</a>
                      </li>
                      <li>
                        <a href="blog.html">News</a>
                      </li>
                      <li>
                        <a href="projects.html">Portfolio</a>
                      </li>
                    </ul>
                  </div>
                  <div className="column col-lg-6 col-sm-6 col-sm-12">
                    <ul className="list-link">
                      <li>
                        <a href="team.html">Team</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="projects.html">Gallery</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-column col-lg-4 col-md-6 col-sm-12">
              <div className="footer-widget contact-widget">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <span className="icon flaticon-world" />
                    <strong>25BT, San Rojartar,</strong>
                    New York, United States
                  </li>
                  <li>
                    <span className="icon flaticon-email-3" />
                    <strong>Send Your Mail At</strong>
                    <a href="mailto:construction@Support.com">
                      Construction@Support.Com
                    </a>
                  </li>
                  <li>
                    <span className="icon flaticon-clock-3" />
                    <strong>Working Hours</strong>
                    Mon-Sat:9.30am To 7.00pm
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <div className="copyright">
                &copy; All rights reserved by{" "}
                <a href="https://themeforest.net/user/themeexpo">themeexpo</a>
              </div>
            </div>
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <ul className="footer-nav">
                <li>
                  <a href="terms.html">Terms</a>
                </li>
                <li>
                  <a href="privacy.html">Privacy & Policy</a>
                </li>
                <li>
                  <a href="register.html">Join Us</a>
                </li>
                <li>
                  <a href="contact.html">Need Help?</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, {Component} from "react";

import MultiCarousel from "./Components/MultiCarousel";
import "font-awesome/css/font-awesome.min.css";
import "./style.css";
import "./CSS/Home.css";
import "./index.css";
import CoApp from "./App2"
export default class Home extends Component {
  render() {
    // <CoApp />
  return (
    <div>
      <div className="container main-slider ">
        <div id="content-slider">
          <div id="slider">
            <div id="mask">
              <ul>
                <li id="first" className="firstanimation">
                  <a href="#">
                    {" "}
                    <img src="https://picsum.photos/200" alt="Cougar" />{" "}
                  </a>
                </li>

                <li id="second" className="secondanimation">
                  <a href="#">
                    {" "}
                    <img src="https://picsum.photos/200" alt="Lions" />{" "}
                  </a>
                </li>

                <li id="third" className="thirdanimation">
                  <a href="#">
                    {" "}
                    <img src="https://picsum.photos/200" alt="Snowalker" />{" "}
                  </a>
                </li>

                <li id="fourth" className="fourthanimation">
                  <a href="#">
                    {" "}
                    <img src="https://picsum.photos/200" alt="Howling" />{" "}
                  </a>
                </li>

                <li id="fifth" className="fifthanimation">
                  <a href="#">
                    {" "}
                    <img
                      src="https://picsum.photos/200"
                      alt="Sunbathing"
                    />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="about-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="row clearfix">
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-column wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="image">
                    <a
                      href="https://picsum.photos/200"
                      data-fancybox="about"
                      data-caption=""
                      className="link"
                    >
                      <img src="https://picsum.photos/200" alt="" />
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=kxPCFljwJws"
                      className="lightbox-image video-box"
                    >
                      <span className="fa fa-play">
                        <i className="ripple" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title">
                    <div className="title">
                      <div className="title-effect">
                        <div className="bar bar-top" />
                        <div className="bar bar-right" />
                        <div className="bar bar-bottom" />
                        <div className="bar bar-left" />
                      </div>
                      About Us
                    </div>
                    <h2>
                      We Are The Leader in <br /> The Architectura!
                    </h2>
                  </div>
                  <div className="experiance">36 Years Experience Working</div>
                  <div className="text">
                    For each project we establish relationships with partners
                    who we know will help us create added value for your
                    project. As well as bringing together the public and private
                    sectors, we make sector-overarching links to gather
                    knowledge and to learn from each other who we know will help
                    us create added value for your project.......
                  </div>
                  <div className="btn-box clearfix">
                    <a href="about.html" className="theme-btn btn-style-one">
                      <span className="txt">More About</span>
                    </a>
                  </div>

                  <div className="fact-counter">
                    <div className="row clearfix">
                      <div className="column counter-column col-lg-4 col-md-4 col-sm-12">
                        <div
                          className="inner wow fadeInLeft"
                          data-wow-delay="0ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="content">
                            <div className="icon">
                              <img src="https://picsum.photos/200" alt="" />
                            </div>
                            <div className="count-outer count-box">
                              <span
                                className="count-text"
                                data-speed="3500"
                                data-stop="150"
                              >
                                0
                              </span>
                              +
                            </div>
                            <div className="counter-title">Awards Winner</div>
                          </div>
                        </div>
                      </div>

                      <div className="column counter-column col-lg-4 col-md-4 col-sm-12">
                        <div
                          className="inner wow fadeInLeft"
                          data-wow-delay="300ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="content">
                            <div className="icon">
                              <img src="https://picsum.photos/200" alt="" />
                            </div>
                            <div className="count-outer count-box">
                              <span
                                className="count-text"
                                data-speed="2500"
                                data-stop="5021"
                              >
                                0
                              </span>
                              +
                            </div>
                            <div className="counter-title">
                              Satisfied Clients
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column counter-column col-lg-4 col-md-4 col-sm-12">
                        <div
                          className="inner wow fadeInLeft"
                          data-wow-delay="600ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="content">
                            <div className="icon">
                              <img src="https://picsum.photos/200" alt="" />
                            </div>
                            <div className="count-outer count-box">
                              <span
                                className="count-text"
                                data-speed="3000"
                                data-stop="201"
                              >
                                0
                              </span>
                              +
                            </div>
                            <div className="counter-title">Active projects</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="services-section">
        <div class="image-layer" />
        <div class="auto-container">
          <div class="sec-title light centered">
            <div class="title">
              <div class="title-effect">
                <div class="bar bar-top" />
                <div class="bar bar-right" />
                <div class="bar bar-bottom" />
                <div class="bar bar-left" />
              </div>
              Our Service
            </div>
            <h2>
              We Will Satisfy You By Our <br /> Servicing Plan
            </h2>
          </div>
          <MultiCarousel />
        </div>
      </section>
  <section class="gallery-section">
		<div class="auto-container">
			<div class="sec-title centered">
				<div class="title">
					<div class="title-effect">
						<div class="bar bar-top"></div>
						<div class="bar bar-right"></div>
						<div class="bar bar-bottom"></div>
						<div class="bar bar-left"></div>
					</div>
					Projects
				</div>
				<h2>Our Latest Projects Check <br/> Now Dears</h2>
			</div>
            <div class="mixitup-gallery">
                <div class="filters clearfix">
                	
                	<ul class="filter-tabs filter-btns text-center clearfix">
                        <li class="active filter" data-role="button" data-filter="all">All Cases</li>
                        <li class="filter" data-role="button" data-filter=".building">Buildings</li>
                        <li class="filter" data-role="button" data-filter=".bridge">Modern Bridge</li>
                        <li class="filter" data-role="button" data-filter=".houses">Houses</li>
                        <li class="filter" data-role="button" data-filter=".interiors">Interiors</li>
                    </ul>
                    
                </div>
                
                <div class="filter-list row clearfix"/>
					<div class="gallery-block mix all houses interiors col-lg-4 col-md-6 col-sm-12">
						<div class="inner-box">
							<figure class="image-box">
								<img src="https://picsum.photos/200" alt=""/>
								<div class="overlay-box">
									<div class="overlay-inner">
										<div class="content">
											<h6><a href="portfolio-detail.html">Construction Build</a></h6>
											<div class="category">Roof Filling</div>
										</div>
									</div>
								</div>
								<a href="images/gallery/1.jpg" data-fancybox="gallery-1" data-caption="" class="link"><span class="icon flaticon-full-screen"></span></a>
							</figure>
						</div>
					</div>
					
					<div class="gallery-block mix all building interiors col-lg-4 col-md-6 col-sm-12">
						<div class="inner-box">
							<figure class="image-box">
								<img src="https://picsum.photos/200" alt=""/>
								<div class="overlay-box">
									<div class="overlay-inner">
										<div class="content">
											<h6><a href="portfolio-detail.html">Construction Build</a></h6>
											<div class="category">Roof Filling</div>
										</div>
									</div>
								</div>
								<a href="images/gallery/2.jpg" data-fancybox="gallery-1" data-caption="" class="link"><span class="icon flaticon-full-screen"></span></a>
							</figure>
						</div>
					</div>
					<div class="gallery-block mix all houses interiors col-lg-4 col-md-6 col-sm-12">
						<div class="inner-box">
							<figure class="image-box">
								<img src="https://picsum.photos/200" alt=""/>
								<div class="overlay-box">
									<div class="overlay-inner">
										<div class="content">
											<h6><a href="portfolio-detail.html">Construction Build</a></h6>
											<div class="category">Roof Filling</div>
										</div>
									</div>
								</div>
								<a href="images/gallery/3.jpg" data-fancybox="gallery-1" data-caption="" class="link"><span class="icon flaticon-full-screen"></span></a>
							</figure>
						</div>
					</div>
					
					<div class="gallery-block mix all houses building bridge col-lg-4 col-md-6 col-sm-12">
						<div class="inner-box">
							<figure class="image-box">
								<img src="https://picsum.photos/200" alt=""/>
								<div class="overlay-box">
									<div class="overlay-inner">
										<div class="content">
											<h6><a href="portfolio-detail.html">Construction Build</a></h6>
											<div class="category">Roof Filling</div>
										</div>
									</div>
								</div>
								<a href="images/gallery/4.jpg" data-fancybox="gallery-1" data-caption="" class="link"><span class="icon flaticon-full-screen"></span></a>
							</figure>
						</div>
					</div>
					<div class="gallery-block mix all houses interiors col-lg-4 col-md-6 col-sm-12">
						<div class="inner-box">
							<figure class="image-box">
								<img src="https://picsum.photos/200" alt=""/>
								<div class="overlay-box">
									<div class="overlay-inner">
										<div class="content">
											<h6><a href="portfolio-detail.html">Construction Build</a></h6>
											<div class="category">Roof Filling</div>
										</div>
									</div>
								</div>
								<a href="images/gallery/5.jpg" data-fancybox="gallery-1" data-caption="" class="link"><span class="icon flaticon-full-screen"></span></a>
							</figure>
						</div>
					</div>
					<div class="gallery-block mix all bridge building col-lg-4 col-md-6 col-sm-12">
						<div class="inner-box">
							<figure class="image-box">
								<img src="https://picsum.photos/200" alt=""/>
								<div class="overlay-box">
									<div class="overlay-inner">
										<div class="content">
											<h6><a href="portfolio-detail.html">Construction Build</a></h6>
											<div class="category">Roof Filling</div>
										</div>
									</div>
								</div>
								<a href="images/gallery/6.jpg" data-fancybox="gallery-1" data-caption="" class="link"><span class="icon flaticon-full-screen"></span></a>
							</figure>
						</div>
					</div>
					
				</div>
				
			</div>
			
	
	</section>
    </div>
  );}
}

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MultiCarousel.css";
export default function MultiCarousel(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all 1"
      transitionDuration={100}
      arrows={false}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
    
       {[1,2,3,4,5,6].map((x,i) => <div class="service-block">
          <div class="inner-box">
            <figure class="image-box">
              <img src="https://picsum.photos/200" alt="" />
              <div class="overlay-box">
                <div class="overlay-inner">
                  <div class="content">
                    <div class="icon-box">
                      <span class="icon flaticon-mall-1" />
                    </div>
                    <div class="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod
                    </div>
                    <a href="property-sketching.html" class="read-more">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </figure>
            <div class="lower-box">
              <h5>
                <a href="property-sketching.html">Property Sketching {i}</a>
              </h5>
            </div>
          </div>
        </div>)}
    </Carousel>
  );
}

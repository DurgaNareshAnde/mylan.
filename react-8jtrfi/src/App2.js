import React, { useRef, useEffect } from "react";
import ScrollMagic from "scrollmagic";
import { Linear,TimelineMax, TimelineLite,TweenLite,Power1 } from "gsap/all";


export default function CoApp() {
  let item = useRef(null);
  let parallaxController = new ScrollMagic.Controller(
    {globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}}
  );
const handleScroll = () => {
    const position = window.pageYOffset;
    var trig = item.parentNode;
      let y = window.pageYOffset;
      console.log("sss",position)
    new ScrollMagic.Scene({triggerElement: trig})
        .setTween(item, {y: y, ease: Linear.easeNone})
        .addTo(parallaxController);
};
  useEffect(() => {
  
 
    var tl = new TimelineMax();
    console.log("item--",item.scrollY)
    tl.to(item, 11, { y: -180,ease: Linear.easeNone});
    new ScrollMagic.Scene({ triggerElement: "#child" })
      .setTween(item, { y: -180, ease: Linear.easeNone })
      .addTo(parallaxController);
    // const flightPath = {
    //   values: [{x:-100,y: 100}]
    // }
    // const tween = new TimelineLite();
    // tween.add(
    //   TweenLite.to("#child",1,{
    //     bezier: flightPath,
    //     ease: Power1.easeInOut
    //   })
    // )
  //   new ScrollMagic.Scene({
  //   triggerElement: "#test",
  //   triggerHook: 0.4,
  //   duration: "100%"
  // })
  //   .setTween(tl)
  //   .addTo(parallaxController);
  // window.addEventListener('scroll', handleScroll, { passive: true });
  //  return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //   };
  },[]);

  return (
    <section id="test">
      <div class="parallax p1" data-parallax="1">
        p1
      </div>
      <div
        class="parallax p2"
        id="child"
        ref={el => {
          item = el;
        }}
        data-parallax="0.5"
      >
        p2
      </div>
    </section>
  );
}

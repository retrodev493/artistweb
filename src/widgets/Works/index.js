"use client";
import React, { useEffect, useRef } from "react";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Workpage = () => {
  const main = useRef();
  const containerRef = useRef();
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          pin: true,
          anticipatePin: true,
          markers: true,
          scrub: true,  
          force3d: true,
          start: "top top",
          end: "+=200%",
        },
      });
      tl.to(".containerr", {
        xPercent: -80,
        ease: "none",
      });
    },
    { scope: main }
  );
  return (
    <section className="overflow-hidden" ref={main} >
      <div ref={containerRef} class="containerr">
        <div class="page one">One</div>
        <div class="page two">Two</div>
        <div class="page three">Three</div>
      </div>
    </section>
  );
};

export default Workpage;

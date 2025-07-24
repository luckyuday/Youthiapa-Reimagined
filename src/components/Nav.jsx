import React, { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const lineTop = useRef();
  const lineMiddle = useRef();
  const lineBottom = useRef();
  const navigationbuttons = useRef();
  const menuAnimationTimeline = useRef();

  useGSAP(() => {
    gsap.set(navigationbuttons.current, { x: "100vw" });

    const tl = gsap.timeline({ paused: true });

    tl.to(
      lineMiddle.current,
      {
        opacity: 0,
        scaleX: 0,
        duration: 0.2,
        ease: "power1.out",
      },
      0
    )
      .to(
        lineTop.current,
        {
          y: 5,
          rotation: 45,
          transformOrigin: "center center",
          duration: 0.3,
          ease: "power1.out",
        },
        0.1
      )
      .to(
        lineBottom.current,
        {
          y: -5,
          rotation: -45,
          transformOrigin: "center center",
          duration: 0.3,
          ease: "power1.out",
        },
        0.1
      )
      .to(
        navigationbuttons.current,
        {
          x: "0vw",
          duration: 0.5,
          ease: "power1.out",
        },
        0.1
      );
    menuAnimationTimeline.current = tl;
  });

  const menutoggle = () => {
    setIsMenuOpen((prev) => !prev);
    const tl = menuAnimationTimeline.current;
    if (tl) {
      if (isMenuOpen) {
        tl.reverse();
      } else {
        tl.play();
      }
    }
  };

  return (
    <div className="w-full">
      <div className="fixed right-[5vw] w-fit overflow-hidden top-[1.5rem] z-10">
        <button
          onClick={menutoggle}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          className=""
        >
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* These IDs MUST be unique if multiple Nav components are rendered */}
            <line
              ref={lineTop}
              x1="3"
              y1="7"
              x2="21"
              y2="7"
              stroke="#091E05"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              ref={lineMiddle}
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              stroke="#091E05"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              ref={lineBottom}
              x1="3"
              y1="17"
              x2="21"
              y2="17"
              stroke="#091E05"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div
        ref={navigationbuttons}
        className="w-screen min-h-screen h-fit overflow-auto bg-[var(--redwood)] font-[dosis] text-[var(--seasalt)] text-[3rem] fixed flex flex-col z-9 left-0 justify-center items-center p-[2rem] "
      >
        <div className="menu-item flex gap-2 items-center justify-start w-[80%]">
          Home
        </div>
        <div className="menu-item flex gap-2 items-center justify-start w-[80%]">
          Products
        </div>
        <div className="menu-item flex gap-2 items-center justify-start w-[80%]">
          About
        </div>
      </div>
    </div>
  );
};

export default Nav;

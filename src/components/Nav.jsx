import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnimationTimeline = useRef(null);
  const navigationbuttons = useRef(null);

  useEffect(() => {
    const lineTop = document.getElementById("line-top");
    const lineMiddle = document.getElementById("line-middle");
    const lineBottom = document.getElementById("line-bottom");

    gsap.set(navigationbuttons.current, { x: "100vw" });

    menuAnimationTimeline.current = gsap.timeline({ paused: true });

    menuAnimationTimeline.current.to(
      lineMiddle,
      {
        opacity: 0,
        scaleX: 0,
        duration: 0.2,
        ease: "power1.out",
      },
      0
    );

    menuAnimationTimeline.current.to(
      lineTop,
      {
        y: 5,
        rotation: 45,
        transformOrigin: "center center",
        duration: 0.3,
        ease: "power1.out",
        stroke: "#f7f9f9ff",
      },
      0.1
    );

    menuAnimationTimeline.current.to(
      lineBottom,
      {
        y: -5,
        rotation: -45,
        transformOrigin: "center center",
        duration: 0.3,
        ease: "power1.out",
        stroke: "#f7f9f9ff",
      },
      0.1
    );
    menuAnimationTimeline.current.to(
      navigationbuttons.current,
      {
        x: "0vw",
        duration: 0.5,
        ease: "power1.out",
      },
      0.1
    );

    return () => {
      if (menuAnimationTimeline.current) {
        menuAnimationTimeline.current.kill();
      }
    };
  }, []);

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
              id="line-top"
              x1="3"
              y1="7"
              x2="21"
              y2="7"
              stroke="#091E05"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              id="line-middle"
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              stroke="#091E05"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              id="line-bottom"
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
        className="w-screen h-screen bg-[var(--dark-purple)] fixed flex z-9 left-0 "
      ></div>
    </div>
  );
};

export default Nav;

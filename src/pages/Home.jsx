import gsap from "gsap";
import React, { useRef } from "react";
import SplitText from "gsap/SplitText";
import HeroHeading from "../components/Heroheading";
import { useGSAP } from "@gsap/react";

const Home = () => {
  gsap.registerPlugin(SplitText);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  useGSAP(() => {
    const split = SplitText.create(subheadingRef.current, {
      type: "chars",
    });
    gsap.from(headingRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(split.chars, {
      duration: 0.5,
      stagger: 0.05,
      y: 100, // animate from 100px below
      autoAlpha: 0,
      scale: 0, // fade in from opacity: 0 and visibility: hidden
    });
  }, []);

  return (
    <div className="pt-[3vw] px-[3vw] w-full flex flex-col items-center gap-10">
      <div className="overflow-hidden w-full flex flex-col gap-5 items-center">
        <HeroHeading ref={headingRef} className="w-full" fill="#091e05ff" />
        <h4
          ref={subheadingRef}
          className="self-end text-[1.1rem] leading-[1.1rem] font-light "
        >
          Your daily dose of Awesome
        </h4>
      </div>
      <div id="video-container w-fit h-fit">
        <video
          src="./src\assets\a6fb5e33f9a64302ab7ce3bbf3efa3fb.HD-1080p-7.2Mbps-49439125.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
  );
};

export default Home;

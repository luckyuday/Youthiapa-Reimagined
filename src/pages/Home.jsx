import gsap from "gsap";
import { useRef } from "react";
import SplitText from "gsap/SplitText";
import HeroHeading from "../components/Heroheading";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";

const Home = () => {
  const headingRef = useRef(null);
  useGSAP(() => {
    gsap.from(headingRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power1.in",
    });
  }, []);

  return (
    <div className="pt-[3vw] px-[3vw] w-full flex flex-col items-center gap-10">
      <div className="overflow-hidden w-full">
        <HeroHeading ref={headingRef} className="w-full" fill="#091e05ff" />
      </div>
      <div id="video-container">
        <video
          ref={videoRef}
          src="./src\assets\a6fb5e33f9a64302ab7ce3bbf3efa3fb.HD-1080p-7.2Mbps-49439125.mp4"
          autoPlay
          muted
          loop
          className=""
        ></video>
      </div>
    </div>
  );
};

export default Home;

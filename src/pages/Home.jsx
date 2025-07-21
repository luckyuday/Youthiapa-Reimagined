import gsap from "gsap";
import { useRef } from "react";
import SplitText from "gsap/SplitText";
import HeroHeading from "../components/Heroheading";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";

const Home = () => {
  gsap.registerPlugin(SplitText, ScrollTrigger);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  useGSAP(() => {
    const split = SplitText.create(subheadingRef.current, {
      type: "chars",
    });
    gsap.from(headingRef.current, {
      yPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(
      split.chars,
      {
        duration: 0.5,
        stagger: 0.05,
        y: 100,
        autoAlpha: 0,
        scale: 0,
      },
      0.5
    );
  }, []);

  return (
    <div className="pt-[3vw] px-[3vw] w-full flex flex-col items-center gap-10">
      <div className=" w-full flex flex-col gap-5 items-center">
        <HeroHeading ref={headingRef} className="w-full" fill="#091e05ff" />

        <h4
          ref={subheadingRef}
          className="self-end text-[1.1rem] leading-[1.1rem]  overflow-hidden"
        >
          Your daily dose of Awesome
        </h4>

        <Link
          to={"/products"}
          className=" border-1 border-[#558B6E] py-[.5rem] px-[2rem] text-[1.05rem] rounded-xl hover:bg-[#558B6E] hover:text-[var(--seasalt)] duration-100 hover:scale-110 active:scale-100"
        >
          Join Youthiapa
        </Link>
      </div>
      <div ref={videoContainerRef} className="w-full h-[100vh] relative ">
        <video
          ref={videoRef}
          src="./src\assets\a6fb5e33f9a64302ab7ce3bbf3efa3fb.HD-1080p-7.2Mbps-49439125.mp4"
          autoPlay
          muted
          loop
          className=" w-full object-cover"
        ></video>
      </div>
    </div>
  );
};

export default Home;

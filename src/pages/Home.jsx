import gsap from "gsap";
import { useRef, useState } from "react";
import SplitText from "gsap/SplitText";
import HeroHeading from "../components/Heroheading";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
const Home = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoText = useRef(null);
  const videoText2 = useRef(null);
  const muteiconref = useRef(null);
  const t2 = useRef(null);
  const [isAudioOn, SetisAudioOn] = useState(false);
  const changeAudio = () => {
    SetisAudioOn((prev) => !prev);
    videoRef.current.muted = isAudioOn;
    if (!isAudioOn) {
      t2.current.play();
    } else {
      t2.current.reverse();
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    t2.current = gsap.timeline({ paused: true });
    t2.current.to(muteiconref.current, {
      opacity: 0,
      duration: 0.1,
      ease: "power1.in",
    });
    let split = SplitText.create(subheadingRef.current, { type: "chars" });
    let splitvideochars = SplitText.create(videoText.current, {
      type: "words",
    });
    let splitvideochars2 = SplitText.create(videoText2.current, {
      type: "words",
    });
    gsap.from(headingRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power1.in",
    });
    gsap.from(split.chars, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.03,
      ease: "power1.in",
    });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: videoContainerRef.current,
        pin: true,
        start: "top top",
        end: "+=1000%",
        scrub: 1,
      },
    });

    tl.from(videoRef.current, {
      width: "90%",
      height: "90%",
      ease: "none",
    });

    tl.to(videoRef.current, {
      filter: "brightness(0.4)",
      ease: "none",
    });
    tl.from(splitvideochars.words, {
      opacity: 0,
      y: "150%",
      stagger: 0.05,
    });
    tl.to(videoText.current, {
      duration: 2,
      stagger: 0.05,
      y: "-100vh",
    });
    tl.from(splitvideochars2.words, {
      y: "-100%",
      opacity: 0,
      stagger: 0.05,
      duration: 1,
    });
    tl.to(videoText2.current, {
      stagger: 0.05,
      scale: 0,
    });
    tl.to(videoRef.current, {
      scale: 0.9,
    });
  }, []);

  return (
    <div className="pt-[3vw] px-[3vw] w-full flex flex-col items-center gap-2">
      <div className=" w-full flex flex-col gap-[1rem] items-center text-[var(--dark-purple)]">
        <div className="h-fit overflow-hidden w-full">
          <HeroHeading ref={headingRef} fill="#091e05ff" />
        </div>
        <h2
          ref={subheadingRef}
          className="text-[.9rem] text-right text-[var(--dark-purple)] self-end"
        >
          Your Daily Dose of Awesome.
        </h2>
        <h2 className="text-4xl md:text-6xl font-bold text-[var(--dark-green)] tracking-tight">
          Wear Your Values.
        </h2>

        <p className=" text-[1rem] text-center md:text-xl ">
          Style that stands for something more.
        </p>

        <Link
          to={"/products"}
          className="mt-[1rem] text-[1.05rem] outline-0 border border-[var(--dark-green)] w-fit py-[.7rem] px-[1.5rem] rounded-full hover:cursor-pointer hover:scale-110 active:scale-95 duration-100"
        >
          Explore the merchandise
        </Link>
      </div>
      <div>
        <div
          id="video-container"
          ref={videoContainerRef}
          className="w-screen min-h-screen relative flex flex-col justify-center items-center "
        >
          <div
            className="absolute top-[8vh] left-[5vh] w-fit  z-5 bg-[var(--seasalt)] flex gap-2   py-2 px-3 rounded-xl"
            onClick={changeAudio}
          >
            <svg
              className="w-[1.1rem]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              {" "}
              <path
                className="speaker-body"
                d="M5.88889 16.0001H2C1.44772 16.0001 1 15.5524 1 15.0001V9.00007C1 8.44778 1.44772 8.00007 2 8.00007H5.88889L11.1834 3.66821C11.3971 3.49335 11.7121 3.52485 11.887 3.73857C11.9601 3.8279 12 3.93977 12 4.05519V19.9449C12 20.2211 11.7761 20.4449 11.5 20.4449C11.3846 20.4449 11.2727 20.405 11.1834 20.3319L5.88889 16.0001Z"
              ></path>
              <path
                ref={muteiconref}
                className="speaker-mute-x"
                d="M20.4142 12.0001L23.9497 15.5356L22.5355 16.9498L19 13.4143L15.4645 16.9498L14.0503 15.5356L17.5858 12.0001L14.0503 8.46454L15.4645 7.05032L19 10.5859L22.5355 7.05032L23.9497 8.46454L20.4142 12.0001Z"
              ></path>
            </svg>
            <h5 className="text-nowrap text-[1rem]">
              Click to {!isAudioOn ? "enable" : "disable"} sound
            </h5>
          </div>
          <video
            onClick={changeAudio}
            ref={videoRef}
            src="./src\assets\a6fb5e33f9a64302ab7ce3bbf3efa3fb.HD-1080p-7.2Mbps-49439125.mp4"
            autoPlay
            muted
            loop
            className=" w-full h-full object-cover brightness-100"
          ></video>

          <h1
            className="text-[2rem] absolute w-[70%] leading-[2rem] text-[var(--seasalt)] text-center h-fit overflow-hidden pointer-events-none"
            ref={videoText}
          >
            A new chapter Born out of <br></br>
            <span className="font-[Dosis]">Youthiapa</span>
          </h1>
          <h1
            className="text-[1.1rem] leading-[1.5rem] absolute w-[80%] font-light  text-[var(--seasalt)] pointer-events-none"
            ref={videoText2}
          >
            Raised Right is our fresh drop for everyday comfort and
            clean,confident style. But this isn’t just about what you wear. It’s
            about what you stand for. We’re built on respect, responsibility,
            and resilience. So when you wear Raised Right, you're repping more
            than style—you're repping values that matter.
            <br />
            <span className="text-center block font-semibold text-[1.5rem] mt-[.5rem] font-[dosis]">
              No noise.
              <br />
              No nonsense.
              <br />
              Just daily wear, done right.
            </span>
            <br />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useRef } from "react";
import AboutHeading from "../components/AboutHeading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import youthiapaLogoSrc from "../assets/youthiapatext.svg";
import backgroundVideoSrc from "../assets/bb music.webm";

const About = () => {
  const componentRef = useRef(null);
  const AboutHeadingRef = useRef(null);
  const youthiapaTextRef = useRef(null);
  const firstHeadingRef = useRef(null);
  const parent2Ref = useRef(null);
  const headingsContainerRef = useRef(null);
  const backgroundVideoRef = useRef(null);

  useGSAP(
    () => {
      // This is the corrected GSAP setup with a single, non-conflicting timeline.
      gsap.registerPlugin(ScrollTrigger, SplitText);

      const splitwords = SplitText.create(firstHeadingRef.current, {
        type: "words",
      });
      gsap.from(AboutHeadingRef.current, {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      });
      gsap.from(youthiapaTextRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        delay: 0.2,
      });
      gsap.from(splitwords.words, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.5,
      });

      gsap.set(backgroundVideoRef.current, { opacity: 0 });
      // Set initial opacity of headings to 0 so GSAP can animate them in
      gsap.set(headingsContainerRef.current.children, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parent2Ref.current,
          pin: true,
          start: "top top",
          end: "+=600%",
          scrub: 1,
        },
      });

      tl.to(parent2Ref.current, {
        scale: 1.2,
        duration: 1,
        ease: "power1.inOut",
      })
        .to(
          backgroundVideoRef.current,
          {
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
          },
          "<"
        )
        .call(
          () => {
            backgroundVideoRef.current
              ?.play()
              .catch((e) => console.error("Autoplay was prevented:", e));
          },
          [],
          "<"
        )
        .call(
          () => {
            if (backgroundVideoRef.current) {
              backgroundVideoRef.current.muted = false;
              backgroundVideoRef.current.play = true;
            }
          },
          [],
          "<+=0.5"
        )
        .from(
          backgroundVideoRef.current,
          {
            volume: 0,
            duration: 0.5,
          },
          "<"
        );

      const headings = gsap.utils.toArray(
        headingsContainerRef.current.children
      );
      tl.to(headings[0], { y: 0, opacity: 1, duration: 1, ease: "power2.out" });

      for (let i = 1; i < headings.length; i++) {
        tl.to(headings[i - 1], {
          y: -100,
          opacity: 0,
          duration: 1,
          delay: 2,
          ease: "power2.in",
        }).to(headings[i], {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        });
        if (i == headings.length - 1) {
          gsap.to(headings[i], {
            y: -100,
            opacity: 0,
            duration: 1,
            delay: 2,
            ease: "power2.in",
          });
        }
      }
    },
    { scope: componentRef }
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={componentRef}
      className="pt-12 w-full overflow-x-hidden flex flex-col items-center"
    >
      <div className="flex px-6 w-full items-center justify-center h-fit overflow-hidden">
        <AboutHeading
          ref={AboutHeadingRef}
          className="w-[50vw] md:w-[30vw] lg:w-[25vw]"
        />
      </div>

      <div className="flex flex-col px-6 relative items-center justify-center min-h-[70vh]">
        <div className="w-full" ref={youthiapaTextRef}>
          <img
            src={youthiapaLogoSrc}
            alt="Youthiapa Text Logo"
            className="w-full"
          />
        </div>
        <h2
          className="text-lg md:text-xl lg:text-2xl leading-snug md:leading-normal uppercase text-center mt-8"
          ref={firstHeadingRef}
        >
          began not with a business plan,
          <br />
          but with a spark of pure passion.
        </h2>
      </div>

      <div className="w-full relative">
        <div
          className="min-h-screen mx-auto w-[90%] p-8 md:p-12 flex flex-col justify-center items-center bg-black text-[var(--seasalt)]"
          ref={parent2Ref}
        >
          <video
            ref={backgroundVideoRef}
            src={backgroundVideoSrc}
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          ></video>
          <div
            ref={headingsContainerRef}
            className="relative z-10 text-center w-[90%] md:w-[80%] max-w-4xl h-48 flex items-center justify-center"
          >
            {/* The headings are now positioned using Tailwind classes */}
            <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Nurtured by the incredible journey of Bhuvan Bam's growing
              universe.
            </h3>
            <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              What started as merch for a community soon evolved into its
              uniform.
            </h3>
            <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              From inside jokes to iconic statements, a new voice in fashion was
              born.
            </h3>
            <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Today,{" "}
              <span className="uppercase font-[dosis] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Youthiapa
              </span>{" "}
              is that story—worn with pride by millions.
            </h3>
          </div>
        </div>
      </div>

      <div className="py-20">
        <button
          className="hover:underline transition-all hover:cursor-pointer text-lg md:text-xl mt-24 md:mt-40"
          onClick={scrollToTop}
        >
          Go back to the Top
        </button>
      </div>
    </div>
  );
};

export default About;

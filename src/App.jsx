import "./App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";
import { useRef } from "react";
import Footer from "./components/Footer";
import ScrollReset from "./components/ScrollReset";

function App() {
  const smootherWrapperRef = useRef(null);
  const smootherContentRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
      ScrollSmoother.create({
        wrapper: smootherWrapperRef.current,
        content: smootherContentRef.current,
        smooth: 1,
        effects: true,
        smoothTouch: 0.5,
      });
    },
    { scope: smootherWrapperRef, dependencies: [] }
  );

  return (
    <div className="relative w-full  h-full">
      <div id="smooth-wrapper" ref={smootherWrapperRef}>
        <ScrollReset />
        <Nav />
        <div id="smooth-content" ref={smootherContentRef} className=" w-full ">
          <MainRoutes />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

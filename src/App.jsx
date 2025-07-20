import "./App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
function App() {
  const smootherWrapperRef = useRef(null);
  const smootherContentRef = useRef(null);

  useGSAP(
    () => {
      // Check if refs are available
      if (!smootherWrapperRef.current || !smootherContentRef.current) {
        console.warn("ScrollSmoother wrapper or content elements not found.");
        return;
      }

      // Pass the actual DOM elements from the refs to ScrollSmoother.create()
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
      <Nav />
      <div id="smooth-wrapper" ref={smootherWrapperRef}>
        <div
          id="smooth-content"
          ref={smootherContentRef}
          className="min-h-screen w-full py-[4rem]"
        >
          <MainRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;

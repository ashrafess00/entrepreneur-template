import { useRef } from "react";
import { gsap, useGSAP } from "./lib/gsap";

export function TextsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const texts1: any = gsap.utils.toArray(".text-1");

    // Text 1 Animation
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: texts1[0],
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
        // markers: true,
      },
    });
    tl1
      .fromTo(
        texts1[0],
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .to(texts1[0], {
        opacity: 0,
        y: -100,
        duration: 1,
        filter: "blur(10px)",
      });

    // Text 2 Animation
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: texts1[1],
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
        // markers: true,
      },
    });
    tl2
      .fromTo(
        texts1[1],
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1 }
      )
      .to(texts1[1], {
        opacity: 0,
        x: -100,
        duration: 1,
        filter: "blur(10px)",
      });

    // Text 3 Animation
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: texts1[2],
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
        // markers: true,
      },
    });
    tl3
      .fromTo(
        texts1[2],
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1 }
      )
      .to(texts1[2], {
        opacity: 0,
        y: -100,
        duration: 1,
        filter: "blur(10px)",
      });

    // Text 4 Animation
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: texts1[3],
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
        // markers: true,
      },
    });
    tl4
      .fromTo(
        texts1[3],
        { opacity: 0, y: 100, x: 100 },
        { opacity: 1, x: 0, y: 0, duration: 1 }
      )
      .to(texts1[3], {
        opacity: 0,
        y: 100,
        duration: 1,
        filter: "blur(10px)",
      });
  }, []);

  return (
    <div
      ref={containerRef}
      className="p-10 -mt-20 bg-slate-900 z-50 texts-container  rounded-tl-[100px] rounded-tr-[100px] flex flex-col justify-center items-center"
    >
      <div
        ref={(el) => {
          if (el) textsRef.current[0] = el;
        }}
        className="text-1 text-slate-100 text-[15rem]"
      >
        Entrepreneur
      </div>
      <div
        ref={(el) => {
          if (el) textsRef.current[1] = el;
        }}
        className="text-1 text-slate-100 text-6xl  text-[15rem]"
      >
        Investor
      </div>
      <div
        ref={(el) => {
          if (el) textsRef.current[2] = el;
        }}
        className="text-1 text-slate-100 text-[15rem] "
      >
        Speaker
      </div>
      <div
        ref={(el) => {
          if (el) textsRef.current[3] = el;
        }}
        className="text-1 text-slate-100 text-[10rem]"
      >
        Mentor
      </div>
    </div>
  );
}

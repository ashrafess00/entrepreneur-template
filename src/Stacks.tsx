import { gsap, useGSAP } from "./lib/gsap";
import { useRef } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

export function Stacks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagosRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isLg = useMediaQuery("(min-width: 992px)");

  useGSAP(() => {
    if (!containerRef.current || !isLg) return null;

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        start: "top top",
        end: `+=${3 * 50}%`,
        scrub: 1,
        pinSpacing: true,
      },
    });

    tl.to(imagosRefs.current[1], {
      y: 0,
      opacity: 1,
    }).to(imagosRefs.current[2], {
      y: 0,
      opacity: 1,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="-space-y-32 lg:space-y-0 lg:h-screen relative bg-slate-900 z-10"
    >
      <div
        className="static lg:absolute inset-0 rounded-tl-4xl rounded-tr-4xl overflow-hidden h-[20rem] lg:h-full"
        ref={(el) => {
          imagosRefs.current[0] = el;
        }}
      >
        <img src="/images/image1.jpg" className="object-cover " />
      </div>
      <div
        className="static lg:absolute lg:opacity-0 lg:translate-y-[2rem] inset-0 rounded-tl-4xl rounded-tr-4xl overflow-hidden lg:overflow-visible lg:-mt-20 h-[20rem] "
        ref={(el) => {
          imagosRefs.current[1] = el;
        }}
      >
        <img src="/images/image2.jpg" className="object-cover " />
      </div>
      <div
        className="static lg:absolute lg:opacity-0 lg:translate-y-[2rem] inset-0 rounded-tl-4xl rounded-tr-4xl overflow-hidden lg:overflow-visible lg:-mt-10 h-[20rem] lg:h-full"
        ref={(el) => {
          imagosRefs.current[2] = el!;
        }}
      >
        <img src="/images/image3.jpg" className="object-cover " />
      </div>
    </div>
  );
}

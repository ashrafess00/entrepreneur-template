import { gsap, useGSAP } from "./lib/gsap";
import { useRef } from "react";

export function Stacks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagosRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return null;

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

    // const tl = gsap.timeline({

    //   scrollTrigger: {
    //     trigger: containerRef.current,
    //     start: "top 10%",
    //     end: () => `+=${containerRef?.current?.scrollHeight || 1}`,
    //     scrub: 1,
    //     pin: true,
    //     markers: true,
    //   },
    // });

    // tl.fromTo(
    //   imagosRefs.current[1],
    //   {
    //     opacity: 0,

    //     y: 50,
    //   },
    //   {
    //     opacity: 1,
    //     ease: "power3.out",
    //     y: 0,
    //   }
    // );

    // tl.fromTo(
    //   imagosRefs.current[2],
    //   {
    //     opacity: 0,
    //     y: 50,
    //   },
    //   {
    //     opacity: 1,
    //     ease: "power3.out",
    //     y: 0,
    //   }
    // );
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen relative overflow-hidden bg-slate-900 rounded-tl-4xl rounded-tr-4xl z-10"
    >
      <div
        className="absolute inset-0"
        ref={(el) => {
          imagosRefs.current[0] = el;
        }}
      >
        <img src="/images/image1.jpg" className="object-cover" />
      </div>
      <div
        className="absolute opacity-0 translate-y-[2rem] inset-0"
        ref={(el) => {
          imagosRefs.current[1] = el;
        }}
      >
        <img src="/images/image2.jpg" className="object-cover " />
      </div>
      <div
        className="absolute opacity-0 translate-y-[2rem] inset-0"
        ref={(el) => {
          imagosRefs.current[2] = el!;
        }}
      >
        <img src="/images/image3.jpg" className="object-cover " />
      </div>
    </div>
  );
}

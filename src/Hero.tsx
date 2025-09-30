import { gsap, useGSAP } from "./lib/gsap";

export function Hero() {
  useGSAP(() => {
    gsap.to(".maino", {
      opacity: 1,
      y: 0,
      delay: 0.5,
    });

    const htl = gsap.timeline({
      scrollTrigger: {
        trigger: ".con",
        start: "top top",
        // markers: true,
        scrub: true,
      },
    });

    htl
      .to(
        ".lt",
        // { x: -200, opacity: 0 },
        { x: 200, opacity: 1, ease: "power3.out" }
      )
      .to(
        ".rt",
        // { x: 200, opacity: 0 },
        { x: -200, opacity: 1, ease: "power3.out" },
        "<" // run at same time
      );
  }, []);

  return (
    <div className="z-0 flex-col md:flex-row w-screen min-h-[100svh] con bg-[#e9e9e7] text-slate-900 text-7xl flex items-center justify-center">
      <h1 className="maino opacity-0 text-2xl md:text-7xl absolute top-5 left-5 md:static">
        <span className="block lt uppercase">Hello i am</span>
        <span className="block mt-4 rt uppercase">Maria Daenerys</span>
      </h1>

      <img
        // ref={mainImg}
        src="/main-image.png"
        className="w-96 opacity-0 translate-y-10 maino -mb-20 absolute bottom-[8rem] md:static"
      />

      <img
        src="/wave-haikei.svg"
        className="absolute bottom-0 inset-x-0 w-full h-fit object-cover"
      />
    </div>
  );
}

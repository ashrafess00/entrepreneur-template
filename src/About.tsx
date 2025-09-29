import { gsap, useGSAP } from "./lib/gsap";

export function About() {
  useGSAP(() => {
    const spans = gsap.utils.toArray(".about-span");

    spans.forEach((span: any) => {
      gsap.to(span, {
        scrollTrigger: {
          trigger: span,
          start: "top 80%",
          // markers: true,
        },
        backgroundSize: "100% 100%",
        color: "black",
      });
    });
  }, []);

  return (
    <div className="p-10 w-full  bg-slate-900 pb-30">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl">About</h2>
        <p className="text-2xl mt-4 leading-10">
          I’m a frontend developer with a strong passion for{" "}
          <span className="about-span">
            building clean, modern, and user-friendly web applications
          </span>
          .
        </p>
        <p className="text-2xl mt-4 leading-10">
          I enjoy turning ideas into interactive digital experiences, and I’m
          always curious about{" "}
          <span className="about-span">learning new technologies</span> and
          improving my craft. Over time, I’ve worked on projects ranging from
          simple landing pages to full-stack platforms,
        </p>
        <p className="text-2xl mt-4 leading-10">
          focusing especially on creating smooth, responsive, and accessible
          interfaces. <span className="about-span">I love problem-solving</span>
          , experimenting with new design patterns, and collaborating with teams
          to bring creative solutions to life. Beyond coding, I’m driven by
          continuous learning and exploring how technology can make everyday
          tasks easier and more enjoyable.
        </p>
      </div>
    </div>
  );
}

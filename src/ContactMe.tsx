import React, { useRef } from "react";
import { gsap, useGSAP } from "./lib/gsap";

const ContactMe: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
            markers: false,
          },
        }
      );
    }
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        borderTopRightRadius: "100px",
        borderTopLeftRadius: "100px",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "top 20",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex -mt-[8rem] flex-col items-center justify-center min-h-screen bg-slate-900  p-8"
    >
      <h2 className="text-slate-100 text-4xl mb-8 font-bold">Contact Me</h2>
      <form
        ref={formRef}
        className="flex flex-col gap-6 w-full max-w-lg bg-slate-800 p-8 rounded-xl shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-4 rounded bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-4 rounded bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className="p-4 rounded bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
        <button
          type="submit"
          className="bg-red-400 text-slate-900 font-bold py-3 px-6 rounded hover:bg-red-500 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;

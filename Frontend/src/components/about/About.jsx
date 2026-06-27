import React from "react";
import { Divider, Image } from "../index";

function About() {
  return (
    <>
      <div
        id="about"
        className="w-full min-h-screen relative bg-black text-muted-foreground p-18 pt-30 flex items-center gap-40 border border-white/5 rounded-sm"
      >
        <div className="h-full w-1/2 flex flex-col justify-center gap-10 ">
          <div className="">
            <span className="text-primary font-mono tracking-widest">
              $ cat <span className="text-foreground">about.md</span>
              <span className="cursor animate-pulse">_</span>
            </span>
          </div>
          <div className="flex-col flex gap-7">
            <div>
              <h3 className="text-muted-foreground font-medium font-serif text-3xl">
                I build products that people{" "}
                <span className="text-gray-400">enjoy using.</span>
              </h3>
              <div className="w-2/3 mt-4 h-px bg-muted"></div>
              <p className="text-primary/55 font-mono text-sm font-medium tracking-wider mt-4">
                React • Node • PostgreSQL • AI
              </p>
              <div className="w-2/3 mt-4 h-px bg-muted"></div>
            </div>

            <div className="leading-[1.8] flex flex-col gap-3">
              <p className="text-[16px]">
                <span className="text-primary mt-1 mr-2">{">"}</span>
                I'm a Full Stack Developer who enjoys turning ideas into
                reliable, scalable web applications.{" "}
              </p>
              <p className="text-[16px]">
                <span className="text-primary mt-1 mr-2">{">"}</span>
                From designing intuitive React interfaces to building secure
                backend APIs, I enjoy working across the entire stack.
              </p>
              <p className="text-[16px] ">
                <span className="text-primary mt-1 mr-2">{">"}</span>
                Recently I've been focused on AI-powered applications,
                authentication systems, and solving real-world engineering
                problems.
              </p>

              <p className="text-[16px]">
                <span className="text-primary mt-1 mr-2">{">"}</span>
                Outside of coding, you'll usually find me solving DSA problems,
                contributing to open source, or learning something new.
              </p>
            </div>
          </div>
        </div>
        <div className=" rounded-full bg-[#2d2d2d] hover:bg-[#b4ff39]">
          <Image />
        </div>
      </div>

      <Divider />
    </>
  );
}

export default About;

import React from "react";
import { data } from "./portfolioData.js";
import { Button, Terminal, Divider, Profile } from "../index.js";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();
  return (
    <>
      <div
        id="home"
        className="w-full flex justify-center items-center min-h-screen relative bg-background text-gray-400 p-18 "
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-10">
            <span
              className="w-2 h-2 rounded-full bg-primary animate-pulse"
              data-fgid-d3bl18=":rk:"
            ></span>
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              Open to new roles
            </span>
          </div>

          <h1 className="text-foreground text-[clamp(3.5rem,10vw,7.5rem)] font-display tracking-tighter w-1/2 leading-[0.92]">
            {data.role?.first ?? "Full Stack"}
            <span className="inline-block text-gray-400 italic">
              {data.role?.second ?? "Developer"}.
            </span>
          </h1>

          <Terminal />

          <div className="pt-11 w-1/2">
            I build systems that scale and interfaces that hold up under
            scrutiny. Currently at Vercel, working on the edge. Previously at
            Stripe and Loom.
          </div>

          <div className="flex gap-3 pt-15">
            <button
              className="bg-primary cursor-pointer py-3 px-6 text-sm font-mono inline-flex gap-2 items-center justify-center text-black"
              onClick={() => {
                scrollToSection("projects");
                navigate("/#projects");
              }}
            >
              <span>View Work</span>
              <ArrowUpRight size={13} />
            </button>
            <button
              className="bg-background cursor-pointer text-muted-foreground py-3 px-6 text-sm font-mono inline-flex gap-2 items-center justify-center border border-border"
              onClick={() => {
                scrollToSection("contact");
                navigate("/#contact");
              }}
            >
              <span>Get in touch</span>
            </button>
          </div>
        </div>
        <div className="relative flex items-end">
          <Profile />
        </div>
      </div>

      <div className="pt-20 pb-6 flex items-center gap-6 ">
        <div className="h-px flex-1 bg-border"></div>
        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
          scroll
        </span>
        <div className="h-px w-10 bg-border"></div>
      </div>

      <Divider />
    </>
  );
}

export default Home;

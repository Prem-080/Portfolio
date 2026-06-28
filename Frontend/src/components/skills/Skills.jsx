import React from "react";
import { Divider, CodeEditor } from "../index";

function Skills() {
  return (
    <>
      <div
        id="skills"
        className="w-full min-h-screen relative bg-black text-foreground p-5 lg:p-18 pt-30 gap-40"
      >
        <div className="">
          <span className="text-primary font-mono tracking-widest">
            $ cat <span className="text-foreground">stack.config.ts</span>
            <span className="cursor animate-pulse">_</span>
          </span>
        </div>
        <div className="mt-10">
          <CodeEditor />
        </div>
      </div>

      <Divider />
    </>
  );
}

export default Skills;

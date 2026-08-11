import React from "react";

function Footer() {
  return (
    <>
      <div className="">
        <div className="w-full z-50 flex flex-col px-6 lg:p-12 lg:pt-14 py-3 text-muted-foreground tracking-wider font-mono text-[15px]">
          <div className="mb-6">
            <span className="font-mono tracking-widest text-primary">
              $ <span className="text-white">exit</span>
              <span className="animate-pulse">_</span>
            </span>
          </div>
          <div className="flex justify-between">
            <span>&copy; Prem Kumar Singh</span>
            <span>React . Tailwind</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

import React from "react";
import {
  Home,
  About,
  Projects,
  Contact,
  SectionBorder,
  Skills,
  Experience,
} from "../components/index";

function HomePage() {
  return (
    <>
      <div className="bg-background">
        <Home />
        <SectionBorder>
          <About />
        </SectionBorder>
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

export default HomePage;

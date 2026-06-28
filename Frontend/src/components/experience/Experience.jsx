import experiences from "./experienceData";
import ExperienceCard from "./ExperienceCard";
import { Divider } from "../index";

function Experience() {
  return (
    <>
      <section id="experience" className="z-100 w-full min-h-full py-32 px-5 lg:px-18">
        <span className="text-primary font-mono tracking-widest">
          $ cat <span className="text-white">experience.md</span>
          <span className="animate-pulse">_</span>
        </span>

        <div className="mt-16 space-y-10">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>
      <Divider />
    </>
  );
}

export default Experience;


function ExperienceCard({ experience }) {
  return (
    <div className="relative border border-border rounded-xl p-8 hover:border-primary transition-all duration-300">

      {/* Timeline Dot */}
      <div className="absolute -left-3 top-10 w-5 h-5 rounded-full bg-primary" />

      <p className="text-primary font-mono text-sm">
        {experience.duration}
      </p>

      <h3 className="text-2xl font-semibold mt-2">
        {experience.role}
      </h3>

      <p className="text-muted-foreground mt-1">
        {experience.company}
      </p>

      <ul className="mt-6 space-y-3">
        {experience.description.map((point) => (
          <li
            key={point}
            className="flex gap-3 text-muted-foreground"
          >
            <span className="text-primary">▸</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ExperienceCard;
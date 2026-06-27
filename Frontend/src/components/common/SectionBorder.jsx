const SectionBorder = ({ children, borderColor="border-white/5", padding="px-12 py-16" }) => {
  return (
    <section className={`relative border ${borderColor} rounded-sm`}>

      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/70" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/70" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/70" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/70" />

      <div className={`${padding}`}>
        {children}
      </div>

    </section>
  );
};

export default SectionBorder;
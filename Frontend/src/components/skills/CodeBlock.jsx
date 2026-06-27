import { motion, AnimatePresence } from "motion/react";

export default function CodeBlock({
  activeTab,
  data,
}) {
  const entries = Object.entries(data);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
        className="flex-1 font-mono text-sm p-6"
      >
        {/* First line */}

        <div className="flex h-8">
          <span className="w-8 text-right text-muted-foreground/40 mr-6">
            1
          </span>

          <span className="text-purple-400">export</span>

          <span className="ml-2 text-pink-400">const</span>

          <span className="ml-2 text-blue-400">
            {activeTab.replace(".ts", "")}
          </span>

          <span className="ml-2">=</span>

          <span className="ml-2">{"{"}</span>
        </div>

        {entries.map(([key, value], index) => (
          <div
            key={key}
            className="group flex h-8 items-center rounded-sm hover:bg-white/5"
          >
            <span className="w-8 text-right mr-10 text-muted-foreground/40 group-hover:text-primary">
            {index + 2}
            </span>

            <span className="text-cyan-400">{key}</span>

            <span className="mx-2">:</span>

            <span className="text-green-400">"{value}"</span>

            <span>,</span>
          </div>
        ))}

        <div className="flex h-8 items-center">
          <span className="w-8 text-right mr-6 text-muted-foreground/40">
            {entries.length + 2}
          </span>

          <span>{"};"}</span>

          <span className="ml-1 animate-pulse text-primary">▋</span>
        </div>

        {Array.from({
          length: 8,
        }).map((_, i) => (
          <div key={i} className="flex h-8">
            <span className="w-8 text-right mr-6 text-muted-foreground/20">
              {entries.length + 3 + i}
            </span>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

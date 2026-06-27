import { FileCode2 } from "lucide-react";

export default function Explorer({
  tabs,

  activeTab,

  setActiveTab,
}) {
  return (
    <div className="w-60 bg-[#111827] border-r border-border">
      <div className="px-5 py-4 border-b border-border font-mono text-xs uppercase tracking-widest">
        Explorer
      </div>

      <div>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative cursor-pointer flex items-center gap-3 w-full px-5 py-3 font-mono text-sm transition-all duration-200 ${
              activeTab === tab
                ? "bg-background text-white"
                : "text-muted-foreground hover:bg-white/5 hover:translate-x-1"
            } `}
          >
            {activeTab === tab && (
              <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
            )}

            <FileCode2 size={15} className="text-sky-400" />

            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

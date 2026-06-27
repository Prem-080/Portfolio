import { FileCode2 } from "lucide-react";

export default function EditorHeader({ activeTab }) {
  return (
    <div className="py-3 border-b border-border flex items-center px-5 bg-[#161b22]">
      <FileCode2 size={16} className="text-sky-400 mr-3" />

      <span className="font-mono text-sm">{activeTab}</span>
    </div>
  );
}

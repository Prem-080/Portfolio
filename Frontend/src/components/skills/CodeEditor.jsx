import { useState } from "react";

import {Explorer, EditorHeader, CodeBlock} from "../index.js";

import skillsData from "./skillsData";

export default function CodeEditor() {
  const tabs = Object.keys(skillsData);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex h-[450px] border border-border rounded-lg overflow-hidden">
      <Explorer tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex flex-col flex-1">
        <EditorHeader activeTab={activeTab} />

        <CodeBlock activeTab={activeTab} data={skillsData[activeTab]} />
      </div>
    </div>
  );
}

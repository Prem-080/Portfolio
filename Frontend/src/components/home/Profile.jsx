import React from "react";
import { data } from "./portfolioData.js";

function Profile() {
  const keys = ["name", "loc", "stack", "experience", "open"];
  return (
    <div className="font-mono text-[10px] border border-border bg-card lg:w-[340px]">
      <div className="flex gap-2 py-3 px-4 text-muted-foreground items-center border-b border-border">
        <span className="w-2 h-2 rounded-2xl bg-red-500/50"></span>
        <span className="w-2 h-2 rounded-2xl bg-yellow-500/50"></span>
        <span className="w-2 h-2 rounded-2xl bg-green-500/50"></span>
        <span>profile.json</span>
      </div>
      <div className="text-white flex justify-center p-5 pt-10 pb-10 font-mono leading-7 flex-col text-xs ">
        <div>&#123;</div>
        <div className=" ml-1.5">
          {keys.map((key) => (
            <div key={key} className="flex">
              <span className="text-primary">"{key}"</span>

              <span className="text-white mx-1">:</span>

              {Array.isArray(data[key]) ? (
                <span>
                  <div className="text-white">[ </div>

                  {data[key].map((item, i) => (
                    <span key={item}>
                      <span className="text-orange-300">'{item}'</span>

                      {i !== data[key].length - 1 && (
                        <span className="text-white">, </span>
                      )}
                    </span>
                  ))}

                  <div className="text-white"> ]</div>
                </span>
              ) : typeof data[key] === "boolean" ? (
                <span className="text-blue-400">{String(data[key])}</span>
              ) : (
                <span className="text-white">'{data[key]}'</span>
              )}
            </div>
          ))}
        </div>
        <div>&#125;</div>
      </div>
    </div>
  );
}

export default Profile;

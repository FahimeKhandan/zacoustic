import React from "react";
import TeamIconAndName from "./TeamIconAndName";

export default function AddMembers() {
  return (
    <div className="w-full">
      <TeamIconAndName />
      <p className="text-secandary w-full px-6 mb-6">
        Add Members <span className="text-xs ml-2">6 / 13</span>
      </p>
    </div>
  );
}

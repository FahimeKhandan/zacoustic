import React from "react";
import TeamIconAndName from "./TeamIconAndName";
import TeamMembers from "./TeamMembersPanel";

export default function TeamInfo({ openAddMemberPanel }) {
  return (
    <div className="w-full">
      <TeamIconAndName />
      <TeamMembers openAddMemberPanel={() => openAddMemberPanel()} />
    </div>
  );
}

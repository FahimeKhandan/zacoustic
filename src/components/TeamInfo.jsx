import React from "react";

//components
import TeamIconAndName from "./TeamIconAndName";
import TeamMembers from "./TeamMembersPanel";

//material icons
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function TeamInfo({ openAddMemberPanel, closeModal }) {
  return (
    <div className="w-full">
      <div className="px-8 py-5 flex">
        <ArrowBackIosNewIcon
          fontSize="smal"
          className="cursor-pointer"
          onClick={() => closeModal()}
        />
        <MoreHorizIcon fontSize="small" className="ml-auto" />
      </div>
      <TeamIconAndName />
      <TeamMembers openAddMemberPanel={() => openAddMemberPanel()} />
    </div>
  );
}

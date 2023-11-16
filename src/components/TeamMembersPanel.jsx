import React from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import MembersList from "./MembersList";

export default function TeamMembers({ openAddMemberPanel }) {
  const members = [
    {
      name: "Bessie Cooper",
      role: "Agent",
    },
    {
      name: "Cameron Williamson",
      role: "Agent",
    },
  ];

  return (
    <div>
      <div className="bg-gray-100 w-full px-8 py-5 my-6">
        <PeopleAltOutlinedIcon className="mr-5 text-secandary" />
        <span className="text-primary"> 6 members</span>
        <button
          className="float-right text-secandary"
          onClick={() => openAddMemberPanel()}
        >
          <PersonAddAltIcon />
        </button>
      </div>
      <ul>
        {members.map((member, index) => (
          <MembersList member={member} onEditMode={false} key={member + index} />
        ))}
      </ul>
    </div>
  );
}

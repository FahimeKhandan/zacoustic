import React from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import MembersList from "./MembersList";

export default function TeamMembers() {
  return (
    <div>
      <div className="bg-gray-100 w-full px-8 py-5 my-6">
        <PeopleAltOutlinedIcon className="mr-5 text-secandary" />
        <span className="text-primary"> 6 members</span>
        <PersonAddAltIcon className="float-right text-secandary" />
      </div>
      <MembersList/>
    </div>
  );
}

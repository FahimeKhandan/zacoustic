import React from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import MembersList from "./MembersList";

import useTeams from "../hooks/useTeams";
import useUser from "../hooks/useUser";

export default function TeamMembersPanel({ openAddMemberPanel }) {
  const { data: users } = useUser();

  const {
    data: teams,
    error: teamsError,
    isLoading: teamsIsloading,
  } = useTeams(1);

  const getMemberInfo = (memberId) => {
    if (!users) return {};

    const fullInfo = users.filter((item) => item.id === memberId);
    return fullInfo.length ? fullInfo[0] : {};
  };

  if (teamsError) return null;

  if (teamsIsloading) return <div>loading...</div>;

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
        {teams &&
          teams[0].members.map((memberId, index) => (
            <MembersList
              member={getMemberInfo(memberId)}
              onEditMode={false}
              key={memberId + index}
            />
          ))}
      </ul>
    </div>
  );
}

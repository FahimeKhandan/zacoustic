import React, { useEffect, useState } from "react";

//materisl icons
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

//components
import MembersList from "./MembersList";

//custom hooks
import { useTeams } from "../hooks/useTeams";
import useUser from "../hooks/useUser";

export default function TeamMembersPanel({ openAddMemberPanel }) {
  const { data: users } = useUser();
  const [membersList, setMemersList] = useState();

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

  const removeMember = (memberId) => {
    if (membersList && !membersList[0]?.members) return;

    const newList = membersList[0].members?.filter((id) => id !== memberId);
    const newObj = [{ ...membersList[0], members: [...newList] }];
    setMemersList(newObj);
  };

  useEffect(() => {
    setMemersList(teams);
  }, [teams]);

  if (teamsError) return null;

  if (teamsIsloading) return <div>loading...</div>;

  return (
    <div>
      <div className="bg-gray-100 w-full px-8 py-5 my-6">
        <PeopleAltOutlinedIcon className="mr-5 text-secandary" />
        <span className="text-primary">
          {" "}
          {membersList?.length ? membersList[0].members?.length : "..."} members
        </span>
        <button
          className="float-right text-secandary"
          onClick={() => openAddMemberPanel()}
        >
          <PersonAddAltIcon />
        </button>
      </div>
      <ul>
        {membersList &&
          membersList[0]?.members?.map((memberId, index) => (
            <MembersList
              key={memberId + index}
              member={getMemberInfo(memberId)}
              onEditMode={false}
              removeMember={() => removeMember(memberId)}
            />
          ))}
      </ul>
    </div>
  );
}

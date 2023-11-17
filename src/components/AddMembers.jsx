import React, { useState } from "react";
import TeamIconAndName from "./TeamIconAndName";
import MembersList from "./MembersList";
import useUser from "../hooks/useUser";

export default function AddMembers() {
    
  const [searchterm, setSearchTerm] = useState("");
  const [newMembers, setNewmembers] = useState([]);

  const { data: users, error, isLoading } = useUser();

  const filteredUsers =
    searchterm.length >= 1
      ? users.filter((user) =>
          user.name.toLocaleLowerCase().includes(searchterm.toLocaleLowerCase())
        )
      : users;

  const addNewMember = (newMember) => {
    setNewmembers([...newMembers, newMember]);
    setSearchTerm("");
  };

  const alreadyAdded = (user) => {
    return newMembers.some((item) => item.id === user.id);
  };

  if (error) return null;

  if (isLoading) return <div>loading...</div>;

  return (
    <div className="w-full flex flex-col">
      <TeamIconAndName name={users.name} />
      <p className="text-secandary w-full px-6 mb-6">
        Add Members <span className="text-xs ml-2">6 / 13</span>
      </p>
      <div className="px-2 flex gap-x-4 gap-y-2 flex-wrap border-b border-gray-300 pb-2 mb-2">
        {newMembers.map((user, index) => (
          <div
            className="flex items-center rounded-full bg-gray-100 pr-2 max-w-[148px]"
            key={user + index}
          >
            <div className="rounded-full bg-secandary-200 min-w-[32px] w-8 h-8"></div>
            <p className="truncate text-xs text-primary ml-2"> {user.name}</p>
          </div>
        ))}
        <input
          className="inline"
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchterm}
          placeholder="Enter a name to filter..."
        />
      </div>
      <ul className="overflow-auto p-0">
        {users &&
          filteredUsers.map((user, index) => (
            <MembersList
              disabled={alreadyAdded(user)}
              member={user}
              onEditMode={true}
              key={user + index}
              addToMembers={(newMember) => addNewMember(newMember)}
            />
          ))}
      </ul>
    </div>
  );
}

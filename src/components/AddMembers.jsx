import React, { useState } from "react";
import TeamIconAndName from "./TeamIconAndName";
import MembersList from "./MembersList";

export default function AddMembers() {
  const [searchterm, setSearchTerm] = useState("");
  const users = [
    {
      name: "Bessie Cooper",
      roll: "Agent",
    },
    {
      name: "Cameron Williamson",
      roll: "Agent",
    },
    {
      name: "Cameron Ray",
      roll: "Agent",
    },
    {
      name: "Cameron Marina",
      roll: "Agent",
    },
  ];

  const members = [];

  const filteredUsers =
    searchterm.length >= 1
      ? users.filter((user) =>
          user.name
            .toLocaleLowerCase()
            .startsWith(searchterm.toLocaleLowerCase())
        )
      : users;

  return (
    <div className="w-full">
      <TeamIconAndName />
      <p className="text-secandary w-full px-6 mb-6">
        Add Members <span className="text-xs ml-2">6 / 13</span>
      </p>
      <div className="px-2 flex gap-x-4 gap-y-2 flex-wrap border-b border-gray-300 pb-2 mb-2">
        {members.map((user, index) => (
          <div
            className="flex items-center rounded-full bg-gray-100 max-w-fit text-xs text-primary pr-2"
            key={user + index}
          >
            <div className="rounded-full bg-gray-200 mr-2 w-8 h-8"></div>
            {user.name}
          </div>
        ))}
        <input
          className="inline"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <ul>
        {filteredUsers.map((user, index) => (
          <MembersList
            member={user}
            onEditMode={true}
            key={user + index}
            addToMembers={() => alert('added')}
          />
        ))}
      </ul>
    </div>
  );
}

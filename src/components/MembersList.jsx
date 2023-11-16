import React from "react";

export default function MembersList() {
  const members = [
    {
      name: "Bessie Cooper",
      roll: "Agent",
    },
    {
      name: "Cameron Williamson",
      roll: "Agent",
    },
  ];

  return (
    <ul className="px-4">
      {members.map((member) => (
        <li className="flex mb-3">
          <div className="rounded-full bg-gray-200 w-[44px] h-[44px]"></div>
          <div className="ml-4">
            <p className="text-primary">{member.name}</p>
            <span className="text-disabled">{member.roll}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

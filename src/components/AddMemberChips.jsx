import React from "react";

export default function AddMemberChips({user}) {
  return (
    <div className="flex items-center rounded-full bg-gray-100 pr-2 max-w-[148px]">
      <div className="rounded-full bg-secandary-200 min-w-[32px] w-8 h-8"></div>
      <p className="truncate text-xs text-primary ml-2"> {user.name}</p>
    </div>
  );
}

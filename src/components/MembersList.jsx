import React, { useState } from "react";

//components
import CheckIcon from "@mui/icons-material/Check";

export default function MembersList({
  member,
  onEditMode,
  addToMembers,
  disabled,
  removeMember,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={`flex items-center mb-3 px-4 py-0.5 hover:bg-gray-100 ${
        disabled ? "opacity-60" : ""
      } ${onEditMode && !disabled ? "cursor-pointer" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onEditMode && !disabled ? () => addToMembers(member) : undefined}
    >
      <div className="rounded-full bg-secandary-200 w-[44px] h-[44px]"></div>
      <div className="flex flex-col ml-4">
        <p className="text-primary mb-1">{member.name}</p>
        <span className="text-disabled">{member.role}</span>
      </div>
      {isHovered && !onEditMode && (
        <button
          className="text-anhancer ml-auto"
          onClick={() => removeMember()}
        >
          Remove
        </button>
      )}
      {disabled && <CheckIcon className="text-anhancer ml-auto" />}
    </li>
  );
}

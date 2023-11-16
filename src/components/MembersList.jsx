import React, { useState } from "react";

export default function MembersList({ member, onEditMode, addToMembers }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={`flex items-center mb-3 px-4 py-0.5 hover:bg-gray-100 ${onEditMode ? 'cursor-pointer': ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onEditMode ? addToMembers : undefined}
    >
      <div className="rounded-full bg-gray-200 w-[44px] h-[44px]"></div>
      <div className="flex flex-col ml-4">
        <p className="text-primary mb-1">{member.name}</p>
        <span className="text-disabled">{member.roll}</span>
      </div>
      {isHovered && !onEditMode && (
        <button className="text-anhancer ml-auto">Remove</button>
      )}
    </li>
  );
}

import React from "react";

export default function TeamIconAndName() {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="w-[90px] h-[90px] p-2 border border-[#FEA150] rounded-full">
        <div className="bg-gray-200 rounded-full w-full h-full"></div>
      </div>
      <h2 className="text-primary mt-2.5">Team Name</h2>
    </div>
  );
}

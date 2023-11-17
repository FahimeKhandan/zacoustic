import React from "react";

//custom hooks
import {useTeams} from "../hooks/useTeams";

export default function TeamIconAndName() {
  const { data, error, isLoading } = useTeams(1);

  if (error) return null;

  if (isLoading) return <div>loading...</div>;

  return (
    <div className="flex flex-col items-center mb-6">
      <div className="w-[90px] h-[90px] p-2 border border-[#FEA150] rounded-full">
        <div className="bg-gray-200 rounded-full w-full h-full"></div>
      </div>
      <h2 className="text-primary mt-2.5">{data[0].name}</h2>
    </div>
  );
}

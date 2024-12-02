"use client";
import { useState } from "react";
import { FilterIcon, GroupIcon, SortDescIcon } from "lucide-react";
import Board from "./Board";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("board");

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      component: "Coming soon!",
    },
    {
      id: "board",
      label: "Board",
      component: <Board />,
    },
    {
        id: "list",
        label: "List",
        component: "List",
      },
      {
        id: "table",
        label: "Table",
        component: "Table",
      },
      {
        id: "timeline",
        label: "Timeline",
        component: "Timeline",
      },
  ];
  return (
    <div className="w-full mx-auto pt-4">
      <div className="flex flex-row justify-between items-center border-b">
        <div className="flex md:px-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
              px-4 py-2 font-medium text-sm transition-colors duration-200
              ${
                activeTab === tab.id
                  ? "text-gray-500  border-b-2 border-gray-500 -mb-px"
                  : "text-black"
              }
            `}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="px-6 hidden md:flex flex-row gap-x-4">
          <button className="flex flex-row gap-x-1 justify-center items-center  text-xs">
           <FilterIcon className="h-3 w-3" />
           Filter
          </button>
          <button className="flex flex-row gap-x-1 justify-center items-center text-xs ">
          <GroupIcon className="w-3 h-3" />
           Group by
          </button>
          <button className="flex flex-row gap-x-1 justify-center items-center  text-xs">
           <SortDescIcon className="w-3 h-3" />
           Sort
          </button>
        </div>
      </div>

      <div className="m-6">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  );
};

export default Tab;
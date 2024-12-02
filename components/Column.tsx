import React from "react";
import Task from "./Task";
const tasks = [
  {
    id: "0",
    title: "Our first task",
    description: "Some description",
    status: "DONE",
  },
  {
    id: "1",
    title: "Our second task",
    description: "Some description",
    status: "IN_PROGRESS",
  },
  {
    id: "2",
    title: "Our third task",
    description: "Some description",
    status: "TODO",
  },
  {
    id: "3",
    title: "Our third task",
    description: "Some description",
    status: "TODO",
  },
  {
    id: "4",
    title: "Our third task",
    description: "Some description",
    status: "TODO",
  },
  {
    id: "5",
    title: "Our second task",
    description: "Some description",
    status: "IN_PROGRESS",
  },
];

const Column = ({ title, status }: { title: string; status: string }) => {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div className="h-[600px] flex-1 bg-gray-100 rounded-lg">
      <div className="flex flex-row justify-start items-center gap-x-1 px-3 py-3">
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            status === "TODO"
              ? "bg-blue-600"
              : status === "IN_PROGRESS"
              ? "bg-yellow-500"
              : status === "DONE"
              ? "bg-green-600"
              : "bg-gray-300"
          }`}
        ></span>
        <h2>{title}</h2>
      </div>
      <div className="my-3 h-full w-full flex-1 rounded-xl px-3">
        <div className="flex flex-col gap-4 ">
          {filteredTasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Column;

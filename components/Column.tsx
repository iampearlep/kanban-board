import React, {useEffect} from "react";
import Task from "./Task";
import { useTaskStore, Status } from "@/lib/store";
const Column = ({ title, status }: { title: string; status: Status }) => {
  const tasks = useTaskStore((state) => state.tasks)

  const filteredTasks = tasks.filter((task) => task.status === status)

  const updateTask = useTaskStore(state => state.updateTask)
  const draggedTask = useTaskStore(state => state.draggedTask)
  const dragTask = useTaskStore(state => state.dragTask)

  const handleDrop = (e:React.DragEvent<HTMLDivElement>) => {
    if (!draggedTask) return;
    updateTask(draggedTask, status)
  }

  useEffect(() => {
    useTaskStore.persist.rehydrate()
  }, [])

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
      <div className="my-3 h-full w-full flex-1 rounded-xl px-3" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-4 ">
          {filteredTasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
           {filteredTasks.length === 0 && status === "TODO" && (
            <div className="my-8 text-center text-xs text-gray-500">
              <p>Create a new task</p>
            </div>
          )}
          {tasks.length && filteredTasks.length === 0 && status !== "TODO" ? (
            <div className="my-8 text-center text-xs text-gray-500">
              <p>Drag your tasks here</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Column;

import React from "react";

interface Task {
  name: string;
  discription: string;
  status: boolean;
}

interface TasksProps {
  task: Task;
  index: Number;
}

function Tasks({ task, index }: TasksProps) {
  return (
    <div className="flex justify-evenly mt-6">
      <h2>{index.toString()}</h2>
      <h2>{task.name}</h2>
      <p className={task.status ? "line-through" : ""}>{task.discription}</p>
      <button
        className={
          task.status
            ? "border-2 rounded p-2 border-red-500"
            : "border-2 rounded p-2 border-green-500"
        }
      >
        {task.status ? "Pending" : "Completed"}
      </button>
      <button className="border-2 rounded p-2 border-red-500"> Remove</button>
    </div>
  );
}

export default Tasks;

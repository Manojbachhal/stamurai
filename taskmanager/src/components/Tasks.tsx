"use client";
import React from "react";

interface Task {
  name: string;
  discription: string;
  status: boolean;
}

interface TasksProps {
  task: Task;
  index: number;
  update: (index: number) => void;
  deleteTask: (index: number) => void;
}

function Tasks({ task, index, update, deleteTask }: TasksProps) {
  const handleUpdate = () => {
    update(index);
  };
  const handleDelete = () => {
    deleteTask(index);
  };
  return (
    <>
      <td>{index}</td>
      <td className={task.status ? "line-through" : ""}>{task.name}</td>
      <td>
        <p className={task.status ? "line-through" : ""}>{task.discription}</p>
      </td>
      <td>
        <button
          className={
            !task.status
              ? "border-2 rounded p-2 bg-red-400 w-32 border-red-500"
              : "border-2 rounded p-2 bg-green-500 w-32 border-green-500"
          }
          onClick={handleUpdate}
        >
          {!task.status ? "Pending" : "Completed"}
        </button>
      </td>
      <td>
        <button
          className="border-2 rounded p-2 bg-red-400 border-red-500"
          onClick={handleDelete}
        >
          Remove
        </button>
      </td>
    </>
  );
}

export default Tasks;

"use client";
import React from "react";

interface Task {
  name: string;
  description: string;
  status: boolean;
  createdAt: string;
  completedAt: string;
}

interface TasksProps {
  task: Task;
  index: number;
  update: (index: number) => void;
  deleteTask: (index: number) => void;
  handlePopup: (data: Task) => void;
}

function Tasks({ task, index, update, deleteTask, handlePopup }: TasksProps) {
  const handleUpdate = () => {
    update(index);
  };
  const handleDelete = () => {
    deleteTask(index);
  };
  const handleViewClick = () => {
    handlePopup(task);
    const popupElement = document.getElementById("test");
    if (popupElement) {
      popupElement.classList.toggle("d-block");
    }
  };
  return (
    <>
      <td>{index}</td>
      <td className={task.status ? "line-through" : ""}>{task.name}</td>
      <td>
        <p className={task.status ? "line-through" : ""}>{task.description}</p>
      </td>
      <td>
        <p
          className={
            task.status
              ? "w-20 font-bold m-auto text-green-500"
              : "w-20 font-bold text-red-500 m-auto"
          }
        >
          {task.status ? "Completed" : "Pending"}
        </p>
      </td>
      <td>
        <button
          className="border-2 rounded p-2 bg-green-500 w-20 border-green-500 text-white"
          onClick={handleViewClick}
        >
          View
        </button>
      </td>
      <td>
        <button
          className={
            !task.status
              ? "border-2 rounded p-2 bg-red-400 w-32 border-red-500 text-white"
              : "border-2 rounded p-2 bg-green-500 w-32 border-green-500 text-white"
          }
          onClick={handleUpdate}
        >
          {!task.status ? "Pending" : "Completed"}
        </button>
      </td>
      <td>
        <button
          className="border-2 rounded p-2 bg-red-400 border-red-500 text-white"
          onClick={handleDelete}
        >
          Remove
        </button>
      </td>
    </>
  );
}

export default Tasks;

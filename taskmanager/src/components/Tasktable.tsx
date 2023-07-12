import React from "react";
import Tasks from "./Tasks";

interface Task {
  name: string;
  description: string;
  status: boolean;
  createdAt: string;
  completedAt: string;
}

interface TasksProps {
  tasks: Task[];
  update: (index: number) => void;
  deleteTask: (index: number) => void;
  handlePopup: (data: Task) => void;
}
function Tasktable({ tasks, update, deleteTask, handlePopup }: TasksProps) {
  return (
    <div
      className="overflow-x-scroll p- mt-10 w-11/12 m-auto text-center"
      style={{ border: "2px solid #80808040", borderRadius: "5px" }}
    >
      <table className="min-w-full">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>View Task Details</th>
            <th>Toggle Status</th>
            <th>Delete Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index: number) => {
            return (
              <tr key={index}>
                <Tasks
                  task={task}
                  index={index}
                  update={update}
                  deleteTask={deleteTask}
                  handlePopup={handlePopup}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Tasktable;

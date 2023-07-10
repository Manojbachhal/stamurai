"use client";
import { observer } from "mobx-react-lite";
import { DataStore } from "@/store/DataStore";
import { Task } from "@/store/DataStore";
import { useEffect, useState } from "react";
import Tasks from "@/components/Tasks";

export default observer(function Home() {
  const [taskData, setData] = useState<Task>({
    name: "",
    discription: "",
    status: false,
  });
  const [tasks, setTasks] = useState<Task[]>([]);
  const store = new DataStore();

  useEffect(() => {
    setTasks(store.get());
  }, []);
  const updateTask = (index: number) => {
    store.update(index);
    setTasks(store.get());
  };

  const deleteTask = (index: number) => {
    store.delete(index);
    setTasks(store.get());
  };

  const addTask = (taskData: Task) => {
    store.set(taskData);
    setTasks(store.get());
  };

  const handleInputTask = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({ ...taskData, [name]: value });
    console.log(taskData);
  };

  return (
    <>
      <h1 className="text-4xl font-sans p-3 mb-5">Task Management</h1>
      <div className="w-4/5 font-sans m-auto border-2 rounded border-black-400">
        <h1 className="text-4xl font-sans text-center p-3 mb-5">
          Task Management
        </h1>
        <div className="flex justify-between border-b-2 p-5 border-black-400">
          <h2 className="text-xl ">Task Name</h2>
          <input
            type="text"
            className="border-2 rounded p-2 border-gray-300"
            placeholder="Enter Task Name"
            name="name"
            onChange={handleInputTask}
          />
        </div>
        <div className="flex justify-between border-b-2 p-5 border-black-400">
          <h2 className="text-xl">Task Discription</h2>
          <textarea
            name="discription"
            id="discription"
            cols={40}
            rows={4}
            className="border-2 p-2 border-gray-300"
            placeholder="Enter Task Details"
            onChange={handleInputTask}
          ></textarea>
        </div>
        {/* <div className="flex justify-between p-5 ">
          <h2 className="text-xl">Task Status</h2>
          <input
            type="text"
            className="border-2 p-2 border-gray-300"
            placeholder="Enter Task Status"
            name="status"
            onChange={handleInputTask}
          />
        </div> */}
        <div className="text-center p-5">
          <button
            className="border-2 rounded p-2 w-36 border-green-500 bg-green-600 hover:bg-green-400 font-font-semibold text-white tracking-wider"
            onClick={() => addTask(taskData)}
          >
            Add Task
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-mono p-4 text-center">Available Tasks</h1>
        <table className="table-auto w-4/5 m-auto text-center" key="title">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
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
                    update={updateTask}
                    deleteTask={deleteTask}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
});

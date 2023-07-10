"use client";
import { observer } from "mobx-react-lite";
import { DataStore } from "@/store/DataStore";
import { Task } from "@/store/DataStore";
import { useEffect } from "react";
import Tasks from "@/components/Tasks";

export default observer(function Home() {
  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify([obj]));
  });
  const store: Task[] = new DataStore().get();

  let obj: Task = {
    name: "test",
    discription: "test",
    status: true,
  };
  return (
    <>
      <h1 className="text-4xl font-mono p-3">Task Management</h1>
      <div className="w-3/4 m-auto mt-4 mb-4 border-2 rounded p-7 border-black-400">
        <div className="flex justify-between border-b-2 p-10 border-black-400">
          <h2 className="font-bold text-xl">Task Name</h2>
          <input
            type="text"
            className="border-2 rounded p-2 border-green-300"
            placeholder="Enter Task Name"
          />
        </div>
        <div className="flex justify-between border-b-2 p-10 border-black-400">
          <h2 className="font-bold text-xl">Task Discription</h2>
          <textarea
            name="discription"
            id="discription"
            cols={50}
            rows={4}
            className="border-2 p-2 border-green-300"
            placeholder="Enter Task Details"
          ></textarea>
        </div>
        <div className="flex justify-between p-10 ">
          <h2 className="font-bold text-xl">Task Status</h2>
          <input
            type="text"
            className="border-2 p-2 border-green-300"
            placeholder="Enter Task Status"
          />
        </div>
        <div className="text-center p-10 ">
          <button className="border-2 rounded-full p-2 w-40 border-gray-500 bg-green-600 hover:bg-green-400 font-bold ">
            Submit
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-mono p-4 text-center">Available Tasks</h1>
        <div className="flex justify-evenly mt-4" key="title">
          <h1>Serial No.</h1>
          <h1>Title</h1>
          <h1>Description</h1>
          <h1>Status</h1>
          <h1>Delete Task</h1>
        </div>
        {store.map((task, index: Number) => {
          return <Tasks task={task} index={index} key={index.toString()} />;
        })}
      </div>
    </>
  );
});

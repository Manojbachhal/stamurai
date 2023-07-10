import { observable, makeObservable } from "mobx";
import { useStaticRendering } from "mobx-react-lite";

const isServer = typeof window === "undefined";
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer);

export interface Task {
  name: string;
  discription: string;
  status: boolean;
}

export class DataStore {
  Tasks: Task[];
  constructor() {
    try {
      const storedTasks = localStorage.getItem("Tasks") || "[]";
      this.Tasks = JSON.parse(storedTasks);
    } catch (error) {
      this.Tasks = [];
    }
    makeObservable(this, {
      Tasks: observable,
    });
  }
  get() {
    return this.Tasks;
  }
  set(task: Task) {
    this.Tasks.push(task);
  }
}

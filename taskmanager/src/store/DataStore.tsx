import { observable, action, makeObservable } from "mobx";
import { useStaticRendering } from "mobx-react-lite";

const isServer = typeof window === "undefined";
useStaticRendering(isServer);

export interface Task {
  name: string;
  description: string;
  status: boolean;
  createdAt: string;
  completedAt: string;
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
      set: action,
      update: action,
    });
  }
  get() {
    return this.Tasks;
  }
  set(task: Task) {
    this.Tasks.push(task);
    this.persistTasks();
  }
  update(index: number) {
    this.Tasks[index].status = !this.Tasks[index].status;
    if (this.Tasks[index].status) {
      this.Tasks[index].completedAt = new Date().toLocaleString();
    } else {
      this.Tasks[index].completedAt = "";
    }

    this.persistTasks();
  }
  delete(index: number) {
    this.Tasks = this.Tasks.filter((ele, i) => i != index);
    this.persistTasks();
  }

  private persistTasks() {
    const serializedTasks = JSON.stringify(this.Tasks);
    localStorage.setItem("Tasks", serializedTasks);
  }
}

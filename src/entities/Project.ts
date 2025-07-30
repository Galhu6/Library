import { BaseEntity } from "../core/BaseEntity";
import { Task } from "./Task";
import { TaskStatus } from "../interfaces/types";

export class Project extends BaseEntity{
    name: string;
    tasks: Task[] = [];
    constructor(name: string) {
        super();
        this.name = name;
    }

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    removeTask(taskId: string): void {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
    }

    listOpenTasks(): Task[] {
        return this.tasks.filter(t => t.status !== TaskStatus.COMPLETED)
    }
}
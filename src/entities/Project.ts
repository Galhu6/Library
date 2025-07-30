import { BaseEntity } from "../core/BaseEntity";
import { Task } from "./Task";
import { TaskStatus } from "../interfaces/types";

/**
 * Represents a collection of tasks grouped under a single project name.
 */
export class Project extends BaseEntity{
    /** Project name */
    name: string;
    /** Tasks belonging to the project */
    tasks: Task[] = [];

    /**
     * Create a new project
     * @param name Name of the project
     */
    constructor(name: string) {
        super();
        this.name = name;
    }

    /** Add a task to the project
     * @param task Class Task
     */
    addTask(task: Task): void {
        this.tasks.push(task);
    }

    /** Remove a task by identifier
     * @param taskId UUID of the task
     */

    removeTask(taskId: string): void {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
    }

    /**
     * List all tasks that are not completed.
     */
    listOpenTasks(): Task[] {
        return this.tasks.filter(t => t.status !== TaskStatus.COMPLETED);
    }
}
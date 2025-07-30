import { BaseEntity } from "../core/BaseEntity";
import { ITask } from "../interfaces/ITask";
import { TaskStatus, TaskPriority } from "../interfaces/types";
import { isPast } from "../utils/dateUtils";


/**
 * Represents a single user task with metadata like status, priority and due date.
 * provides helpers for marking completion and checking if the task is overdue.
 */
export class Task extends BaseEntity implements ITask{
    title: string;
    description?: string;
    dueDate?: Date;
    status: TaskStatus;
    priority?: TaskPriority;
    tags?: string[];
    repeat?: "daily" | "weekly" | "monthly" | "yearly" | "custom";

    /**
     * Create a new task instance
     * @param data A partion or complete ITask obj
     */
    constructor(data: Partial<ITask>){
        super();
        this.title = data.title!;
        this.description = data.description;
        this.dueDate = data.dueDate;
        this.status = data.status ?? TaskStatus.PENDING;
        this.priority = data.priority;
        this.tags = data.tags ?? [];
        this.repeat = data.repeat;
    }

    /** Cancel the task. */
    cancel(): void {
        this.status = TaskStatus.CANCELLED
    }

    /**
     * Change the due date of the task.
     * @param date New due date
     */
    reschedule(date: Date): void {
        this.dueDate = date;
    }

    /**
     * Update the task's title and description.
     * @param title string, might not change when updated
     * @param description not mendatory, string
     */
    updateDetails(title: string, description?: string): void {
        this.title = title;
        if(!description) return;
        this.description = description;
        }

    /** Persist the task to storage */
    save(): void {
        throw new Error("Method not implemented.");
    }

    /** Remove the task from storage */
    delete(): void {
        throw new Error("Method not implemented.");
    }

    /** Mark the task as completed */
    markComplete(): void {
        this.status = TaskStatus.COMPLETED;
        this.touch();
    }

    /**
     * Determine wether the task's due date has passed.
     * @returns true if over due and false if still in deadline
     */
    isOverdue(): boolean{
        return this.dueDate ? isPast(this.dueDate) : false;
    }
}
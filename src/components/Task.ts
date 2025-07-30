import { BaseEntity } from "../core/BaseEntity";
import { ITask } from "../interfaces/ITask";
import { TaskStatus, TaskPriority } from "../interfaces/types";
import { isPast } from "../utils/dateUtils";

export class Task extends BaseEntity implements ITask{
    title: string;
    description?: string;
    dueDate?: Date;
    status: TaskStatus;
    priority?: TaskPriority;
    tags?: string[];
    repeat?: "daily" | "weekly" | "monthly" | "yearly" | "custome";

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
    
    cancel(): void {
        this.status = TaskStatus.CANCELLED
    }

    reschedule(date: Date): void {
        this.dueDate = date;
    }

    updateDetails(title: string, description?: string): void {
        this.title = title;
        if(!description) return;
        this.description = description;
        }

    save(): void {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }

    markComplete(): void {
        this.status = TaskStatus.COMPLETED;
        this.touch();
    }

    isOverdue(): boolean{
        return this.dueDate ? isPast(this.dueDate) : false;
    }
}
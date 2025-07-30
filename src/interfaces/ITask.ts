import { Identifiable } from "./Identifiable";
import { Persistable } from "./Persistable";
import { TaskPriority, TaskStatus } from "./types";

export interface ITask extends Identifiable, Persistable {
    title: string;
    description?: string;
    dueDate?: Date;
    priority?: TaskPriority;
    status: TaskStatus;
    tags?: string[]
    repeat?: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'custom'

    markComplete(): void;
    cancel(): void;
    reschedule(date: Date): void;
    updateDetails(title: string, description?: string): void;
    isOverdue(): boolean
} 
import { Identifiable } from "./Identifiable";
import { Persistable } from "./Persistable";
import { TaskPriority, TaskStatus } from "./types";

/**
 * Shape of a task object used throughout the library.
 */
export interface ITask extends Identifiable, Persistable {
    /** Short title of the task */
    title: string;
    /** Optional detailed description */
    description?: string;
    /** Optional due date */
    dueDate?: Date;
    /** Priority level */
    priority?: TaskPriority;
    /** Current task status */
    status: TaskStatus;
    /** Associated tags */
    tags?: string[];
    /** Repetition pattern */
    repeat?: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'custom'

    markComplete(): void;
    cancel(): void;
    reschedule(date: Date): void;
    updateDetails(title: string, description?: string): void;
    isOverdue(): boolean;
} 
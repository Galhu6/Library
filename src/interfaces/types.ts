/**
 * Priority levels available for tasks.
 */
export enum TaskPriority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical",
}

/**
 * Allowed statuses for a task instance.
 */
export enum TaskStatus {
    PENDING = "pending",
    IN_PROGRESS = "in_progress",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
    FAILED = "failed",
}
import {ITask} from '../interfaces/ITask';
import { TaskPriority, TaskStatus } from '../interfaces/types';
import {generateUUID} from '../utils/generateUUID'
describe('ITask interface', () => {
    it('should allow valid task structure', () => {
        const task: ITask = {
            title: "test task",
            priority: TaskPriority.MEDIUM,
            status: TaskStatus.PENDING,
            id: generateUUID(),

            markComplete(): void { },
            cancel(): void { },
            reschedule(date: Date): void { },
            updateDetails(title: string, description?: string): void { },

            save: function (): void {
                throw new Error('Function not implemented.');
            },
            delete: function (): void {
                throw new Error('Function not implemented.');
            },
            isOverdue: function (): boolean {
                throw new Error('Function not implemented.');
            }
        };
        expect(task.title).toBe('test task');
        expect(task.status).toBe(TaskStatus.PENDING);
    });
});
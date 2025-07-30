import {Task} from '../src/entities/Task';
import { TaskStatus } from '../src/interfaces/types';

test('creates a task with default status "pending"', () => {
    const task = new Task({ title: 'Buy milk', status: undefined});
    expect(task.status).toBe(TaskStatus.PENDING)
});

test('marK test as done', () => {
    const task = new Task({ title: 'Do homework', status: TaskStatus.COMPLETED });
    task.markComplete();
    expect(task.status).toBe(TaskStatus.COMPLETED);
});

test('detect overdue task', () => {
    const yesterday = new Date(Date.now() - 86400000);
    const task = new Task({ title: 'Call dentist', dueDate: yesterday, status: TaskStatus.PENDING})
    expect(task.isOverdue()).toBe(true);
});

test('task with no due date is not overdue', () => {
    const task = new Task({title: ' No deadline', status: TaskStatus.PENDING});
    expect(task.isOverdue()).toBe(false);
});
test('supports repeat values', () => {
    const task = new Task({ title: 'Water plants', status: TaskStatus.PENDING, repeat: 'weekly'});
    expect(task.repeat).toBe('weekly');
});

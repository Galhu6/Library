export function isPast(date: Date): boolean {
    return date.getTime() < new Date().getTime();
}
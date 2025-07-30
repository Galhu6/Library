/**
 * Determine if a given date is in the past.
 * @param date Date to compare
 * @returns True if the date is earlier than now
 */
export function isPast(date: Date): boolean {
    return date.getTime() < new Date().getTime();
}
/**
 * Generate a random UUID string.
 */
export function generateUUID(): string {
    return crypto.randomUUID();
}
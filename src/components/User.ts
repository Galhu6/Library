import crypto from 'crypto';

/**
 * Represents a basic application user with password management helpers.
 */
export class User {
    /** Display name */
    public name: string;
    /** Email address */
    public email: string;
    /** Stored password hash */
    private passwordHash = '';

    /**
     * Create a new user instance.
     * @param options Initial data for the user
     */
    constructor(options: { name: string; email: string; passwordHash?: string }) {
        this.name = options.name;
        this.email = options.email;
        if (options.passwordHash) {
            this.passwordHash = options.passwordHash;
        }
    }

    /**
     * Set the user's password.
     * @param password Plaintext password
     */
    setPassword(password: string): void {
        this.passwordHash = crypto
            .createHash('sha256')
            .update(password)
            .digest('hex');
    }

    /**
     * Validate a password against the stored hash.
     * @param password Plaintext password
     * @returns Whether the password is correct
     */
    validatePassword(password: string): boolean {
        const hash = crypto.createHash('sha256').update(password).digest('hex');
        return hash === this.passwordHash;
    }
}
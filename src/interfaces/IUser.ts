import { Identifiable } from "./Identifiable";
import { Persistable } from "./Persistable";

/**
 * Interface describing the required properties and actions of a user entity.
 */
export interface IUser extends Identifiable, Persistable{
    /** Unique username */
    username: string;
    /** Email address */
    email: string;
    /** Stored password hash */
    passwordHash: string;
    /** Optional full name */
    fullName?: string;
    /** Whether the user is active */
    isActive: boolean;
    /** Roles assigned to the user */
    roles: string[];

    activate(): void;
    deactivate(): void;
    updateProfile(fullName?: string, email?: string): void;
    changePassword(newPasswordHash: string): void;

}
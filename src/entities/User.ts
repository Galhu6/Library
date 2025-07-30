import { BaseEntity } from "../core/BaseEntity";
import { IUser } from "../interfaces/IUser";

/**
 * Domain user entity used in persistence examples.
 */
export class User extends BaseEntity implements IUser {
    /** Chosen username */
    username: string;
    /** Email adress */
    email: string;
    /** Hashed password string */
    passwordHash: string;
    /** Optional display name */
    fullName?: string;
    /** Wheter the user is active */
    isActive: boolean;
    /** Roles assigned to the user */
    roles: string[];

    constructor(data: Omit<IUser, 'id' | 'activate' | 'deactivate' | 'updateProfile' | 'changePassword' | 'save' | 'delete'> ){
        super();
        this.username = data.username;
        this.email = data.email;
        this.passwordHash = data.passwordHash;
        this.fullName = data.fullName;
        this.isActive = data.isActive ?? false;
        this.roles = data.roles ?? [];
    }
    /** Mark the user as active */
    activate(): void{
        this.isActive = true;
    }

    /** Mark the user as inactive */
    deactivate(): void {
        this.isActive = false;
    }

    /**
     * Update profile information.
     */
    updateProfile(fullName?: string, email?: string): void {
        if (fullName) this.fullName = fullName;
        if (email) this.email = email;
    }

    /**
     * Change the stored password hash.
     */
    changePassword(newPasswordHash: string): void {
        this.passwordHash = newPasswordHash;
    }

    /** Persist the user to storage */
    save(): void {
        throw new Error('Method not implemented');
    }

    /** Remove the user from storage */
    delete(): void {
        throw new Error('Method not implemented');
    }
}
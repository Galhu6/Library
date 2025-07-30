import { BaseEntity } from "../core/BaseEntity";
import { IUser } from "../interfaces/IUser";

export class User extends BaseEntity implements IUser {
    username: string;
    email: string;
    passwordHash: string;
    fullName?: string;
    isActive: boolean;
    roles: string[];

    constructor(data: Omit<IUser, 'id' | 'active' | 'deactivate' | 'updateProfile' | 'changePassword' | 'save' | 'delete'> ){
        super();
        this.username = data.username;
        this.email = data.email;
        this.passwordHash = data.passwordHash;
        this.fullName = data.fullName;
        this.isActive = data.isActive ?? false;
        this.roles = data.roles ?? [];
    }

    activate(): void{
        this.isActive = true;
    }

    deactivate(): void {
        this.isActive = false;
    }

    updateProfile(fullName?: string, email?: string): void {
        if(fullName) this.fullName = fullName;
        if(email) this.email = email;
    }

    changePassword(newPasswordHash: string): void {
        this.passwordHash = newPasswordHash;
    }

    save(): void {
        throw new Error('Method not implemented')
    }
    
    delete(): void {
        throw new Error('Method not implemented')
    }
}
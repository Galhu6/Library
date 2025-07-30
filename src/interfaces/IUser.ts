import { Identifiable } from "./Identifiable";
import { Persistable } from "./Persistable";

export interface IUser extends Identifiable, Persistable{
    username: string;
    email: string;
    passwordHash: string;
    fullName?: string;
    isActive: boolean;
    roles: string[];

    activate(): void;
    deactivate(): void;
    updateProfile(fullName?: string, email?: string): void;
    changePassword(newPasswordHash: string): void;

}
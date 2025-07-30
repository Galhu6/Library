import { User } from "../entities/User";
import { hashPassword, comparePassword } from "../utils/encryption";
import { IUserManager } from "../interfaces/IUserManager";

/**
 * Simple in-Memory user manager for registration and login.
 */
export class UserManager implements IUserManager {
  private _users: User[] = [];

  /** Registered users */
  get users(): User[] {
    return this._users;
  }

  /**
   * Register a new user and store in memory.
   */
  async register(
    username: string,
    email: string,
    password: string,
    fullName?: string
  ): Promise<User> {
    const passwordHash = await hashPassword(password);
    const user = new User({
      username,
      email,
      passwordHash,
      fullName,
      isActive: true,
      roles: [],
    });
    this._users.push(user);
    return user;
  }

  /**
   * Attempt to login with credentials.
   * @returns the matching user if credentials are valid, otherwise undefined
   */
  async login(username: string, password: string): Promise<User | undefined> {
    const user = this._users.find((u) => u.username === username);
    if (!user) return undefined;
    const valid = await comparePassword(password, user.passwordHash);
    return valid ? user : undefined;
  }
}

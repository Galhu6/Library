import { User } from "../entities/User";

export interface IUserManager {
  users: User[];
  register(
    username: string,
    email: string,
    password: string,
    fullName?: string
  ): Promise<User>;
  login(username: string, password: string): Promise<User | undefined>;
}

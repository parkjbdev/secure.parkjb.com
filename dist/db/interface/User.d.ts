import mongoose from "mongoose";
export interface User extends mongoose.Document {
    username: string;
    password: string;
    admin: boolean;
    verify(password: string): boolean;
    assignAdmin(): Promise<any>;
}
export interface UserModel extends mongoose.Model<User> {
    createUser(username: string, password: string): Promise<Document>;
    findOneByUsername(username: string): Promise<User>;
}
//# sourceMappingURL=User.d.ts.map
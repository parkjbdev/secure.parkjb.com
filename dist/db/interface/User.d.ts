import mongoose from "mongoose";
interface UserFields extends mongoose.Document {
    userid: string;
    username: string;
    password: string;
    admin: boolean;
}
export interface User extends UserFields {
    verify(password: string): boolean;
    assignAdmin(): Promise<any>;
}
export interface UserModel extends mongoose.Model<User> {
    createUser(userid: string, username: string, password: string): Promise<Document>;
    findOneByUserId(userid: string): Promise<User>;
}
export {};
//# sourceMappingURL=User.d.ts.map
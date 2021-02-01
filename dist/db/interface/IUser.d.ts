import mongoose from "mongoose";
export interface IUser extends mongoose.Document {
    username: string;
    password: string;
    admin: boolean;
}
//# sourceMappingURL=User.d.ts.map
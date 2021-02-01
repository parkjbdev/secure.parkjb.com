import { Document } from 'mongoose';
export interface IUser extends Document {
    username: string;
    password: string;
    admin: boolean;
}
//# sourceMappingURL=user.d.ts.map
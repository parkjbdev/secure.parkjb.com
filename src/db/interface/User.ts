import mongoose from "mongoose";

export interface User extends mongoose.Document{
	// Properties
	username: string,
	password: string,
	admin: boolean,

	// Methods
	verify(password: string): boolean,
	assignAdmin(): Promise<any>
}

export interface UserModel extends mongoose.Model<User> {
	// statics
	createUser(username: string, password: string): Promise<Document>,
	findOneByUsername(username: string): Promise<User>
}
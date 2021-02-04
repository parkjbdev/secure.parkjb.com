import mongoose from "mongoose";

export interface User extends mongoose.Document{
	// Properties
	userid: string,
	username: string,
	password: string,
	admin: boolean,

	// Methods
	verify(password: string): boolean,
	assignAdmin(): Promise<any>
}

export interface UserModel extends mongoose.Model<User> {
	// statics
	createUser(userid: string, username: string, password: string): Promise<Document>,
	findOneByUserId(userid: string): Promise<User>
}
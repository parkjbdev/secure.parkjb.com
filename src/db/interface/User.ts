import mongoose from "mongoose";

interface UserFields extends mongoose.Document{
	// Fields
	userid: string,
	username: string,
	password: string,
	admin: boolean,
}

export interface User extends UserFields{
	// Methods
	verify(password: string): boolean,
	assignAdmin(): Promise<any>
}

export interface UserModel extends mongoose.Model<User> {
	// statics
	createUser(userid: string, username: string, password: string): Promise<Document>,
	findOneByUserId(userid: string): Promise<User>
}
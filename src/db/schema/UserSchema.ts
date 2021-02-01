import {Document, Schema} from 'mongoose'
import {User, UserModel} from '../interface/User'

export const UserSchema: Schema<User, UserModel> = new Schema({
	username: {type: String, unique: true},
	password: String,
	admin: {type: Boolean, default: false}
})

UserSchema.statics.createUser = function (username: string, password: string) {
	const user: Document<User> = new this({
		username, password, admin: false
	})
	return user.save()
}

UserSchema.statics.findOneByUsername = function (username: string): Promise<Document<User> | null> {
	return this.findOne({username}).exec()
}

UserSchema.methods.verify = function (password: string): boolean {
	return this.password === password
}

UserSchema.methods.assignAdmin = function () {
	this.admin = true
	return this.save()
}

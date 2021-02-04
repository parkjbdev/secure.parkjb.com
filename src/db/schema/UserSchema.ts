import {Document, Schema} from 'mongoose'
import {User, UserModel} from '../interface/User'
import config from '../../config/signConfig.json'
import crypto from 'crypto'

export const UserSchema: Schema<User, UserModel> = new Schema({
	userid: {type: String, unique: true},
	username: String,
	password: String,
	admin: {type: Boolean, default: false}
})

const encrypt = function (password: string) {
	return crypto.createHmac('sha1', config.secret)
		.update(password).digest('base64')
}

UserSchema.statics.createUser = function (userid: string, username: string, password: string) {
	const user: Document<User> = new this({
		userid, username, password: encrypt(password), admin: false
	})
	return user.save()
}

UserSchema.statics.findOneByUserId = function (userid: string): Promise<Document<User> | null> {
	return this.findOne({userid}).exec()
}

UserSchema.methods.verify = function (password: string): boolean {
	return this.password === encrypt(password)
}

UserSchema.methods.assignAdmin = function () {
	this.admin = true
	return this.save()
}

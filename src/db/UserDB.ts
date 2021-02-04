import mongoose from "mongoose";
import connection from '../config/dbConnection.json'
import {User, UserModel} from "./interface/User";
import {UserSchema} from "./schema/UserSchema";

const conn
	= mongoose.createConnection(connection.userDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

conn.once('open', () => {
	console.log(`connected to db server ${conn.host}`)
})
conn.on('error', () => {console.log('error')})

const model: UserModel = conn.model<User, UserModel>('User', UserSchema)

export default model
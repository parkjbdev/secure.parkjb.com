import express from "express";
import UserModel from "../db/UserDB";


const router = express.Router()

router.route('/')
	.post((req, res) => {
		const {username, password} = req.body
		const create = () => {
			return UserModel.createUser(username, password)
		}
		const respond = (user: any) => {
			res.json({
				message: 'registered successfully',
				user
			})
		}
		const onError = (error: Error) => {
			res.status(403).json({
				message: error.message
			})
		}
		UserModel.findOneByUsername(username)
			.then(create)
			.then(respond)
			.catch(onError)
	})

export default {router}
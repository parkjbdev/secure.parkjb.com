import express from "express";
import UserModel from "../db/UserDB";


const router = express.Router()

router.route('/')
	.post((req, res) => {
		const {userid, username, password} = req.body
		const create = () => UserModel.createUser(userid, username, password)
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
		UserModel.findOneByUserId(userid)
			.then(create)
			.then(respond)
			.catch(onError)
	})

export default {router}
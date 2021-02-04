import express from "express";
import jwt from 'jsonwebtoken';
import User from '../db/UserDB'
import config from '../../config/signConfig.json'

const router = express.Router()

router.route('/')
	.post((req, res) => {
		const {username, password} = req.body

		const check = (user: any): Promise<string> => {
			if (!user) throw new Error('login failed')
			if (!user.verify(password)) throw new Error('login failed')

			const payload = {
				_id: user._id,
				username: user.username,
				admin: user.admin,
			}
			const secret = config.secret
			const signOptions = config.signOptions

			return new Promise(((resolve, reject) => {
				jwt.sign(payload,
					secret,
					signOptions,
					(err, encoded) => {
						if (err) reject(err)
						if (encoded) resolve(encoded)
						else reject('encoded undefined')
					})
			}))
		}
		const respond = (token: string) => {
			res.json({
				message: 'logged in successfully',
				token
			})
		}
		const onError = (error: Error) => {
			res.status(403).json({
				message: error.message
			})
		}

		User.findOneByUsername(username)
			.then(check)
			.then(respond)
			.catch(onError)
	})

export default {router}
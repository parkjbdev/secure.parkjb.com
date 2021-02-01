import express from "express";
import jwt from 'jsonwebtoken'
import config from './signConfig.json'
const router = express.Router()

router.route('/')
	.get((req, res) => {
		const token: string = req.headers['x-access-token'] as string || req.query.token as string
		if(!token) return res.status(403).json({
			success: false,
			message: 'not logged in'
		})

		const p = new Promise((resolve, reject) => {
			jwt.verify(token, config.secret, ((err: any, decoded: any) => {
				if(err)	reject(err)
				resolve(decoded)
			}))
		})

		const respond = (token: any) => {
			res.json({
				success: true,
				info: token
			})
		}

		const onError = (error: Error) => {
			res.status(403).json({
				success: false,
				message: error.message
			})
		}

		p.then(respond).catch(onError)

		return
	})

export default {router}
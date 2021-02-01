import express from 'express'
import login from './router/login'
import register from "./router/register";

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', (req, res, next) => {
	console.log(req.ip,':', req.method, req.originalUrl)
	next()
})

app.use('/login', login.router)
app.use('/register', register.router)

app.listen(port, () => {
	console.log('listening')
})
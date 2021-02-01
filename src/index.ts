import express from 'express'
import login from './router/login'
import register from './router/register';
import check from './router/check'
import path from "path";

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', (req, res, next) => {
	console.log(req.ip,':', req.method, req.originalUrl)
	next()
})

app.use(express.static(path.join(__dirname, '../public')))

app.use('/login', login.router)
app.use('/register', register.router)
app.use('/check', check.router)

app.listen(port, () => {
	console.log('listening')
})
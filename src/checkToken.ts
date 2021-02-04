import jwt from 'jsonwebtoken'
import config from './config/signConfig.json'

const checkToken = (token: string) => {
	if(!token)	return false;
	try {
		jwt.verify(token, config.secret)
	} catch (err) {
		return false;
	}
	return true;
}

export default checkToken;
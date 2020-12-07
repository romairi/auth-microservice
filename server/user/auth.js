const jwt = require('jsonwebtoken');
const serverConfig = require('../config/serverConfig');
const UserModel = require('./model');


async function auth(req, res, next) {
    const {token} = req.cookies;
    let authenticated = false;
    let user = null;

    if (token) {
        try {
            const decodedToken = jwt.verify(token, serverConfig.jwt.secret);
            const userId = decodedToken._id;
            const userObj = await UserModel.findById(userId);
            if (userObj !== null) {
                const {password: userPass, ...useArgs} = userObj.toObject();
                user = useArgs;
                authenticated = true;
            } else {
                res.clearCookie('token');
            }

        } catch (err) {
            console.log(err);
        }
    }

    req.authenticated = authenticated;
    req.user = user;

    next();
}

module.exports = {auth};

import {serverConfig} from "../config/serverConfig";
import {StatusCodes} from 'http-status-codes';
import UserModel from './model';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import {
    TOKEN_EXPIRATION_TIME,
    COOKIE_EXPIRATION_TIME,
    ERROR_MESSAGE,
    ERROR_EMAIL_EXIST_MESSAGE
} from "./constants";


export async function login(req, res, next) {
    const {email, password} = req.body;
    try {
        const user = await UserModel.findOne({email});
        if (!user) {
            res.status(StatusCodes.BAD_REQUEST).json({type: 'error', message: ERROR_MESSAGE});
            return;
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(StatusCodes.BAD_REQUEST).json({type: 'error', message: ERROR_MESSAGE});
        }

        return loadUser(res, user);

    } catch (err) {
        next(err);
    }
}

export async function register(req, res, next) {
    const {username, email, password} = req.body;

    try {
        const foundUser = await UserModel.findOne({email});
        if (foundUser) {
            res.status(StatusCodes.BAD_REQUEST).json({type: 'error', message: ERROR_EMAIL_EXIST_MESSAGE});
            return;
        }
        // encryption of user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // creating a new user
        const newUser = new UserModel({username, password: hashedPassword, email});
        const user = await newUser.save();

        return loadUser(res, user);
    } catch (err) {
        next(err);
    }
}

export function logout(req, res, next) {
    if (req.authenticated) {
        res.clearCookie('token');
    }
    res.send('logout');
}

export function loadUser(res, user) {
    const token = jwt.sign({_id: user._id}, serverConfig.jwt.secret, {expiresIn: TOKEN_EXPIRATION_TIME});
    const {password: userPassword, ...userArgs} = user.toObject();

    res
        .cookie('token', token, {
            expires: new Date(Date.now() + COOKIE_EXPIRATION_TIME),
            secure: false,
            httpOnly: true
        })
        .json(userArgs);
    return res;
}

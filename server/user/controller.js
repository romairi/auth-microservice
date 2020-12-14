import {serverConfig} from "../config/serverConfig";
import {StatusCodes} from 'http-status-codes';
import UserModel from './model';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import {
    TOKEN_EXPIRATION_TIME,
    ERROR_MESSAGE,
    ERROR_EMAIL_EXIST_MESSAGE
} from "./constants";
import Logger from "../services/logger";

const logger = new Logger();


/**
 *
 * @param req - request
 * @param res - response
 * @param next
 * @returns {Promise<void>}
 */
export async function checkAuth(req, res, next) {
    let authenticated = false;
    let user = null;

    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.substring("Bearer ".length);

        if (token) {
            const decodedToken = jwt.verify(token, serverConfig.jwt.secret);
            const userId = decodedToken._id;
            const userObj = await UserModel.findById(userId);

            if (userObj !== null) {
                const {
                    password: userPass,
                    ...useArgs
                } = userObj.toObject();
                user = useArgs;
                authenticated = true;
            }
        }

    } catch (err) {
        logger.error(err);
    }

    res.json({
        authenticated,
        user
    });
}

/**
 * The function checks if the user exists by the email field in the database
 * If the process succeeded and email and password have matched, the user is consider as logged in
 * @param req - request
 * @param res - response
 * @param next
 * @returns {Promise<*>} the user object and JWT token if the auth process succeeded, otherwise null
 */
export async function login(req, res, next) {
    const {
        email,
        password
    } = req.body;
    try {
        const user = await UserModel.findOne({
            email
        });

        if (!user) {
            res.status(StatusCodes.BAD_REQUEST).json({
                type: 'error',
                message: ERROR_MESSAGE
            });
            return;
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                type: 'error',
                message: ERROR_MESSAGE
            });
        }

        return loadUser(res, user);

    } catch (err) {
        next(err);
    }
}

/**
 *
 * At first, the function checks if the user exists by the email field in the database.
 * If the user exists the server returns error.
 * Otherwise we create a new user with all fields. In addition, the password encrypted with hash.
 * @param req - request
 * @param res - response
 * @param next
 * @returns {Promise<*>}
 */
export async function register(req, res, next) {
    const {
        email,
        password,
        ...rest
    } = req.body;

    try {
        const foundUser = await UserModel.findOne({
            email
        });
        if (foundUser) {
            res.status(StatusCodes.BAD_REQUEST).json({
                type: 'error',
                message: ERROR_EMAIL_EXIST_MESSAGE
            });
            return;
        }
        // encryption of user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // creating a new user
        const newUser = new UserModel({
            password: hashedPassword,
            email,
            ...rest
        });
        const user = await newUser.save();

        return loadUser(res, user);
    } catch (err) {
        next(err);
    }
}

/**
 *
 * @param res = response
 * @param user
 * @returns set the user object and the JWT token in the response
 */
export function loadUser(res, user) {
    const token = jwt.sign({
        _id: user._id
    }, serverConfig.jwt.secret, {
        expiresIn: TOKEN_EXPIRATION_TIME
    });
    const {
        password: userPassword,
        ...userArgs
    } = user.toObject();

    res.json({
        user: userArgs,
        token
    });
    return res;
}

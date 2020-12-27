import {Joi} from 'express-validation';
import {
    CONFIRM_PASSWORD_FIELD,
    EMAIL_FIELD,
    PASSWORD_FIELD,
    USER_NAME_FIELD,
    EMAIL_VALID_NAMES
} from './constants';
import extendedModel from './extendedModel';

/**
 * Inside the scheme defined two rules email and password.
 * The function allows input for user only valid fields otherwise return an error
 * @type {{body: Joi.ObjectSchema<any>}}
 */
export const loginValidation = {
    body: Joi.object({
        [EMAIL_FIELD]: Joi.string()
            .email({minDomainSegments: 2, tlds: {allow: EMAIL_VALID_NAMES}})
            .required(),
        [PASSWORD_FIELD]: Joi.string()
            .min(7)
            .required(),
    }),
};

/**
 * Inside the scheme defined four rules username, email, password and confirmPassword.
 * The function allows input for user only valid fields otherwise return an error
 * @type {{body: Joi.ObjectSchema<any>}}
 */
export const registerValidation = {
    body: Joi.object({
        [USER_NAME_FIELD]: Joi.string()
            .alphanum()
            .min(3)
            .max(15)
            .required(),

        [EMAIL_FIELD]: Joi.string()
            .email({minDomainSegments: 2, tlds: {allow: EMAIL_VALID_NAMES}})
            .required(),
        [PASSWORD_FIELD]: Joi.string()
            .min(7)
            .required(),
        [CONFIRM_PASSWORD_FIELD]: Joi.ref(PASSWORD_FIELD),
        ...Object.keys(extendedModel).reduce((acc, cur) => ({
            ...acc,
            [cur]: Joi.any()
        }), {})
    }),
};

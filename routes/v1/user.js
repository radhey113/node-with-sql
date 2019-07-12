'use strict';

const Joi = require('joi');
const { success} = require('../../utils/response-msg');
const { convertErrorIntoReadableForm } = require('../../utils/utils');

const {
    registerUser, login
} = require('../../controllers').v1.userController;

let Routes = [
    {
        method: 'POST',
        path: '/v1/register',
        joiSchemaForSwagger: {
            body: {
                name: Joi.string().required().allow(``).description(`User unique name.`).label(`Name`),
                email: Joi.string().optional().allow(``).description(`User\'s email id.`).label(`Email`),
                password: Joi.string().required().allow(``).description(`User password.`).label(`Password`),
            },
            group: `User`,
            description: `Route to register an user to the system.`,
            model: `Register`,
            responseClass: success
        },
        auth: false,
        failAction: convertErrorIntoReadableForm,
        handler: registerUser,
    },
    {
        method: 'POST',
        path: '/v1/login',
        joiSchemaForSwagger: {
            body: {
                email: Joi.string().optional().allow(``).description(`User\'s email id.`).label(`Email`),
                password: Joi.string().required().allow(``).description(`User password.`).label(`Password`),
            },
            group: `User`,
            description: `Route to register an user to the system.`,
            model: `Sign`,
            responseClass: success
        },
        auth: false,
        failAction: convertErrorIntoReadableForm,
        handler: login,
    }
];
module.exports = Routes;


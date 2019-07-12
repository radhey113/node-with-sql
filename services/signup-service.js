'use strict';

let signupService = {};
const {users} = require('../models');
const {encryptPswrd, decryptPswrd, generateJWTToken} = require('../utils/utils');
const {RESPONSEMESSAGES, MESSAGES} = require('../utils/constants');
const {saveData, updateData, getOneRow} = require('./common-service');
const {UserResponse} = require('../response-classes/users');

/***
 * Sign up with normal and facebook both
 * @param body
 * @returns {Promise<any>}
 */
signupService.signUp = async body => {
    try {
        body.password = encryptPswrd(body.password);
        await saveData(users, body);
        return RESPONSEMESSAGES.ERROR.BAD_REQUEST(MESSAGES.DEFAULT_SUCCESS, {});
    } catch (error) {
        throw error;
    }
};

/**
 * Sign in user
 * @param body
 * @returns {Promise<void>}
 */
signupService.signIn = async body => {
    try {
        let criteria = {where: {email: body.email}};
        let user = await getOneRow(users, criteria);

        let isMatched = await decryptPswrd(body.password, (user || {}).password || '');
        if (!user || !isMatched) {
            throw RESPONSEMESSAGES.ERROR.BAD_REQUEST(MESSAGES.INVALID_CREDENTIALS);
        }

        let accessToken = await generateJWTToken(user.id, '');
        user['accessToken'] = accessToken;
        delete ((user || {}).dataValues || {}).password;
        await updateData(users, {accessToken: accessToken}, {where: {id: user.id}});
        return RESPONSEMESSAGES.SUCCESS.MISSCELANEOUSAPI(MESSAGES.LOGGED_IN_SUCCESSFULLY, new UserResponse(user));

    } catch (error) {
        throw error;
    }
};

/**
 * Update user email
 * @param body
 * @returns {Promise<void>}
 */
signupService.updateUser = async body => {
    return await updateData(users, {email: body.email}, {where: {id: body.id}});
};
module.exports = signupService;
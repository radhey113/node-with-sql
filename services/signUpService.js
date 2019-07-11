'use strict';

let signupService = {};
const {users} = require('../models');
const {encryptPswrd} = require('../utils/utils');
const {saveData, updateData} = require('./commonService');

/***
 * Sign up with normal and facebook both
 * @param body
 * @returns {Promise<any>}
 */
signupService.signUp = async body => {
    try {
        body.password = encryptPswrd(body.password);
        return await saveData(users, body)
    } catch (error) {
        throw error;
    }
};

/**
 * Update user
 * @param body
 * @returns {Promise<void>}
 */
signupService.updateUser = async body => {
    return await updateData(users,{email: body.email}, {where: {password: body.password}});
};

module.exports = signupService;
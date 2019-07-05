'use strict';

let signupService = {};
const {users} = require('../models');
const {encryptPswrd} = require('../utils/utils');
const {saveData} = require('./commonService');

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

module.exports = signupService;
'use strict';

const {RESPONSEMESSAGES, MESSAGES, SERVER} = require("../../utils/constants");
const {signUp, signIn} = require('../../services/signup-service');
const YES = SERVER.YES, NOT = SERVER.NOT;

/**************************************************
 ***** User controller for user business logic ****
 **************************************************/
let userController = {};


/**
 * function to register an user to the system.
 * @param body
 * @returns {Promise<*|{statusCode, message, type, data}>}
 */
userController.registerUser = async body => {
    try {
        let returnData = await signUp(body);
        return RESPONSEMESSAGES.SUCCESS.MISSCELANEOUSAPI(MESSAGES.DEFAULT_SUCCESS, returnData);
    } catch(error) {
        throw error;
    }
};

/**
 * function to register an user to the system.
 * @param body
 * @returns {Promise<*|{statusCode, message, type, data}>}
 */
userController.login = async body => {
    try {
        let returnData = await signIn(body);
        return RESPONSEMESSAGES.SUCCESS.MISSCELANEOUSAPI(MESSAGES.DEFAULT_SUCCESS, returnData);
    } catch(error) {
        throw error;
    }
};



/* export userControllers */
module.exports = userController;
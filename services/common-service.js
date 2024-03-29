'use strict';
let commonService = {};
let {createToken} = require('../utils/utils');

/**
 * Save data common function
 * @param Model
 * @param dataToSave
 * @returns {Promise<*>}
 */
commonService.saveData = async (Model, dataToSave) => {
   return await Model.create(dataToSave);
};

/**
 * Update user data
 * @param Model
 * @param dataToUpdate
 * @param criteria
 * @returns {Promise<void>}
 */
commonService.updateData = async (Model, dataToUpdate, criteria) => {
    return await Model.update(dataToUpdate, criteria);
};

/**
 * Get one row
 * @param Model
 * @param criteria
 * @returns {Promise<void>}
 */
commonService.getOneRow = async (Model, criteria) => {
    return await Model.findOne(criteria);
};


module.exports = commonService;

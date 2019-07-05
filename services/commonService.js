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


module.exports = commonService;

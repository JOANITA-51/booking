const preferenceModel = require('../models/preference');
const getPreferences = async(user = null) =>user?await preferenceModel.getPreferences(user) : await preferenceModel.getPreferences();
const getPreference = async(id) => await preferenceModel.getPreference(id);

module.exports = {
    getPreferences,
    getPreference
}
var moment = require("moment"),
	gulpConfig = require('../config');


/**
 * generate build version
 * @return {string} build version
 */
module.exports = function () {
	var now = moment(new Date());
    var buildVersion = gulpConfig.projectName + '[' + now.format("DD.MM.YYYY") + '][' + now.format("HH.mm.ss") + ']';

    // build version is current date without spaces (replaced to _) and without time zone info.
    // You could change it.
    buildVersion = buildVersion;

    return buildVersion;
};
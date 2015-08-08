'use strict'
var util = require('util')

var log = (function () {

    /*eslint-disable */
    var debug = function (message) {
        console.log(util.format(
            '[DEBUG] %s - %s',
            Date.now(),
            message
        ))
    }

    var error = function (message) {
        console.error(util.format(
            '[ERROR] %s - %s',
            Date.now(),
            message
        ))
    }

    var info = function (message) {
        console.log(util.format(
            '[INFO] %s - %s',
            Date.now(),
            message
        ))
    }
    /*eslint-enable */

    return {
        'debug': debug,
        'error': error,
        'info': info
    }

})()

module.exports = log

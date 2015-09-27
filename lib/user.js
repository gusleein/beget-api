/**
 * Created by Andrey on 27.09.2015.
 */
'use strict'
module.exports = function(params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'user/';
    var _methodName = '';

    this.getAccountInfo = function (callback) {
        _methodName = 'getAccountInfo';
        begetRequest.sendRequest(_path, _methodName, callback);
    };
    this.toggleSsh = function (data, callback) {
        _methodName = 'toggleSsh';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    return this;
};
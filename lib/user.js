/**
 * Created by Andrey on 27.09.2015.
 */


module.exports = function(params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'user/';
    var _methodName = '';

    this.getAccountInfo = function () {
        _methodName = 'getAccountInfo';
        begetRequest.sendRequest(_path, _methodName);
    };
    this.toggleSsh = function (data) {
        _methodName = 'toggleSsh';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    return this;
};
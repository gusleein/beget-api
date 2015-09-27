/**
 * Created by Andrey on 27.09.2015.
 */
var request = require('request');
var util = require('util');

module.exports = function BegetAPI(login, password, params) {
    var _baseUrl;
    var _outputFormat;
    var _inputFormat;

    if (params === undefined) {
        _baseUrl = 'https://api.beget.ru/api/';
        _outputFormat = 'json';
        _inputFormat = 'json';
    }
    else {
        /** @namespace params.baseUrl */
        _baseUrl = params.baseUrl || 'https://api.beget.ru/api/';
        /** @namespace params.outputFormat */
        _outputFormat = params.outputFormat || 'json';
        /** @namespace params.inputFormat */
       _inputFormat = params.inputFormat || 'json';
    }

    var HTTP_METHOD = 'POST';

    /** @namespace params.login */
    var _login = login;
    /** @namespace params.password */
    var _password = password;

    var _path = '';
    var _methodName = '';
    var _inputData = {};

    // public methods
    this.getAccountInfo = function () {
        _methodName = 'getAccountInfo';
        _path = 'user/' + _methodName;
        sendRequest();
    };

    // private methods
    var sendRequest = function (params) {
        var _response;
        var _error;
        var _body;

        var _params = params || {};
        _params.login = _login;
        _params.passwd = _password;
        _params.output_format = _outputFormat;
        _params.input_format = _inputFormat;
        _params.input_data = util.format("%j", _inputData);

        request({
            uri: _path,
            baseUrl: _baseUrl,
            method: HTTP_METHOD,
            qs: _params
        }, function (error, response, body) {

            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        });

    };

    return this;

};
/**
 * Created by Andrey on 27.09.2015.
 */
'use strict'
var request = require('request');
var util = require('util');

module.exports = function BegetRequest(params) {
    if (params === undefined)
        throw new Error('Не указаны параметры');

    var _login = params.login;
    var _password = params.password;
    var _outputFormat = params.outputFormat || 'json';
    var _inputFormat = params.inputFormat || 'json';

    var _inputData;

    /** @namespace params.httpMethod */
    var HTTP_METHOD = params.httpMethod || "POST";
    var _baseUrl = params.baseUrl || 'https://api.beget.ru/api/';

    this.sendRequest = function (path, methodName, data, callback) {

        if (typeof data !== "function")
            _inputData = data;
        else {
            _inputData = {};
            callback = data;
        }

        var _params = {};
        _params.login = _login;
        _params.passwd = _password;
        _params.output_format = _outputFormat;
        _params.input_format = _inputFormat;
        _params.input_data = util.format("%j", _inputData);

        request({
            uri: path + methodName,
            baseUrl: _baseUrl,
            method: HTTP_METHOD,
            qs: _params
        }, function (error, response, body) {
            if (typeof callback === "function")
                callback(error, response, body);
        });

    };

    return this;
};

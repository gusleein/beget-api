/**
 * Created by Andrey on 27.09.2015.
 */
module.exports = function (params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'dns/';
    var _methodName = '';

    /**
     * Метод возвращает информацию с DNS-сервера о домене.
     * @var data.fqdn - полное имя домена (домены на национальных языках следует передавать в punycode)
     * */
    this.getData = function (data, callback) {
        _methodName = 'getData';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * Метод возвращает информацию с DNS-сервера о домене.
     * @var data.fqdn - полное имя домена (домены на национальных языках следует передавать в punycode)
     * @var data.records - массив, содержащий DNS записи
     * */
    this.getData = function (data, callback) {
        _methodName = 'getData';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    return this;
};
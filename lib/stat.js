/**
 * Created by Andrey on 27.09.2015.
 */
module.exports = function (params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'stat/';
    var _methodName = '';

    /**
     * ћетод возвращает информацию о средней нагрузке на сайтах пользовател€ за последний мес€ц
     * */
    this.getSiteListLoad = function (callback) {
        _methodName = 'getSiteListLoad';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     * ћетод возвращает информацию о средней нагрузке на базах данных пользовател€ за последний мес€ц
     * */
    this.getDbListLoad = function (callback) {
        _methodName = 'getDbListLoad';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     * ћетод возвращает детальную информацию о нагрузке на указаном сайте (нагрузка по дн€м и часам)
     * @var data.site_id - идентификатор сайта
     * */
    this.getSiteLoad = function (data, callback) {
        _methodName = 'getSiteLoad';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * ћетод возвращает детальную информацию о нагрузке на указанной базе MySQL
     * @var data.db_name - им€ базы данных
     * */
    this.getDbLoad = function (data, callback) {
        _methodName = 'getDbLoad';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    return this;
};
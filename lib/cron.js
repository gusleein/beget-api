/**
 * Created by Andrey on 27.09.2015.
 */
module.exports = function (params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'cron/';
    var _methodName = '';

    /**
     * ћетод возвращает список всех задач CronTab
     * */
    this.getList = function (callback) {
        _methodName = 'getList';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     *  ћетод добавит новое задание. ѕосле добавлени€ задание будет активно.
     *  @var data.minutes - минуты
     *  @var data.hours - часы
     *  @var data.days - дни
     *  @var data.months - мес€цы
     *  @var data.weekdays - дни недели
     *  @var data.command - команда
     *
     *  @return row_number - ¬озвращаетс€ ID задани€ (идентификатор задани€ уникален в рамках одного пользовател€)
     * */
    this.add = function (data, callback) {
        _methodName = 'add';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  ћетод удалит задание с заданным ID.
     *  @var data.row_number - ID задани€, тип int
     * */
    this.delete = function (data, callback) {
        _methodName = 'delete';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  ћетод изменит статус задани€
     *  @var data.row_number - ID задани€, тип int
     *  @var data.is_hidden - статус задани€ (активное / не активное), тип boolean: 0 или 1
     *
     *  @return row_number - ¬озвращаетс€ ID задани€ (идентификатор задани€ уникален в рамках одного пользовател€)
     * */
    this.changeHiddenState = function (data, callback) {
        _methodName = 'changeHiddenState';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /** ћетод возвращает email, на который приходит вывод выполненных заданий */
    this.getEmail = function (callback) {
        _methodName = 'getEmail';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     *  ћетод устанавливает email, на который будет приходить вывод выполненных заданий
     *  @var data.email  - ID задани€, тип int
     * */
    this.setEmail = function (data, callback) {
        _methodName = 'setEmail';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };


    return this;
};
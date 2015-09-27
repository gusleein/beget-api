/**
 * Created by Andrey on 27.09.2015.
 */
module.exports = function (params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'ftp/';
    var _methodName = '';

    /**
     * Метод возвращает список дополнительных FTP-аккаунтов с их домашними директориями
     * */
    this.getList = function () {
        _methodName = 'getList';
        begetRequest.sendRequest(_path, _methodName);
    };

    /**
     * Метод добавляет новый FTP аккаунт
     * @var data.suffix - суффиксная часть логина. При передаче этого параметра нужно учитывать, что итоговый логин вида "login_suffix" должен быть не длиннее 17 символов
     * @var data.homedir - путь до домашней директории создаваемого аккаунта. Он начинается со слеша. (например, /site.ru/public_html)
     * @var data.password - пароль для нового ftp-аккаунта
     * */
    this.add = function (data) {
        _methodName = 'add';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     * Метод добавляет новый FTP аккаунт
     * @var data.suffix - суффиксная часть логина. При передаче этого параметра нужно учитывать, что итоговый логин вида "login_suffix" должен быть не длиннее 17 символов
     * @var data.password - пароль для нового ftp-аккаунта
     * */
    this.changePassword = function (data) {
        _methodName = 'changePassword';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**     *
     * Метод добавляет новый FTP аккаунт
     * @var data.suffix - суффиксная часть логина. При передаче этого параметра нужно учитывать, что итоговый логин вида "login_suffix" должен быть не длиннее 17 символов
     * */
    this.delete = function (data) {
        _methodName = 'delete';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    return this;
};
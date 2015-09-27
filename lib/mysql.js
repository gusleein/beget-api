/**
 * Created by Andrey on 27.09.2015.
 */
module.exports = function (params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'mysql/';
    var _methodName = '';

    /**
     * Метод возвращает список баз данных MySQL с их доступами.
     * */
    this.getList = function (callback) {
        _methodName = 'getList';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     *  Метод добавляет новую базу данных MySql с заданным суффиксом и создает доступ localhost с заданным паролем.
     *  @var data.suffix - суффиксная часть имени базы данных. При передаче этого параметра нужно учитывать, что итоговый логин вида "login_suffix" должен быть не длиннее 16 символов
     *  @var data.password - пароль для новой базы данных. Должен содержать не менее 6 символов
     * */
    this.addDb = function (data, callback) {
        _methodName = 'addDb';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  Метод добавляет заданный доступ к заданной базе данных MySql
     *  @var data.suffix -  суффиксная часть логина. При передаче этого параметра нужно учитывать, что итоговый логин вида "login_suffix" должен быть не длиннее 16 символов
     *  @var data.access - имя доступа - это может быть: домен, IP, * или localhost
     *  @var data.password - пароль для нового доступа к базе данных. Должен содержать не менее 6 символов
     * */
    this.addAccess = function (data, callback) {
        _methodName = 'addAccess';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  Метод удаляет заданную базу данных и все доступы к ней
     *  @var data.suffix - суффиксная часть имени базы данных
     * */
    this.dropDb = function (data, callback) {
        _methodName = 'dropDb';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  Метод удаляет заданный доступ у базы данных.
     *  @var data.suffix - суффиксная часть имени базы данных
     *  @var data.access - имя доступа - это может быть: домен, IP, * или localhost
     * */
    this.dropAccess = function (data, callback) {
        _methodName = 'dropAccess';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  Метод изменяет пароль на указанном доступе
     *  @var data.suffix - суффиксная часть имени базы данных
     *  @var data.access - имя доступа - это может быть: домен, IP, * или localhost
     *  @var data.password - пароль для нового доступа к базе данных. Должен содержать не менее 6 символов
     * */
    this.changeAccessPassword = function (data, callback) {
        _methodName = 'changeAccessPassword';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };


    return this;
};
/**
 * Created by Andrey on 27.09.2015.
 */
module.exports = function (params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'domain/';
    var _methodName = '';

    /**
     * Метод возвращает список доменов на аккаунте пользователя
     * */
    this.getList = function (callback) {
        _methodName = 'getList';
        begetRequest.sendRequest(_path, _methodName, callback);
    };
    /**
     * Метод возвращает список зон
     * */
    this.getZoneList = function (callback) {
        _methodName = 'getZoneList';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     * Метод добавляет домен
     * @var data.hostname - доменное имя, без зоны (например, domain)
     * @var data.zone_id - id зоны, тип int
     * */
    this.addVirtual = function (data, callback) {
        _methodName = 'addVirtual';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };
    /**
     * Метод удаляет домен. Если домен был прилинкован к сайту, то он будет отлинкован от него. Также будут удалены все поддомены этого домена.
     * @var data.id - id домена;
     * */
    this.delete = function (data, callback) {
        _methodName = 'delete';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * Метод возвращает список поддоменов
     * */
    this.getSubdomainList = function (callback) {
        _methodName = 'getSubdomainList';
        begetRequest.sendRequest(_path, _methodName, callback);
    };
    /**
     * Метод добавляет заданный поддомен
     * @var data.subdomain - имя поддомена
     * @var data.domain_id - id родительского домена
     * */
    this.addSubdomainVirtual = function (data, callback) {
        _methodName = 'addSubdomainVirtual';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  Метод удаляет заданный поддомен.
     * @var data.id - id поддомена.
     * */
    this.addSubdomainVirtual = function (data, callback) {
        _methodName = 'addSubdomainVirtual';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * Метод возвращает информацию о возможности регистрации заданного доменного имени.
     * @var data.hostname - доменное имя, без зоны
     * @var data.zone_id - id зоны, получить список зон можно с помощью метода getZoneList
     * @var data.period - период регистрации (в годах), тип int
     * */
    this.checkDomainToRegister = function (data, callback) {
        _methodName = 'checkDomainToRegister';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /** Метод возвращает список сохраненных персон, доступных для регистрации доменов. */
    this.getDomainPersons = function (callback) {
        _methodName = 'getDomainPersons';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     * Метод добавляет домен и оставляет заявку на его регистрацию
     * @var data.hostname - имя домена, без зоны
     * @var data.zone_id - id зоны. Получить список зон можно методом getZoneList
     * @var data.period - период регистрации
     * @var data.pay_type - способ оплаты
     * @var data.person_type - тип используемой персоны
     * @var data.person_id - id базовой персоны, тип int
     * @var data.person_fields - поля персоны, массив
     * @var data.pp - активировать ли услугу скрытия персональных данных (обязательна в зонах .ru / .su / .рф) (0/1)
     * @var data.enable_auto_renew - включить услугу автоматического продления домена (0/1)
     * */
    this.registerVirtual = function (data, callback) {
        _methodName = 'registerVirtual';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };


    /**
     * Метод возвращает информацию о возможности и способе продления домена.
     * @var data.id - id домена
     * @var data.period - желаемый период продления.
     */
    this.getRenewInfo = function (data, callback) {
        _methodName = 'getRenewInfo';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };


    /**
     * Метод оставляет заявку на продление заданного доменного имени на заданный период
     * @var data.id - id домена
     * @var data.pay_type - способ оплаты
     * @var data.period - желаемый период продления
     */
    this.renew = function (data, callback) {
        _methodName = 'renew';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * Метод возвращает информацию о текущей версии php для домена, включен ли php как cgi и доступных для установки версиях php
     * @var data.full_fqdn - полное имя домена, для которого необходимо получить информацию
     */
    this.getPhpVersion = function (data, callback) {
        _methodName = 'getPhpVersion';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * Метод возвращает информацию о текущей версии php для домена, включен ли php как cgi и доступных для установки версиях php
     * @var data.full_fqdn - полное имя домена, для которого необходимо получить информацию
     * @var data.php_version - версия php в формате указанном в списке доступных версии, полученного командой getPhpVersion
     * @var data.is_cgi - включить ли php как cgi, по умолчанию нет. Не обязательный параметр. 1 - включить php как cgi, 0 - выключить cgi (включает как apache mod_php)
     */
    this.changePhpVersion = function (data, callback) {
        _methodName = 'changePhpVersion';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * Метод возвращает список директив apache модуля mod_php(php_admin_flag, php_admin_value, php_value, php_flag) для домена.
     * @var data.full_fqdn - полное имя домена, для которого необходимо получить информацию
    */
    this.getDirectives = function (data, callback) {
        _methodName = 'getDirectives';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * Добавляет в VirtualHost домена переданные директивы, если они находятся в списке разрешенных (php_admin_flag, php_admin_value, php_value, php_flag)
     * @var data.full_fqdn - полное имя домена, для которого необходимо получить информацию
     * @var data.directives_list - список директив котрые необходимо добавить, в формате [{"name":"dirictive name","value":"dirictive value"}]
    */
    this.addDirectives = function (data, callback) {
        _methodName = 'addDirectives';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * Удаляет из VirtualHost домена переданные директивы, если они находятся в списке разрешенных (php_admin_flag, php_admin_value, php_value, php_flag) для редактирования
     * @var data.full_fqdn - полное имя домена, для которого необходимо получить информацию
     * directives_list - список директив котрые необходимо удалить, в формате [{"name":"dirictive name","value":"dirictive value"}]
    */
    this.removeDirectives = function (data, callback) {
        _methodName = 'removeDirectives';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    return this;
};
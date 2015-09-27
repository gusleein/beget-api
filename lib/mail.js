/**
 * Created by Andrey on 27.09.2015.
 */
'use strict'
module.exports = function (params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'mail/';
    var _methodName = '';

    /**
     * Метод возвращает все почтовые ящики на заданном домене
     * @var data.domain
     * */
    this.getMailboxList = function (data) {
        _methodName = 'getMailboxList';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     * Метод изменяет пароль к заданному почтовому ящику
     * @var data.domain
     * @var data.mailbox
     * @var data.mailbox_password
     * */
    this.changeMailboxPassword = function (data) {
        _methodName = 'changeMailboxPassword';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     * Метод создает почтовый ящик на заданном домене
     * @var data.domain
     * @var data.mailbox
     * @var data.mailbox_password
     * */
    this.createMailbox = function (data) {
        _methodName = 'createMailbox';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     * Метод удаляет почтовый ящик на заданном домене
     * @var data.domain
     * @var data.mailbox
     * */
    this.dropMailbox = function (data) {
        _methodName = 'dropMailbox';
        begetRequest.sendRequest(_path, _methodName, data);
    };


    /**
     * Метод устанавливает опции для почтового ящика
     * @var data.domain - домен, на котором находится почтовый ящик (например, site.ru)
     * @var data.mailbox - имя почтового ящика (например, info)
     * @var data.spam_filter_status - домен, на котором находится почтовый ящик (например, site.ru)
     * @var data.spam_filter - уровень филтрации спама (0 - макс. фильтрация, 100 - минимальная)
     * @var data.forward_mail_status - режим работы перенаправления для почтового ящика
     *          Возможные значения:
     *                no_forward - письма не перенаправляются,
     *                forward - письма также перенаправляются на заданные почтовые ящики,
     *                forward_and_delete - письма перенаправляются и удаляются из почтового ящика.
     * */
    this.changeMailboxSettings = function (data) {
        _methodName = 'changeMailboxSettings';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     *  Метод добавит почтовый ящик в список ящиков для пересылки
     *  @var data.domain - домен, на котором находится почтовый ящик (например, site.ru)
     *  @var data.mailbox - имя почтового ящика (например, info)
     *  @var data.forward_mailbox - почтовый ящик, на который будут перенаправляются письмa
     * */
    this.forwardListAddMailbox = function (data) {
        _methodName = 'forwardListAddMailbox';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     *  Метод добавит почтовый ящик в список ящиков для пересылки
     *  @var data.domain - домен, на котором находится почтовый ящик (например, site.ru)
     *  @var data.mailbox - имя почтового ящика (например, info)
     *  @var data.forward_mailbox - почтовый ящик, который будет удален из списка пересылки
     * */
    this.forwardListDeleteMailbox = function (data) {
        _methodName = 'forwardListDeleteMailbox';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     *  Метод добавит почтовый ящик в список ящиков для пересылки
     *  @var data.domain - домен, на котором находится почтовый ящик (например, site.ru)
     *  @var data.mailbox - имя почтового ящика (например, info)
     * */
    this.forwardListShow = function (data) {
        _methodName = 'forwardListShow';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     *  Метод добавит почтовый ящик в список ящиков для пересылки
     *  @var data.domain - домен для которого будет установлена почта домена (например, site.ru)
     *  @var data.domain_mailbox - почтовый ящик, который будет установлен в качестве почты домена (например, mail@site.ru)
     * */
    this.setDomainMail = function (data) {
        _methodName = 'setDomainMail';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    /**
     *  Метод добавит почтовый ящик в список ящиков для пересылки
     *  @var data.domain - домен для которого будет сброшена почта домена (например, site.ru)
     * */
    this.clearDomainMail = function (data) {
        _methodName = 'clearDomainMail';
        begetRequest.sendRequest(_path, _methodName, data);
    };

    return this;
};
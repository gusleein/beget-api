/**
 * Created by Andrey on 27.09.2015.
 */
'use strict'

module.exports = function(params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'backup/';
    var _methodName = '';


    /** backup */

    /** Метод возвращает доступный список резервных файловых копий. */
    this.getFileBackupList = function (callback) {
        _methodName = 'getFileBackupList';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /** Метод возвращает доступный список резервных копий баз mysql */
    this.getMysqlBackupList = function (callback) {
        _methodName = 'getMysqlBackupList';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     * Метод возвращает список файлов и директорий из резервной копии по заданному пути и идентификатору.
     * @var data.backup_id  - идентификатор резервной копии backup_id, если не задан - значит листинг идет по текущей копии
     * @var data.path - путь от корня домашней директории (например "/site.ru/public_html")
     * */
    this.getFileList = function (data, callback) {
        _methodName = 'getFileList';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /** Метод возвращает список баз данных из резервной копии по заданному идентификатору.
     * @var data.backup_id - идентификатор резервной копии backup_id, если не задан - значит листинг идет по текущей копии
     * */
    this.getMysqlList = function (data, callback) {
        _methodName = 'getMysqlList';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * Метод создает заявку на восстановление данных из резервной копии по заданному пути и резервной копии.
     * @var data.backup_id  - идентификатор резервной копии backup_id
     * @var data.paths - массив (одно или несколько значений) путей для восстановления от корня домашней директории (например "/site.ru/public_html")
     * */
    this.restoreFile = function (data, callback) {
        _methodName = 'restoreFile';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * Метод создает заявку на восстановление БД из резервной копии по заданному имени БД и идентификатору резервной копии.
     * @var data.backup_id - идентификатор резервной копии backup_id
     * @var data.bases - массив (одно или несколько значений) имена баз данных MySQL для восстановления
     * */
    this.restoreMysql = function (data, callback) {
        _methodName = 'restoreMysql';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * Метод создает заявку на загрузку и выкладывание данных из резервной копии в корень аккаунта.
     * @var data.backup_id - идентификатор резервной копии backup_id (необязательный), если не указан то используется текущая копия
     * @var data.paths - массив (одно или несколько значений) путей для восстановления от корня домашней директории (например "/site.ru/public_html");
     * */
    this.downloadFile = function (data, callback) {
        _methodName = 'downloadFile';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     * Метод создает заявку на загрузку и выкладывание данных из резервной копии в корень аккаунта.
     * @var data.backup_id - идентификатор резервной копии backup_id (необязательный), если не указан то используется текущая копия
     * @var data.bases - массив (одно или несколько значений) имена баз данных MySQL для восстановления
     * */
    this.downloadMysql = function (data, callback) {
        _methodName = 'downloadMysql';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };
    /** Метод возвращает список и статусы заданий по восстановлению и загрузке */
    this.getLog = function (callback) {
        _methodName = 'getLog';
        begetRequest.sendRequest(_path, _methodName, callback);
    };



    return this;
};
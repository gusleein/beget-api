/**
 * Created by Andrey on 27.09.2015.
 */

module.exports = function(params) {

    var begetRequest = require('./begetRequest')(params);

    var _path = 'backup/';
    var _methodName = '';


    /** backup */

    /** Метод возвращает доступный список резервных файловых копий. */
    this.getFileBackupList = function () {
        // TODO
    };

    /** Метод возвращает доступный список резервных копий баз mysql */
    this.getMysqlBackupList = function () {
        // TODO
    };

    /** Метод возвращает список файлов и директорий из резервной копии по заданному пути и идентификатору. */
    this.getFileList = function () {
        // TODO
    };

    /** Метод возвращает список баз данных из резервной копии по заданному идентификатору. */
    this.getMysqlList = function () {
        // TODO
    };

    /** Метод создает заявку на восстановление данных из резервной копии по заданному пути и резервной копии. */
    this.restoreFile = function () {
        // TODO
    };

    /** Метод создает заявку на восстановление БД из резервной копии по заданному имени
     * БД и идентификатору резервной копии.  */
    this.restoreMysql = function () {
        // TODO
    };

    /** Метод создает заявку на загрузку и выкладывание данных из резервной копии в корень аккаунта.  */
    this.downloadFile = function () {
        // TODO
    };

    /** Метод создает заявку на загрузку и выкладывание данных из резервной копии в корень аккаунта. */
    this.downloadMysql = function () {
        // TODO
    };

    /**  Метод возвращает список и статусы заданий по восстановлению и загрузке. */
    this.getLog = function (data) {
        /** @namespace data.backup_id */
        /** @namespace data.paths */

        // TODO
    };

    return this;
};
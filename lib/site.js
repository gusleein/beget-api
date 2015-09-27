/**
 * Created by Andrey on 27.09.2015.
 */
module.exports = function (params) {

    var begetRequest = new require('./begetRequest')(params);

    var _path = 'site/';
    var _methodName = '';

    /**
     * Метод возвращает список сайтов. Если к сайту прилинкованы домены, то они так же будут возвращены
     * */
    this.getList = function (callback) {
        _methodName = 'getList';
        begetRequest.sendRequest(_path, _methodName, callback);
    };

    /**
     *  Метод создает новый сайт с заданным именем.
     *  @var data.name - имя директории с сайтом (например, site.ru)
     * */
    this.add = function (data, callback) {
        _methodName = 'add';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  Метод удаляет сайт. Если к сайту были прилинкованы домены, то они будут отлинкованы от него
     *  @var data.id - id сайта, тип int
     * */
    this.delete = function (data, callback) {
        _methodName = 'delete';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  Метод прилинковывает домен к сайту
     *  @var data.domain_id - id домена, получить уникальный id Домена можно функцией domain/getList
     *  @var data.site_id - id сайта.
     * */
    this.linkDomain = function (data, callback) {
        _methodName = 'linkDomain';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  Метод отлинковывает домен.
     *  @var data.domain_id - id домена, получить уникальный id Домена можно функцией domain/getList
     * */
    this.unlinkDomain = function (data, callback) {
        _methodName = 'unlinkDomain';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  Метод запрещает изменение файлов сайта.
     *  @var data.id - id сайта, получить уникальный id сайта можно функцией site/getList
     *  @var data.excludedPaths - список путей в которых будет разрешено изменение файтов
     * */
    this.freeze = function (data, callback) {
        _methodName = 'freeze';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    /**
     *  Метод разрешает изменение файлов сайта.
     *  @var data.id - id сайта, получить уникальный id сайта можно функцией site/getList
     * */
    this.unfreeze = function (data, callback) {
        _methodName = 'unfreeze';
        begetRequest.sendRequest(_path, _methodName, data, callback);
    };

    return this;
};
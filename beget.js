/**
 * Created by Andrey on 27.09.2015.
 */
var request = require('request');
var util = require('util');



module.exports = function BegetAPI(login, password, params) {

    /** @namespace params.login */
    var _login = login;

    /** @namespace params.password */
    var _password = password;

    var _params = {} || params;
    _params.login = _login;
    _params.password = _password;

    this.user = new require('./lib/user')(_params);
    this.backup = new require('./lib/backup')(_params);
    this.cron = new require('./lib/cron')(_params);
    this.dns = new require('./lib/dns')(_params);
    this.ftp = new require('./lib/ftp')(_params);
    this.mysql = new require('./lib/mysql')(_params);
    this.site = new require('./lib/site')(_params);
    this.domain = new require('./lib/domain')(_params);
    this.mail = new require('./lib/mail')(_params);
    this.stat = new require('./lib/stat')(_params);


    return this;

};
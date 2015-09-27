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

    var user = new require('./lib/user')(_params);
    var backup = new require('./lib/backup')(_params);
    var cron = new require('./lib/cron')(_params);
    var dns = new require('./lib/dns')(_params);
    var ftp = new require('./lib/ftp')(_params);
    var mysql = new require('./lib/mysql')(_params);
    var site = new require('./lib/site')(_params);
    var domain = new require('./lib/domain')(_params);
    var mail = new require('./lib/mail')(_params);
    var stat = new require('./lib/stat')(_params);

    /*  PUBLIC METHODS  */

    /** user */
    this.getAccountInfo = user.getAccountInfo;
    this.toggleSsh = user.toggleSsh;

    /** mail */
    this.getMailboxList             = mail.getMailboxList;
    this.changeMailboxPassword      = mail.changeMailboxPassword;
    this.createMailbox              = mail.createMailbox;
    this.dropMailbox                = mail.dropMailbox;
    this.changeMailboxSettings      = mail.changeMailboxSettings;
    this.forwardListAddMailbox      = mail.forwardListAddMailbox;
    this.forwardListDeleteMailbox   = mail.forwardListDeleteMailbox;
    this.forwardListShow            = mail.forwardListShow;
    this.setDomainMail              = mail.setDomainMail;
    this.clearDomainMail            = mail.clearDomainMail;


    return this;

};
/**
 * Created by Andrey on 27.09.2015.
 */
var BegetAPI = new require('./beget');

var beget = new BegetAPI('somna', 'zSJbnFrj');

beget.user.getAccountInfo();
beget.ftp.getList();
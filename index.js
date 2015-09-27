/**
 * Created by Andrey on 27.09.2015.
 */
var BegetAPI = new require('./beget');

var beget = new BegetAPI('somna', 'zSJbnFrj');

beget.user.getAccountInfo(function (err, res, body) {
    if (!err && res.statusCode == 200) {
        console.log(body);
    }
});
beget.ftp.getList(function (err, res, body) {
    if (!err && res.statusCode == 200) {
        console.log(body);
    }
});
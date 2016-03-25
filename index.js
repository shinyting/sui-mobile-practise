var express = require("express");
var cons = require("consolidate");
var app = express();

app.engine('html', cons.swig);
app.set('view engine', 'html');

app.set('views', __dirname + '/views');

//首页
app.get('/', function (req, res) {
	res.render('index', {
		title: 'home'
	});
});

//阅读时间线
app.get('/timeline', function (req, res) {
	res.render('mineFold/mine', {});
});

//藏书阁
app.get('/favorite', function (req, res) {
	res.render('FavoriteFold/favorite', {});
});

//设置
app.get('/setting', function (req, res) {
	res.render('setFold/setting', {});
});

//书籍详情页
app.get('/bookDetail', function (req, res) {
	res.render('indexFold/bookDetail', {});
});

var server = app.listen(8000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("sui-mobile-practise app listening at http://%s:%s", host, port)
});

app.use(express.static('public'));
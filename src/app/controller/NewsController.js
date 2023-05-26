class NewsController {
//Những  function sẽ được gọi khi có 1 tác  vụ nào đó từ clinent gởi lên match với routes
index(req, res) {
res.render('news');
}
}

module.exports = new NewsController();

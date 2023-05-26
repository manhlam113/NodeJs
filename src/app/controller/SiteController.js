const Course = require("../models/Course");
const { multipleMongooseToObj } = require("../../utils/mongoose");
class SiteController {
  //Những  function sẽ được gọi khi có 1 tác  vụ nào đó từ clinent gởi lên match với routes
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongooseToObj(courses),
        });
      })
      .catch((error) => next(error));
  }

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();

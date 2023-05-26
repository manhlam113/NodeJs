const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/manh_blog_dev ");
    console.log("Kết nối database thành công");
  } catch (error) {
    console.log("Kết nối database lỗi");
  }
}

module.exports = { connect };

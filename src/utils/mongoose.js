module.exports = {
  multipleMongooseToObj: function (mongooseArrays) {
    return mongooseArrays.map((mongoose) => mongoose.toObject());
  },
  mongooseToObj: function (mongooseObj) {
    if (mongooseObj) {
      return mongooseObj.toObject();
    }
  },
};

const mongoose = require("mongoose");

const mySchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  gender: {
    type: Boolean,
  },
});

const myModel = mongoose.model("Set06Datas", mySchema);

module.exports = myModel;

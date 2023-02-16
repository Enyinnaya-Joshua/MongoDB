const myModel = require("../model/set06model");

const reading = async (req, res) => {
  try {
    const getData = await myModel.find();

    res.status(200).json({
      message: "all data gotten",
      data: getData,
    });
  } catch (error) {
    res.status(400).json({
      message: "an error occurred",
      data: error.message,
    });
  }
};

const posting = async (req, res) => {
  try {
    const { firstName, gender } = req.body;
    const PostData = await myModel.create({
      firstName,
      gender,
    });

    res.status(201).json({
      message: "new data created",
      data: PostData,
    });
  } catch (error) {
    res.status(400).json({
      message: "an error ",
      data: error.message,
    });
  }
};

module.exports = { reading, posting };

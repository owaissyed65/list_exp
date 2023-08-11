const { getData } = require("../services/helper");

const getList = async (req, res) => {
  try {
    // get all data
    const lists = await getData();
    return res.status(200).json(lists);

  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};
module.exports = getList;

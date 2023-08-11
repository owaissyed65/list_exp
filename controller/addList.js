const { addTodoInData, getData } = require("../services/helper");

const addList = async (req, res) => {
  const { title, description } = req.body;
  try {
    if (!title) {
      return res.status(400).send("Title is required");
    }
    if (!description) {
      return res.status(400).send("description is required");
    }

    const list = await getData();
    const data = {
      id: list.length + 1,
      title,
      description,
    };
    list.push(data);

    addTodoInData(list);
    return res.status(201).json({ success: "Data has been added" });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = addList;

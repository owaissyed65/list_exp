const { getData, addTodoInData } = require("../services/helper");

const updateList = async (req, res) => {
  try {
    const list = await getData();

    const { listId } = req.params;
    const { title, description } = req.body;

    const findList = list.find((val) => val.id === Number(listId));

    if (!findList) {
      return res.status(404).send("List not Exist");
    }

    const updatedList = list.map((currentValue) => {
      if (currentValue?.id === Number(listId)) {
        return {
          ...currentValue,
          title,
          description,
        };
      }
      return currentValue;
    });

    addTodoInData(updatedList);
    return res.status(200).json({ success: "Data has been Updated." });
    
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};
module.exports = updateList;

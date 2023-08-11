const { getData, addTodoInData } = require("../services/helper");

const deleteList = async (req, res) => {
  try {
    const list = await getData();
    const { listId } = req.params;

    const findList = list.find((val) => val.id === Number(listId));
    if (!findList) {
      return res.status(404).send("List not Exist");
    }
    
    const deletedList = list.filter((data) => data.id !== Number(listId));
    addTodoInData(deletedList);

    return res.status(200).json({success:"Deleted Successfully"})

  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = deleteList;

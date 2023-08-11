const fs = require("fs");
const path = require("path");
async function addTodoInData( list = []) {
  try {
    fs.writeFile(
      path.resolve("data", "list.json"),
      JSON.stringify(list),
      (err, res) => {
        if (err) throw new Error(err);
        console.log("Add data");
      }
    );
  } catch (error) {
    throw new Error(error);
  }
}
const getData = async () => {
  try {
    const data = await fs.promises.readFile(
      path.resolve("data", "list.json"),
      "utf-8"
    );
    return JSON.parse(data);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = { addTodoInData, getData };

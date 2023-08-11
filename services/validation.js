const { Joi: joi } = require("express-validation");

const validateTodo = {
  body: joi.object({
    title: joi.string().min(3).max(10).required(),
    description: joi.string().min(4).required(),
  }),
};

module.exports = validateTodo

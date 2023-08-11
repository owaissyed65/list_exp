const express = require("express");
const todoRoutes = require("./routes/todoRoutes");
const { ValidationError } = require("express-validation");
const { error, errorHandler } = require("./middlewares/error");

const app = express();
const PORT = process.env.PORT || 8002;

async function init() {
  try {
    app.use(express.json());

    app.use(function (err, req, res, next) {
      if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err);
      }
      return res.status(500).json(err);
    });

    app.use("/todos", todoRoutes);

    app.use(error);
    app.use(errorHandler);
    
    app.listen(PORT, () => {
      console.log("Port listen on server http://localhost:" + PORT);
    });
  } catch (error) {
    console.error(error);
    
  }
}
init();

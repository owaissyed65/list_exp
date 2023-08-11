const error = async (error, req, res, next) => {
  const myError = new Error("Not Found ");
  res.status(404).send("Not Found this requested Url");
  next(errorValue);
};

const errorHandler = (error, req, res, next) => {
  res.status(500).json({
    error: error.message,
  });
};

module.exports = {
  error,
  errorHandler,
};

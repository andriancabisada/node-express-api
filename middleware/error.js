const ErrorResponse = require("../utils/errorResponse.js");

exports.errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  if (err.name === "CastError") {
    let dataModel = err.message.split("model ")[1].replace(/['"]+/g, "");
    const message = `${dataModel} not found with the id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    error = new ErrorResponse(message, 404);
  }

  if (err.code === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

exports.notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

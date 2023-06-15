const ErrorHandler = (message, statusCode, req, res) => {
  return res.status(statusCode).json({
    success: false,
    message: message,
  });
};

module.exports = ErrorHandler;

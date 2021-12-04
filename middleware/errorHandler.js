function errorHandler(err, req, res, next) {
  if (!err.status) {
    res.status = 404;
    return res.send(err);
  }
  res.status(err.status);
  res.send("unknown endpoint");
}

module.exports = errorHandler;

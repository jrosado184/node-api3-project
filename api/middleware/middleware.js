function logger(req, res, next) {
  // DO YOUR MAGIC
  const time = new Date().toLocaleString();
  const method = req.method;
  const url = req.originalUrl;
  console.log(`[${time}], ${method} and ${url}) `);
  next();
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  console.log("validateUserId middleware");
  next();
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  console.log("validateUser middleware");
  next();
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  console.log("validatePost middleware");
  next();
}

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
};
// do not forget to expose these functions to other modules

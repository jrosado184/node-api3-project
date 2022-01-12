const User = require("../users/users-model");

function logger(req, res, next) {
  // DO YOUR MAGIC
  const time = new Date().toLocaleString();
  const method = req.method;
  const url = req.originalUrl;
  console.log([time], `${method} and ${url}) `);
  next();
}

async function validateUserId(req, res, next) {
  try {
    const user = await User.getById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "user not found" });
    } else {
      req.user = user;
      next();
    }
  } catch {}

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
  validateUserId,
  validateUser,
  validatePost,
  logger,
};
// do not forget to expose these functions to other modules

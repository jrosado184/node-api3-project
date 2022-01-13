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
  } catch (err) {
    next(err);
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  const { name } = req.body;
  if (!name || !name.trim()) {
    res.status(400).json({ message: "missing required name field" });
  } else {
    req.name = name.trim();
    next();
  }
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  const { text } = req.body;
  if (!text || !text.trim()) {
    res.status(400).json({ message: "missing required text field" });
  } else {
    req.text = text.trim();
    next();
  }
}

module.exports = {
  validateUserId,
  validateUser,
  validatePost,
  logger,
};
// do not forget to expose these functions to other modules

const express = require("express");
const userRouter = require("./users/users-router");
const { logger } = require("./middleware/middleware");
const server = express();

// remember express by default cannot parse JSON in request bodies
server.use(express.json());

// global middlewares and the user's router need to be connected here

server.use("/api/users", userRouter);

server.use(logger);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: "something went wrong in the router" && err.message,
  });
});

module.exports = server;

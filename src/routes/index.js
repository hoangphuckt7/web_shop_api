const userRouter = require("./user");
const productRouter = require("./product");
const cartRouter = require("./cart");
const orderRouter = require("./order");
const authRouter = require("./auth");

function route(app) {
  app.use("/api/users", userRouter);
  app.use("/api/products", productRouter);
  app.use("/api/carts", cartRouter);
  app.use("/api/orders", orderRouter);
  app.use("/api/auth", authRouter);
}

module.exports = route;

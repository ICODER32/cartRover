const express = require("express");

const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const connectDb = require("./config/connection");

connectDb();

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/users", require("./routes/users.js"));
app.use("/api/v1/products", require("./routes/products.js"));
app.use("/api/v1/cart", require("./routes/cart.js"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

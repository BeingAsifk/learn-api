const express = require("express");
const {
  getStockPrices,
  postTest,
  getHome,
  getParamsTest,
  middleWareInterceptor,
} = require("./routes");

const app = express();
const port = 5353;

// Middleware
app.use(express.json());
app.use(require("cors")());

// Routes
app.get("/", getHome);
app.get("/api/stock", middleWareInterceptor, getStockPrices);
app.get("/api/testParams/:bananaKeywork", getParamsTest);
app.post("/api/test", postTest);

app.listen(port, () => console.log(`Server has started on port: ${port}`));

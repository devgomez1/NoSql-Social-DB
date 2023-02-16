const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(routes);

mongoose
  .connect("mongodb://127.0.0.1/social-network-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

mongoose.set("debug", true);

app.listen(PORT, () => console.log(`Connected to Port ${PORT}`));

const express = require("express");
const path = require("node:path");
const newRouter = require("./routes/new");
const indexRouter = require("./routes/index");
const msgRouter = require("./routes/msg")

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

app.use((req, res, next) => {
    req.messages = messages;
    next();
})
app.use("/new", newRouter);
app.use("/msg", msgRouter);
app.use("/", indexRouter);
app.use("/*", (err, req, res, next) => {
    res.status(404).send("Error Page not Found");
});


app.listen(3000, () => console.log("listening on port 3000"));

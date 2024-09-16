const express = require("express");
const path = require("node:path");
const msgRouter = require("./routes/new");
const indexRouter = require("./routes/index");

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
app.use("/new", msgRouter);
app.use("/", indexRouter);


app.listen(3000, () => console.log("listening on port 3000"));

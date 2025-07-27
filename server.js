require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const adminRouter = require("./router/admin-router");
const registrationRouter = require("./router/registration-router");
const connectDB = require("./utils/db");
const loginRouter = require("./router/login-router");

var corsOptions = {
  origin: "http://localhost:3000",
  methods: ["POST"], // allowed methods
  Credentials: true, // allow credentials to be sent
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/login", loginRouter);

// app.use("/auth", router);
app.use("/admin", adminRouter);
app.use("/registration", registrationRouter);
// app.use("/login", loginRouter);

// app.get("/", (req, res) => {
//   res.send("welcome to  express");
// });
// app.get("/about/admin", (req, res) => {
//   res.status(200).send("welcome to about admin ");
// });
const Port = 5000;

// app.listen(Port, () => {
//   console.log(`server is running on port ${Port}`);
// });

connectDB().then(() => {
  app.listen(Port, () => {
    console.log(`server is running on port ${Port}`);
  });
});

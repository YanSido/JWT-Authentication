require("dotenv").config();
// import { Jwt } from "jsonwebtoken";
const Jwt = require("jsonwebtoken");

const USERS = [];
const INFORMATION = [];
const REFRESHTOKENS = [];
const express = require("express");
const cors = require("cors");
const app = express();
const shortRouter = require("./routers/authRouter");
const bodyParser = require("body-parser");
const errorHandler = require("./middleware/errorHandler");
const userHandler = require("./middleware/userHandler");
const signupHandler = require("./middleware/signupHandler");
const loginHandler = require("./middleware/loginHandler");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/public", express.static(`./client/public`));

app.post("/users/register", signupHandler);
// app.use("/", userHandler, shortRouter);
app.use(errorHandler);

(module.exports = app), USERS, INFORMATION, REFRESHTOKENS;

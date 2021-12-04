const { USERS, INFORMATION, REFRESHTOKENS } = require("../app");
const bcrypt = require("bcrypt");

async function signupHandler(req, res, next) {
  try {
    // HOW TO MAKE DB AS VARIABLES??????????????????????/
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    INFORMATION.push({ email: req.body.email, info: req.body.name });
    console.log(INFORMATION);
    res.status = 201;
    res.send("Register Success");
  } catch (err) {
    console.log(err);
  }
}

module.exports = signupHandler;

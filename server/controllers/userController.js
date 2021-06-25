const mongoose = require("mongoose");
const User = mongoose.model("User");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");

// listen request HTTP from client 
exports.register = async (req, res) => {
  const { name, email, password, type } = req.body;

  const emailRegex = /@gmail.com|@yahoo.com|@hotmail.com|@live.com/;

  if (!emailRegex.test(email)) throw "Email is not supported from your domain.";
  if (password.length < 6) throw "Password must be atleast 6 characters long.";

  const userExists = await User.findOne({
    email,
  });

  if (userExists) throw "User with same email already exits.";

  const user = new User({
    name,
    email,
    password: sha256(password + process.env.SALT),
    type,
  });

  await user.save();

  res.json({
    message: "User [" + name + "] registered successfully!",
  });
};

/**
 * 
 *  { 
 *    email: "quan",
 *    password: "123456"
 * }
 *  req : request = client send to 
 *  res : response = sever return back client
 * 
 */
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // database token -> sha256() -> findOne (email,password) => true || false => exist : true; not exist: false
  const user = await User.findOne({
    email,
    password: sha256(password + process.env.SALT),
  });

  if (!user) throw "Email and Password did not match.";

  // if login success -> tra token cho ng dung` -> jwt,sha256 thu vien 
  const token = await jwt.sign({ id: user.id }, process.env.SECRET);

  //get user data 
  const data = await User.findOne({email: new RegExp('^'+email+'$', "i")}, function(err, doc){
        return err
  });

  // return json -> message, data
  res.json({
    message: "User logged in successfully!",
    token,
    type: data.type,
    name: data.name,
  });
};

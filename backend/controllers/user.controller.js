/**
 * REGISTER >> library&step
 * library: { bcrypt}
 *
 * Step: {
 * 1. Check -> Username,Password
 * 2. Check -> Duplicate username (optional)
 * 3. Hash -> password
 * 4. Save to DB!
 * }
 *
 * Diagram Flow
 *  >> Activity / Sequence Diagram <<
 */

const bcrypt = require("bcrypt");
const UserModels = require("../models/User");
const salt = bcrypt.genSaltSync(10); //พิ่มความปลอดภัยในการเก็บรักษา password

exports.register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({
      message: "Please provide all required fields!",
    });
    return;
  }

  try {
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = await UserModels.create({
      username,
      password: hashedPassword,
    });
    res.send({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        "Something error occurred while registering a new user",
    });
  }
};

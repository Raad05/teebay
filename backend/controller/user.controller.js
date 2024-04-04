import prisma from "../db/db.config.js";

export const createUser = async (req, res) => {
  try {
    const data = req.body;

    const findUser = await prisma.user.findUnique({
      where: {
        OR: [{ email: data.email }, { phoneNumber: data.phoneNumber }],
      },
    });

    if (findUser) {
      if (findUser.email === data.email) {
        return res.json({
          status: 400,
          message: "Email already exists.",
        });
      } else {
        return res.json({
          status: 400,
          message: "Phone number already in use.",
        });
      }
    }

    const newUser = await prisma.user.create({
      data: data,
    });

    return res.json({
      status: 200,
      data: newUser,
      message: "User created successfully!",
    });
  } catch (e) {
    return res.json({
      status: 400,
      message: "Failed to create new user.",
      error: e,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await prisma.user.findFirst({
      where: {
        email: email,
        password: password,
      },
    });

    if (result) {
      return res.json({ status: 200, message: "Login successful!" });
    } else {
      return res.json({
        status: 400,
        message: "Email or password doesn't match.",
      });
    }
  } catch (e) {
    return res.json({ status: 400, message: "Failed to login.", error: e });
  }
};

import prisma from "../db/db.config.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (findUser) {
      res.json({ status: 400, message: "Email already exists." });
    }

    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });

    res.json({
      status: 200,
      data: newUser,
      message: "User created successfully!",
    });
  } catch (e) {
    res.json({ status: 400, message: "Failed to create new user.", error: e });
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
      res.json({ status: 200, message: "Login successful!" });
    } else {
      res.json({ status: 400, message: "Email or password doesn't match." });
    }
  } catch (e) {
    res.json({ status: 400, message: "Failed to login.", error: e });
  }
};

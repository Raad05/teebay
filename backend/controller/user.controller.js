import prisma from "../db/db.config.js";

export const createUser = async (input, _, res) => {
  try {
    const user = input;

    const findUser = await prisma.user.findFirst({
      where: {
        OR: [{ email: user.email }, { phoneNumber: user.phoneNumber }],
      },
    });

    if (findUser) {
      if (findUser.email === user.email) {
        return {
          status: 400,
          message: "Email already exists.",
        };
      } else {
        return {
          status: 400,
          message: "Phone number already in use.",
        };
      }
    }

    const newUser = await prisma.user.create({
      data: user,
    });

    return {
      status: 200,
      data: newUser,
      message: "User created successfully!",
    };
  } catch (e) {
    return {
      status: 400,
      message: "Failed to create new user.",
      error: e,
    };
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
      return { status: 200, message: "Login successful!" };
    } else {
      return {
        status: 400,
        message: "Email or password doesn't match.",
      };
    }
  } catch (e) {
    return { status: 400, message: "Failed to login.", error: e };
  }
};

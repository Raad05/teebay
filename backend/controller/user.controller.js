import prisma from "../db/db.config.js";

export const createUser = async (input) => {
  const user = input;

  const findUser = await prisma.user.findFirst({
    where: {
      OR: [{ email: user.email }, { phoneNumber: user.phoneNumber }],
    },
  });

  if (findUser) {
    if (findUser.email === user.email) {
      throw new Error("Email already exists.");
    } else {
      throw new Error("Phone number already in use.");
    }
  }

  const newUser = await prisma.user.create({
    data: user,
  });

  return newUser;
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

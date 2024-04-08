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

export const loginUser = async (input) => {
  const { email, password } = input;

  const result = await prisma.user.findFirst({
    where: {
      email: email,
      password: password,
    },
  });

  if (result) {
    return result;
  } else {
    throw new Error("Email or password doesn't match");
  }
};

import prisma from "../db/db.config.js";

export const createProduct = async (input) => {
  const product = input;

  const newProduct = await prisma.product.create({
    data: product,
  });

  return newProduct;
};

export const getAllProducts = async () => {
  const result = await prisma.product.findMany({});

  return result;
};

export const getProductById = async (id) => {
  const result = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  return result;
};

export const deleteProduct = async (id) => {
  await prisma.product.delete({
    where: {
      id: id,
    },
  });

  return true;
};

export const updateProduct = async (input) => {
  const updatedProduct = await prisma.product.update({
    where: {
      id: input.id,
    },
    data: data,
  });

  return updatedProduct;
};

export const buyProduct = async (id) => {
  const updatedStatus = await prisma.product.update({
    where: {
      id: id,
    },
    data: {
      status: "sold",
    },
  });

  return updatedStatus;
};

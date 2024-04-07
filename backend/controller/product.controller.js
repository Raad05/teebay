import prisma from "../db/db.config.js";

export const createProduct = async (input) => {
  const product = input;

  const newProduct = await prisma.product.create({
    data: product,
  });

  return newProduct;
};

export const getAllProducts = async (req, res) => {
  const result = await prisma.product.findMany({});

  return result;
};

export const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const result = await prisma.product.findUnique({
      where: {
        id: Number(productId),
      },
    });

    return {
      status: 200,
      data: result,
    };
  } catch (e) {
    return {
      status: 400,
      message: "Failed to fetch products",
      error: e,
    };
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    await prisma.product.delete({
      where: {
        id: Number(productId),
      },
    });

    return {
      status: 200,
      message: "Product deleted successfully!",
    };
  } catch (e) {
    return {
      status: 400,
      message: "Failed to delete product.",
      error: e,
    };
  }
};

export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const data = req.body;

    const updatedProduct = await prisma.product.update({
      where: {
        id: Number(productId),
      },
      data: data,
    });

    return {
      status: 200,
      data: updatedProduct,
      message: "Product updated successfully!",
    };
  } catch (e) {
    return {
      status: 400,
      message: "Failed to update product.",
      error: e,
    };
  }
};

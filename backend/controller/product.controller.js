import prisma from "../db/db.config.js";

export const createProduct = async (req, res) => {
  try {
    const product = req.body;

    const newProduct = await prisma.product.create({
      data: product,
    });

    return res.json({
      status: 200,
      data: newProduct,
      message: "Product created successfully!",
    });
  } catch (e) {
    return res.json({
      status: 400,
      message: "Failed to create product.",
      error: e,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const result = await prisma.product.findMany({});

    return res.json({
      status: 200,
      data: result,
    });
  } catch (e) {
    return res.json({
      status: 400,
      message: "Failed to fetch products.",
      error: e,
    });
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

    return res.json({
      status: 200,
      message: "Product deleted successfully!",
    });
  } catch (e) {
    return res.json({
      status: 400,
      message: "Failed to delete product.",
      error: e,
    });
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

    return res.json({
      status: 200,
      data: updatedProduct,
      message: "Product updated successfully!",
    });
  } catch (e) {
    return res.json({
      status: 400,
      message: "Failed to update product.",
      error: e,
    });
  }
};

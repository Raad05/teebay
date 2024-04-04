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

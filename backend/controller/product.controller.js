import prisma from "../db/db.config";

export const createProduct = async (req, res) => {
  try {
    const product = req.body;

    const newProduct = await prisma.product.create({
      data: product,
    });

    res.json({
      status: 200,
      data: newProduct,
      message: "Product created successfully!",
    });
  } catch (e) {
    res.json({ status: 400, message: "Failed to create product.", error: e });
  }
};

export const getProducts = async (req, res) => {
  try {
    const result = await prisma.product.findMany({});

    res.json({
      status: 200,
      data: result,
    });
  } catch (e) {
    res.json({ status: 400, message: "Failed to fetch products.", error: e });
  }
};

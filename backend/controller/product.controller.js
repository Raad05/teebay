import prisma from "../db/db.config";

export const createProduct = async () => {
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

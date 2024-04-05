import prisma from "../db/db.config.js";

export const createRecord = async (req, res) => {
  try {
    const record = req.body;

    const result = await prisma.record.create({
      data: record,
    });

    return res.json({
      status: 200,
      data: result,
    });
  } catch (e) {
    return res.json({
      status: 400,
      message: "Failed to create record.",
      error: e,
    });
  }
};

export const getRecords = async (req, res) => {
  try {
    const result = await prisma.record.findMany({});

    return res.json({
      status: 200,
      data: result,
    });
  } catch (e) {
    return res.json({
      status: 400,
      message: "Failed to fetch records.",
      error: e,
    });
  }
};

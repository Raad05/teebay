import express, { json, urlencoded } from "express";
import cors from "cors";

const app = express();

const port = process.env.PORT || 3000;

// middleware
app.use(cors());

// body parser
app.use(json());
app.use(urlencoded({ extended: true }));

const main = async () => {
  try {
    app.listen(port, () => {
      console.log("Server is running on port:", port);
    });

    app.get("/", (req, res) => {
      res.send("Server is active.");
    });
  } catch (e) {
    console.log("Failed to start server:", e);
  }
};

main();

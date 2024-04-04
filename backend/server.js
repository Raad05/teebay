import express, { json, urlencoded } from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

const port = process.env.PORT || 3000;

// middleware
app.use(cors());

// body parser
app.use(json());
app.use(urlencoded({ extended: true }));

// routes
app.use(routes);

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

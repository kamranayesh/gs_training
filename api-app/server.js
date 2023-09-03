require("dotenv").config();

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const db = require("./db");
const express = require("express");

const app = express();
const PORT_NUMBER = argv.port || 3000;
// console.log(process.argv, argv);
// console.log(process.env.DB_USER, process.env.DB_PASSWORD);
const { rateLimit } = require("express-rate-limit");
const authMiddleware = require("./middlewares/auth");
const testRouter = require("./routes/test");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: "draft-7", // draft-6: RateLimit-* headers; draft-7: combined RateLimit header
  legacyHeaders: false, // X-RateLimit-* headers
});

const helmet = require("helmet");

const morgan = require("morgan");
const { middleware } = require("yargs");

//application setup related
app.use(helmet());
app.use(authMiddleware);
app.use(morgan("dev"));
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/test", testRouter);
app.use("/product", productRouter);
app.use("/auth", userRouter);

//app routes are defined here
app.listen(PORT_NUMBER, (err) => {
  console.log("Attempting to start server...");
  if (err) {
    console.log("failed to start server");
    return process.exit(1);
  }
  console.log(`Starting server on http://localhost:${PORT_NUMBER}`);
  db().catch((e) => console.log("failed to connect with DB", e));
});

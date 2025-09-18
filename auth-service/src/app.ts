import express from "express";
import { Prisma } from "@prisma/client";
import {AuthorizationError} from "./errors/authorizationError"
import { ErrorMiddleware } from "./middleware/error.middleware";
const app = express();

app.get('/', (req, res) => {
  throw new AuthorizationError("testing");
  res.send('welcome to Sangam!');
});

app.use(ErrorMiddleware);


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
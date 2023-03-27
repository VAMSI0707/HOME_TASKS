const express = require('express');
const userRouter = require('./routers/routing');
const port=3000;
const hostname="localhost";
const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Server started at http:\\${hostname}:${port}/`);
});

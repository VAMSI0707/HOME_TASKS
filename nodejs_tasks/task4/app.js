const express = require('express');
const userRouter = require('./routes/routing');
const sequelize = require('./data/sequelize');
const port = 3000;
const hostname = "localhost";
const app = express();

app.use(express.json());

app.use('/users', userRouter);

sequelize.sync().then(()=>{
  console.log('Connected to Database');
});
app.listen(port, () => {
  console.log(`Server started at http://${hostname}:${port}/`);
});


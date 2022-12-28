const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require('./router/userRouter');
const productRouter = require('./router/productRouter');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB.toString(), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("connected")
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/user', userRouter);

app.use('/api/product', productRouter)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
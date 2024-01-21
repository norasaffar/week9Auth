require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 5001;
const cors = require("cors");

const User = require("./user/model");
const Book = require("./book/model");

const userRouter = require("./user/routes");
const bookRouter = require("./book/routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(userRouter);
app.use(bookRouter);

const syncTables = async () => {
    await Book.hasOne(User);
    await User.belongsTo(Book);



  await Book.sync();
  await User.sync({alter:true});
};





app.get("/health", (req, res) => {
    res.status(200).json({message: "API is healthy"})
  
  });


app.listen(port, () =>{
    syncTables();
  console.log(`App is listening on port ${port}`);
});


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


mongoose.connect("mongodb+srv://1099gdivya_db_user:Divya6363@cluster0.qmsmy49.mongodb.net/portfolio?appName=Cluster0")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
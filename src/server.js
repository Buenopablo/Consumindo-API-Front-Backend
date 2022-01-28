const cors = require("cors");
const express = require("express");
const axios = require("axios");
const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");

    // return res.json([{ name: "Pablo" }, { name: "Bueno" }]);
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

const port = 3333;
app.listen(+port);
console.log(`Server running in port ${port}!`);

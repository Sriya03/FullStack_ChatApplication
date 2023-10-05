// to run http server
const express=require("express");
//to call sever from any origin
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

const axios = require("axios");

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-Key": "3a5301f1-c975-441c-a6d3-e30a6d57b852" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);
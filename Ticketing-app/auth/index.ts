const express = require("express");
import { json } from "body-parser";

const app = express();
app.use(json());

app.get("/api/users/currentuser", (req: any, res: any) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("Started auth express at port 3000");
});

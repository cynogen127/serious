const express = require("express");
const app = express();
 
app.listen(3000, function () {
  console.log("listening on 3000");
});
 
app.get("/", (req, res) => {
  res.send("Welcome USER! to MY nodejs app!");
  console.log("welcome url /");
});
 
app.get("/delete", (req, res) => {
  res.send("User was deleted");
  console.log("DELETE user");
});
 
app.get("/create", (req, res) => {
  res.send("User was created!!");
  console.log("CREATE user");
});



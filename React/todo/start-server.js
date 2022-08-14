const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + "/public"));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.listen(port);

console.log("Server is ready at:");
console.log("---------------------");
console.log("http://localhost:" + port);
console.log("---------------------\n");
console.log(
  "After an edit/save of a source file, please refresh your browser:\n"
);

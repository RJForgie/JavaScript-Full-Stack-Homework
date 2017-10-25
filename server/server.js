var express = require("express")
var app = express()

app.use(express.static(__dirname + "/../client/build"))

var languagesRouter = require("./controllers/languages_controller.js")

app.use("/api/languages", languagesRouter)

app.listen(3000, function () {
  console.log("App running")
})

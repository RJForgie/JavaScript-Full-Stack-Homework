var express = require("express")
var languagesRouter = express.Router()
languagesQueryHelper = require("../db/languagesQueryHelper")

languagesRouter.get("/", function (req, res){
  languagesQueryHelper.all(function (languages) {
    res.json(languages)
  })
} )

module.exports = languagesRouter

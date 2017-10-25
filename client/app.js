var requestHelper = require("./helpers/request_helper.js")

window.addEventListener("DOMContentLoaded", function () {
  requestHelper.getRequest("http://localhost:3000/api/languages", function (languages) {

    var mainDiv = document.getElementById("main")

    var list = document.createElement('ul')
    languages.forEach(function (language) {
      var listItem = document.createElement("li")
      listItem.innerText = language.name

      list.appendChild(listItem)
    })

    mainDiv.appendChild(list)
  })
})

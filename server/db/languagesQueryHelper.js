var MongoClient = require("mongodb").MongoClient


var languagesQueryHelper = {
  url: "mongodb://localhost:27017/programming_languages_site",
  all: function (onQueryFinished) {
    MongoClient.connect(this.url, function (err, db) {
      var languagesCollection = db.collection("languages")
      languagesCollection.find().toArray(function(err, docs) {
        onQueryFinished(docs)
      })
    })
  }
}

module.exports = languagesQueryHelper;

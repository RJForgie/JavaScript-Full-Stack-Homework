use programming_languages_site;
db.dropDatabase();

db.languages.insert([
  {
    name: "Java",
    type: "Static",
    week: 5
  },
  {
    name: "Ruby",
    type: "Dynamic",
    week: 1
  },
  {
    name: "JavaScript",
    type: "Dynamic",
    week: 10
  }
]);

db.languages.find();

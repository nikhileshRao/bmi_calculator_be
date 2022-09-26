const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/person/bmi", function (req, res) {
  let person = req.body;
  if (isNaN(person.weightInKg) || isNaN(person.heightInCm)) {
    return res.status(404).send("Invalid Argument Exception");
  } else {
    let weightInKg = Number(person.weightInKg);
    let heightInM = Number(person.heightInCm / 100);
    let bmi = Number(weightInKg / (heightInM * heightInM));
    return res.send(200, bmi);
  }
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});

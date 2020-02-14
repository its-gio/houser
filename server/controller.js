function getHouses(req, res) {
  const db = req.app.get("db");

  db.getHouses()
    .then(housesArr => res.status(200).json(housesArr))
    .catch(err => res.status(400).json(err));
}

function postHouse(req, res) {
  const { name, address, city, state, zipcode, img, monthly_mortgage, desired_rent } = req.body;
  const db = req.app.get("db");

  db.postHouse(name, address, city, state, zipcode, img, monthly_mortgage, desired_rent)
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(400).json(err));
}

module.exports = {
  getHouses,
  postHouse
}
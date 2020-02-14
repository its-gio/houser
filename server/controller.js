function getHouses(req, res) {
  const db = req.app.get("db");

  db.getHouses()
    .then(housesArr => res.status(200).json(housesArr))
    .catch(err => res.status(400).json(err));
}

module.exports = {
  getHouses
}
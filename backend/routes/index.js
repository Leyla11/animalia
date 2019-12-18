const router = require("express").Router();
const Shelter = require("../models/RefugioAlbergue");
const User = require("../models/User");
const Contribution = require("../models/Contribution");

//Create
router.post("/create-new", (req, res, next) => {
  Shelter.create(req.body)
    .then(newCenter => res.status(201).json({ newCenter }))
    .catch(err => res.status(500).json({ err }));
});

//Read
router.get("/centers", async (req, res, next) => {
  try {
    const places = await AllShelter.find();
    console.log(places);
    res.status(200).json({ places });
  } catch (error) {
    console.log(error);
  }
});

router.get("/center/:id", async (req, res, next) => {
  try {
    const place = await AllShelter.findById(req.params.id);
    console.log(place);
    res.status(200).json({ place });
  } catch (error) {
    console.log(error);
  }
});

router.get("/shelter/:AllShelter", async (req, res, next) => {
  try {
    const { categoryCenter } = req.params;
    const centersInCategory = await Shelter.find({
      AllSheter: String(categoryCenter).toUpperCase()
    });
    res.status(200).json({ centersInCategory });
  } catch (error) {
    console.log(error);
  }
});

//Update
router.patch("/center/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const centerUpdated = await AllShelter.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    res.status(202).json({ centerUpdated });
  } catch (e) {
    res.status(500).json({ e });
  }
});

//Delete
router.delete("/center/:id", (req, res, next) => {
  const { id } = req.params;
  Shelter.findByIdAndDelete(id)
    .then(center => res.status(200).json({ center }))
    .catch(error => res.status(500).json({ error }));
});

//Create
router.post("/add-contribution", (req, res, next) => {
  Contribution.create(req.body)
    .then(newContribution => res.status(201).json({ newContribution }))
    .catch(err => res.status(500).json({ err }));
});

//Read
router.get("/contribution-list", async (req, res, next) => {
  try {
    const contributions = await Contribution.find();
    console.log(contributions);
    res.status(200).json({ contributions });
  } catch (error) {
    console.log(error);
  }
});

//Delete
router.delete("/contribution/:id", (req, res, next) => {
  const { id } = req.params;
  Contribution.findByIdAndDelete(id)
    .then(contribution => res.status(200).json({ contribution }))
    .catch(error => res.status(500).json({ error }));
});

module.exports = router;

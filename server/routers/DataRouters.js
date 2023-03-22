import express from "express";
import Neighborhood from "../models/neighborhood.js";
import City from "../models/city.js";
import District from "../models/district.js";
const router = express.Router();

router.post("/dropdownNeigh", async (req, res) => {
  try {
    const { district_id } = req.body;
    const mahalle = await Neighborhood.find({ district_id: district_id });
    res.status(200).json(mahalle);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/dropdownDistrict", async (req, res) => {
  try {
    const { city_id } = req.body;
    const district = await District.find({ city_id: city_id });
    res.status(200).json(district);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/dropdownCity", async (req, res) => {
  try {
    const city = await City.find();
    res.status(200).json(city);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;

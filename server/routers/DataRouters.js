import express from "express";
import Neighborhood from "../models/neighborhood.js";
import City from "../models/city.js";
import District from "../models/district.js";
import Products from "../models/products.js";
import products from "../models/products.js";
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

///Products///

router.get("/products", async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
router.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  console.log("get", req.params);
  try {
    const product = await Products.findById(id);

    if (!product) return;
    res.status(200).json(product);
    console.log("getProducts", product);
  } catch (error) {
    res.status(404).json({ message: "products not found" });
    console.log("products not ok", error);
  }
});

///Detail

router.get("/details/:id", async (req, res) => {
  const { id } = req.params;
  console.log("get", req.params);
  try {
    const detail = await Products.findById(id);

    if (!detail) return;
    res.status(200).json(detail);
    console.log("getProductDetail", detail);
  } catch (error) {
    res.status(404).json({ message: "productDetail not found" });
    console.log("productDetail not ok", error);
  }
});
export default router;

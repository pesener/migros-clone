import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://localhost:5000",
});

export const getDataCity = async () => await HTTP.get("/home/dropdownCity");

export const getDataDistrict = async (city_id) =>
  await HTTP.post("/home/dropdownDistrict", city_id);

export const getDataNeighborhood = async (district_id) =>
  await HTTP.post("/home/dropdownNeigh", district_id);

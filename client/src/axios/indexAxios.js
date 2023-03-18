import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://localhost:5000",
});

export const getDataIl = async () => await HTTP.get("/home/dropDown1");

export const getDataIlce = async () => await HTTP.get("/home/dropDown2");

export const getDataMahalle = async (ilce_id) =>
  await HTTP.post("/home/dropDown3", ilce_id);

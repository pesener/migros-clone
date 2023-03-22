import mongoose from "mongoose";

const districtSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  city_id: {
    type: String,
  },
  district: {
    type: String,
  },
});

export default mongoose.model("District", districtSchema);

import mongoose from "mongoose";

const neighborSchema = mongoose.Schema({
  district_id: {
    type: Number,
  },
  neighborhood: {
    type: String,
  },
});

export default mongoose.model("Neighborhood", neighborSchema);

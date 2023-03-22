import mongoose from "mongoose";

const citySchema = mongoose.Schema({
  id: {
    type: String,
  },
  city: {
    type: String,
  },
});

export default mongoose.model("City", citySchema);

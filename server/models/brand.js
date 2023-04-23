import mongoose from "mongoose";

const brandSchema = mongoose.Schema({
  brand: {
    type: String,
  },
  Qty: {
    type: String,
  },
});

export default mongoose.model("Brand", brandSchema);

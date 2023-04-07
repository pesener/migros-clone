import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
  name: {
    type: String,
  },

  sublink: {
    type: String,
  },
  product: {
    type: String,
  },
});

export default mongoose.model("Products", productsSchema);

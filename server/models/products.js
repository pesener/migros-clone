import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
  name: {
    type: String,
  },

  link: {
    type: String,
  },
  sublink: {
    type: String,
  },
});

export default mongoose.model("Products", productsSchema);

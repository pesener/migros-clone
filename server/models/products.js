import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
  title: {
    type: String,
  },
  subtilte: {
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

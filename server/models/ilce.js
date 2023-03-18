import mongoose from "mongoose";

const ilceSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  il_id: {
    type: String,
  },
  ilce: {
    type: String,
  },
});

export default mongoose.model("Ilce", ilceSchema);

const mongoose = require("mongoose");
const imageUploadedSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },

    userid: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("userImage", imageUploadedSchema);

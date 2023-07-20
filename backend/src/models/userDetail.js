const mongoose = require("mongoose");
const UserDetailSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("userDetail", UserDetailSchema);

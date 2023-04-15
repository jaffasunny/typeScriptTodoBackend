const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    todo: {
      type: String,
      required: [true, "Please add a Todo"],
    },
    completed: {
      type: Boolean,
      required: [true, "Please add the email address"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);

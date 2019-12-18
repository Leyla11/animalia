const { Schema, model } = require("mongoose");
const PLM = require("passport-local-mongoose");

const shelterSchema = new Schema(
  {
    place: String,
    email: {
      type: String,
      unique: true
    },
    address: {
      type: String,
      required: true
    },
    longitud: Number,
    latitud: Number,
    contactNumber: String,
    website: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

shelterSchema.plugin(PLM, { usernameField: "email" });

module.exports = model("RefugioAlbergue", shelterSchema);

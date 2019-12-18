const { Schema, model } = require("mongoose");
const PLM = require("passport-local-mongoose");

const centrosSchema = new Schema(
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
    horario: String,
    contactNumber: String,
    fotoPerfil: {
      type: String,
      default:
        "https://1sfj1635wrts49n9bz3kpi6y-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/no-image-found.png"
    },
    tipoAlbergue: {
      type: String
    },
    website: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

centrosSchema.plugin(PLM, { usernameField: "email" });

module.exports = model("RefugioAlbergue", centrosSchema);

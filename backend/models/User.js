const { Schema, model } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String
    },
    password: {
      type: String
    },
    name: String,
    lastName: String,
    role: {
      type: String,
      enum: ["ADMIN", "USUARIO"],
      default: "USUARIO"
    },
    fotoPerfil: {
      type: String,
      default:
        "https://1sfj1635wrts49n9bz3kpi6y-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/no-image-found.png"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: "email" });

module.exports = model("User", userSchema);

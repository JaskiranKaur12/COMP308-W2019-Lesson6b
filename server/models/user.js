//require modules fro our User models
let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "username is required"
    },
    /* taken out beczo password will be encrypted
    password: {
type: String,
default: '',
trim: true,
required: 'password is required'
    } */
    email: {
      type: String,
      default: true,
      required: "email is required",
      trim: true
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "Display Name is required"
    },
    created: {
      type: Date,
      default: Date.now
    },
    update: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "users"
  }
);
//configure options for user Schema
let options=({
    missingPasswordError: "Wrong/ Missing Password"
});
userSchema.plugin(passportLocalMongoose, options);

module.exports.User=mongoose.model('User',userSchema);

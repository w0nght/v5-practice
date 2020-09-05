/** Set up database schema */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

// Create personSchema Schema to represent a User
// defining fields and types as objects of the Schema
const personSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    messages: { type: String },
    offers: { type: String },
    imagepath: { type: String },
    tiphistory: { type: String }
    // email: {
    //     type: String,
    //     require: true,
    //     unique: 1,
    //     trim: true
    // },
    // password: {
    //     type: String,
    //     require: true,
    //     minlength: 6
    // }
});

personSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
    usernameUnique: true
});

// export the model so we can access it outside of this file
module.exports = mongoose.model("User", personSchema);
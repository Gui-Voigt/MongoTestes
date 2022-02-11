const mongoose = require("mongoose");

const logins = require("./logins");
const DBUSER = logins.DBUSER;
const DBPASS = logins.DBPASS;

const uri = `mongodb+srv://${DBUSER}:${DBPASS}@cluster0.g3y4t.mongodb.net/APIDB?retryWrites=true&w=majority`
const configs = {};

module.exports = () => mongoose.connect(uri , configs);
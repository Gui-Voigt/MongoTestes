const mongoose = require('mongoose');

//Criará a collection chamada Person
const Person = mongoose.model('Person', {
    name: String,
    salary: Number,
    approved: Boolean,
}); 

module.exports = Person;
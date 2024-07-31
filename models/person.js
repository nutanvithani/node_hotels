const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    require: true

  },
  mobile: {
    type: Number,
    require: true
  },
  work: {
    type: String,
    require: true,
    enum:['teacher','docter','manager']
  },
  salary: {
    type: Number,
    require: true
  }
});

const Person = mongoose.model('Person', personSchema);
module.exports = Person;

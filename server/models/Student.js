const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  phone: String,
  course: String,
  joinDate: Date,
});

module.exports = mongoose.model('Student', studentSchema);

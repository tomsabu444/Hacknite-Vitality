const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  marks: {
    type: Object,
    required: true
  },
  total_marks: {
    type: Number,
    required: true
  }
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;

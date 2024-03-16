const mongoose = require('mongoose');
const Teacher = require('./teacherModel');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/check', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

async function storeDataInMongoDB(jsonData) {
  try {
    // Create a new Teacher instance
    const teacherData = new Teacher({
      marks: jsonData.marks,
      total_marks: jsonData.total_marks
    });

    // Save the data to MongoDB
    const savedData = await teacherData.save();
    console.log('Data saved to MongoDB:', savedData);
  } catch (error) {
    console.error("Error storing data in MongoDB: ", error);
  }
}
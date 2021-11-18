const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
    });
    console.log('Database Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit proccess with failure
    process.exit(1);
  }
};

module.exports = connectDB;


// const mongoose = require('mongoose');
// const config = require('config');
// // const db = config.mongoURI;
// // console.log(db);

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb+srv://sainathkadam:75TUDAYQXF0cTqGr@cluster0.ugszbmf.mongodb.net/?retryWrites=true&w=majority");
//     console.log('MongoDB is Connected...');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
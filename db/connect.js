const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
// mongoose
//   .connect(connectionString, {
//     //Irrelavant in mongoose v6+
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("CONNECTED TO THE DB..."))
//   .catch((err) => console.log(err));

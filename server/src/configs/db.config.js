const mongoose = require("mongoose");
const bluebird = require("bluebird");
const uri = process.env.MONGODB_URI;

async function mongoConnect() {
  try {
    mongoose.Promise = bluebird;
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: true,
        // useCreateIndex: false,
      })
      .then(() => console.log("Database connected!"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log("Conect database disconnect");
  }
}

module.exports = mongoConnect;

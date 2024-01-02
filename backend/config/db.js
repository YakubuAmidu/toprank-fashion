import mongoose from "mongoose";

const connectedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected successfully...💥");
  } catch (error) {
    console.log(`ERROR: 💥 ${error.message}`);
    process.exit(1);
  }
};

export default connectedDB;

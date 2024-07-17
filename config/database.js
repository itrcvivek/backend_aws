const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI)
    .then((data) => {
        console.log(`MongoDB connected with server: ${data.connection.host}`);
    }).catch((error) => {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    });
};

module.exports = connectDatabase;
// =================================

// import mongoose from "mongoose";

// const connectDatabase = () => {
//     mongoose.connect(process.env.DB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }).then(() => {
//         console.log("MongoDB connected successfully");
//     }).catch((error) => {
//         console.log(`Error: ${error.message}`);
//     });
// };

// export default connectDatabase;


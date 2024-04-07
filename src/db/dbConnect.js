require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // console.log(`MongoDB connecting: ${process.env.MONG_URI}`);
        const conn = await mongoose.connect(process.env.MONG_URI)
        // console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        // process.exit(1);
    }
};

module.exports = connectDB;
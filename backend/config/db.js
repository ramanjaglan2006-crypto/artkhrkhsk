const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

let isConnected = false;

const connectDB = async () => {
    if (isConnected) return;

    if (!process.env.MONGO_URI) {
        console.warn('⚠️ MONGO_URI is not defined in environment variables. Database operations will be skipped or mocked.');
        return;
    }

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
        });
        isConnected = true;
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB connection failed: ${error.message}`);
    }
};

module.exports = connectDB;

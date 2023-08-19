import mongoose from "mongoose"

let isConnected = false;

const dbConnect = async () => {
    mongoose.set('strictQuery', true)

    try {
        if(isConnected) {
            console.log('MongoDB is already connected');
            return;
        }

        const db =await mongoose.connect(process.env.MONGODB_URI as string, {
            dbName: process.env.MONGODB_DB,
        })

        if (db.connection.readyState) {
            isConnected = true;
            console.log('MongoDB is connected');
        } else {
            throw new Error('MongoDB connection failed');
        }

    } catch (error: any) {
        console.log(error);
        throw new Error(error)
    }
}

export default dbConnect;
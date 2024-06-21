import mongoose from 'mongoose'
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB Connected:')
    } catch (error) {
        console.error("error connecting to database", error)
    }
}
export default connectDb

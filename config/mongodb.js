import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    console.log('MONGO_URI:', process.env.MONGO_URI) // ✅ Add this debug line
    await mongoose.connect(process.env.MONGO_URI)
    console.log('✅ MongoDB connected')
  } catch (err) {
    console.error('❌ MongoDB connection error:', err)
    process.exit(1)
  }
}

export default connectDB

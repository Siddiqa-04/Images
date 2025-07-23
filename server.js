// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/mongodb.js'
// import userRouter from './routes/userRoutes.js'
// import imageRouter from './routes/imageRoutes.js'

// const PORT = process.env.PORT || 5000
// const app = express()

// app.use(express.json())
// app.use(cors())
// await connectDB()

// app.use('/api/user', userRouter)
// app.use('/api/image', imageRouter)
// app.get('/', (req, res)=> res.send("API Working"))

// app.listen(PORT, () => console.log('Server running on port ' + PORT))


import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

const PORT = 5000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Start the server
const startServer = async () => {
  try {
    await connectDB();

    // Routes
    app.use('/api/user', userRouter);
    app.use('/api/image', imageRouter);

    app.get('/', (req, res) => {
      res.send('✅ API Working');
    });

    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Server startup error:', err.message);
    process.exit(1); // Exit on failure
  }
};

startServer();

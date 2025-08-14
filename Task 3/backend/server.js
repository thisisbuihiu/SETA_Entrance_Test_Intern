const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Basic testing route
app.get('/', (req, res) => {
  res.json({ message: 'Posts API is running!' });
});

//Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

//Posts routes
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter);

//Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

//MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/posts_app';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection failed:', error.message);
    console.log('📝 Using local MongoDB fallback...');
    
    //Fallback to local MongoDB
    mongoose.connect('mongodb://localhost:27017/posts_app')
      .then(() => {
        console.log('✅ Connected to local MongoDB');
        app.listen(PORT, () => {
          console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
      })
      .catch((localError) => {
        console.error('❌ Local MongoDB also failed:', localError.message);
        console.log('🔧 Please install MongoDB or check your Atlas connection');
        process.exit(1);
      });
  });


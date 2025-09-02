import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/product.routes.js';

// Load environment variables from .env file
dotenv.config();
console.log('Checking Environment Variables:', { MONGO_URI: process.env.MONGO_URI });

// Connect to the database
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Main API route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Electromart API!' });
});

// Use the product routes
// Any request to /api/products will be handled by productRoutes
app.use('/api/products', productRoutes);

/*app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});*/

export default app;
import mongoose from 'mongoose';

// --- NEW: A sub-schema for individual reviews ---
// This allows us to store an array of review objects for each product.
const reviewSchema = new mongoose.Schema(
  {
    // Link the review to a specific user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // This creates a reference to the 'User' model
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    // --- IMPROVED: Pricing ---
    price: { // The current selling price
      type: Number,
      required: true,
      min: 0,
    },
    originalPrice: { // The old price, to show a discount (e.g., "was $100")
      type: Number,
      required: false, // Optional, only needed if the product is on sale
    },
    // --- IMPROVED: Image Gallery ---
    imageUrls: {
      type: [String], // An array of strings for multiple images
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: { // --- NEW: Added a brand field ---
      type: String,
      required: false,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0, // Set a default value
    },
    // --- NEW: Ratings and Reviews System ---
    reviews: [reviewSchema], // An array of review objects
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
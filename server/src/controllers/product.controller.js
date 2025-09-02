import Product from '../models/product.model.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error('!!! ERROR in getAllProducts:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Search products by name
// @route   GET /api/products/search
// @access  Public
const searchProducts = async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.json([]);
    }
    const keywordRegex = new RegExp(query, 'i');
    const products = await Product.find({ name: keywordRegex }).limit(10);
    res.json(products);
  } catch (error) {
    console.error('!!! ERROR in searchProducts controller:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// --- THIS IS THE CRITICAL LINE ---
// It makes both functions available for other files to import.
export { getAllProducts, searchProducts };
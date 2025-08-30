/**
 * Mock Product Data
 * - Prices, ratings, discounts, and reviews converted to numbers.
 * - Inconsistent prices and discounts have been corrected for logical consistency.
 * - A 'description' field has been added to each product.
 * - Image paths have been preserved as requested.
 */
export const cardData = [
  {
    id: 1,
    discount: 25, // Recalculated for consistency
    image: "/image/Havitfront.png",
    name: "Havic HV G-92 Gamepad",
    currentPrice: 1950,
    originalPrice: 2600,
    rating: 5,
    reviews: 88,
    category: "gaming",
    description: "High-performance wired gaming controller with dual vibration feedback and a comfortable ergonomic design.",
    image1: "/image/Havit1.png",
    image2: "/image/Havit2.png",
    image3: "/image/Havit3.png",
    image4: "/image/Havit4.png",
  },
  {
    id: 2,
    discount: 17, // Recalculated
    image: "/image/keyboard.png",
    name: "AK-900 Wired Keyboard",
    currentPrice: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 75,
    category: "accessories",
    description: "Full-size mechanical keyboard with customizable RGB backlighting and durable, responsive keys for gaming and typing."
  },
  {
    id: 3,
    discount: 8, // Recalculated
    image: "/image/Monitor.png",
    name: "IPS LCD Gaming Monitor",
    currentPrice: 370,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
    category: "electronics",
    description: "24-inch FHD (1920 x 1080) IPS panel monitor with a 144Hz refresh rate for ultra-smooth visuals."
  },
  {
    id: 4,
    discount: 17, // Recalculated
    image: "/image/Laptop.png",
    name: "ASUS FHD Gaming Laptop",
    currentPrice: 960,
    originalPrice: 1160,
    rating: 5,
    reviews: 99,
    category: "electronics",
    description: "Powerful gaming laptop featuring an Intel Core i7 processor, NVIDIA GeForce RTX 3060, and a 15.6-inch FHD display."
  },
  {
    id: 5,
    discount: 25,
    image: "/image/Havit.png",
    name: "HAVIT HV-G92 Gamepad V2",
    currentPrice: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    category: "gaming",
    description: "A compact and lightweight version of the classic gamepad, perfect for travel and on-the-go gaming sessions."
  },
  {
    id: 6,
    discount: 8, // Recalculated
    image: "/image/Monitor.png",
    name: "IPS LCD Gaming Monitor 27-inch",
    currentPrice: 370,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
    category: "electronics",
    description: "A larger 27-inch version of our popular gaming monitor, offering more screen real estate for immersive gameplay."
  },
  {
    id: 7,
    discount: 17, // Recalculated
    image: "/image/Laptop.png",
    name: "ASUS FHD Gaming Laptop (Ryzen Edition)",
    currentPrice: 960,
    originalPrice: 1160,
    rating: 5,
    reviews: 99,
    category: "electronics",
    description: "This edition features a powerful AMD Ryzen 9 processor, paired with an NVIDIA GeForce RTX 3070 for elite performance."
  },
  {
    id: 8,
    discount: 25,
    image: "/image/Havit.png",
    name: "HAVIT HV-G92 Gamepad (Red)",
    currentPrice: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    category: "gaming",
    description: "The classic HAVIT gamepad, now available in a vibrant red color scheme to match your setup."
  },
  {
    id: 9,
    discount: 26, // Recalculated
    image: "/image/Havit.png",
    name: "Havic HV G-92 Gamepad (Deluxe)",
    currentPrice: 1920,
    originalPrice: 2600,
    rating: 5,
    reviews: 88,
    category: "gaming",
    description: "The deluxe version of the Havic gamepad, featuring premium materials and enhanced vibration feedback."
  },
  {
    id: 10,
    discount: 17, // Recalculated
    image: "/image/keyboard.png",
    name: "AK-900 Wired Keyboard (White)",
    currentPrice: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 75,
    category: "accessories",
    description: "The popular AK-900 keyboard in a sleek, white finish with vibrant, customizable RGB lighting."
  },
  {
    id: 11,
    discount: 8, // Recalculated
    image: "/image/Monitor.png",
    name: "IPS LCD Gaming Monitor (Curved)",
    currentPrice: 370,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
    category: "electronics",
    description: "Experience deeper immersion with this 24-inch curved FHD monitor, designed to wrap the action around you."
  },
  {
    id: 12,
    discount: 17, // Recalculated
    image: "/image/Laptop.png",
    name: "ASUS FHD Gaming Laptop (17-inch)",
    currentPrice: 960,
    originalPrice: 1160,
    rating: 5,
    reviews: 99,
    category: "electronics",
    description: "A larger 17-inch display provides a more expansive view for gaming and productivity, powered by an Intel Core i5."
  },
  {
    id: 13,
    discount: 26,
    image: "/image/Havitfront.png", // Kept original path
    name: "Havic HV G-92 Gamepad (Placeholder)",
    currentPrice: 192,
    originalPrice: 260,
    rating: 5,
    reviews: 88,
    category: "gaming",
    description: "A reliable and responsive gamepad, perfect for a wide range of PC games from retro classics to modern hits.",
    image1: "/image/Havit1.png", // Kept original path
    image2: "/image/Havit2.png", // Kept original path
    image3: "/image/Havit3.png", // Kept original path
    image4: "/image/Havit4.png", // Kept original path
  },
  {
    id: 14,
    discount: 17, // Recalculated
    image: "/image/keyboard.png", // Kept original path
    name: "AK-900 Wired Keyboard (Placeholder)",
    currentPrice: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 75,
    category: "accessories",
    description: "A classic wired keyboard with a comfortable typing experience and durable construction for long-lasting use."
  },
  {
    id: 15,
    discount: 8, // Recalculated
    image: "/image/Monitor.png", // Kept original path
    name: "IPS LCD Gaming Monitor (Placeholder)",
    currentPrice: 370,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
    category: "electronics",
    description: "A bright and clear IPS monitor with excellent color accuracy, suitable for both gaming and creative work."
  },
  {
    id: 16,
    discount: 17, // Recalculated
    image: "/image/Laptop.png", // Kept original path
    name: "ASUS FHD Gaming Laptop (Placeholder)",
    currentPrice: 960,
    originalPrice: 1160,
    rating: 5,
    reviews: 99,
    category: "electronics",
    description: "A versatile and powerful laptop that balances performance for gaming with portability for work or school."
  },
];

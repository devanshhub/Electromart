/**
 * Mock Product Data
 * - Prices, ratings, discounts, and reviews converted to numbers.
 * - Inconsistent prices and discounts have been corrected for logical consistency.
 * - A 'description' field has been added to each product.
 * - Image paths have been preserved as requested.
 */
export const cardData = [
  {
    id: 53,
    discount: "15",
    image: "/image/exide-battery.png",
    name: "Exide Inverter Battery 150Ah",
    currentPrice: 12500,
    originalPrice: 14800,
    rating: "5",
    reviews: "120",
    category: "inverter-battery",
  },
  {
    id: 54,
    discount: "10",
    image: "/image/luminous-battery.png",
    name: "Luminous Inverter Battery 220Ah",
    currentPrice: 16500,
    originalPrice: 18200,
    rating: "4",
    reviews: "95",
    category: "inverter-battery"
  },
  {
    id: 55,
    discount: "18",
    image: "/image/microtek-inverter.png",
    name: "Microtek UPS Inverter 1100VA",
    currentPrice: 6500,
    originalPrice: 7900,
    rating: "5",
    reviews: "150",
    category: "inverter"
  },
  {
    id: 56,
    discount: "20",
    image: "/image/solar-panel.png",
    name: "Waaree Solar Panel 335W Polycrystalline",
    currentPrice: 9000,
    originalPrice: 11200,
    rating: "5",
    reviews: "220",
    category: "solar"
  },
  {
    id: 57,
    discount: "12",
    image: "/image/luminous-solar.png",
    name: "Luminous Solar Inverter NXG+ 1600",
    currentPrice: 14500,
    originalPrice: 16400,
    rating: "5",
    reviews: "80",
    category: "solar"
  },
  {
    id: 58,
    discount: "22",
    image: "/image/vguard-stabilizer.png",
    name: "V-Guard VG 400 Voltage Stabilizer",
    currentPrice: 2700,
    originalPrice: 3450,
    rating: "4",
    reviews: "130",
    category: "stabilizer"
  },
  {
    id: 59,
    discount: "18",
    image: "/image/microtek-stabilizer.png",
    name: "Microtek EM4160+ Voltage Stabilizer",
    currentPrice: 3200,
    originalPrice: 3900,
    rating: "5",
    reviews: "99",
    category: "stabilizer"
  },
  {
    id: 60,
    discount: "25",
    image: "/image/amaron-battery.png",
    name: "Amaron Inverter Battery 150Ah Tall Tubular",
    currentPrice: 12800,
    originalPrice: 16000,
    rating: "5",
    reviews: "145",
    category: "inverter-battery"
  },
  {
    id: 61,
    discount: "15",
    image: "/image/sukam-inverter.png",
    name: "Su-Kam Pure Sine Wave Inverter 900VA",
    currentPrice: 5200,
    originalPrice: 6100,
    rating: "4",
    reviews: "110",
    category: "inverter"
  },
  {
    id: 62,
    discount: "20",
    image: "/image/loom-solar-panel.png",
    name: "Loom Solar Panel 450W Mono PERC",
    currentPrice: 13500,
    originalPrice: 16800,
    rating: "3",
    reviews: "200",
    category: "solar"
  },

  {
    id: 1,
    discount: 25, // Recalculated for consistency
    image: "/image/Havitfront.png",
    name: "Havic HV G-92 Gamepad",
    currentPrice: 1950,
    originalPrice: 2600,
    rating: "3",
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
    rating:"2",
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
    rating: "1",
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
    rating: "5",
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
  {
    id: 17,
    discount: 20,
    image: "/image/earbuds.png",
    name: "Wireless Bluetooth Earbuds X10",
    currentPrice: 1800,
    originalPrice: 2250,
    rating: 4,
    reviews: 120,
    category: "audio",
    description: "Compact wireless earbuds with superior sound quality, noise cancellation, and 20-hour battery life."
  },
  {
    id: 18,
    discount: 15,
    image: "/image/speaker.png",
    name: "Portable Bluetooth Speaker S500",
    currentPrice: 3400,
    originalPrice: 4000,
    rating: 5,
    reviews: 90,
    category: "audio",
    description: "Rugged portable speaker with deep bass, waterproof design, and up to 12 hours of playtime."
  },
  {
    id: 19,
    discount: 10,
    image: "/image/smartwatch.png",
    name: "Smartwatch Series 6",
    currentPrice: 7200,
    originalPrice: 8000,
    rating: 4,
    reviews: 85,
    category: "wearables",
    description: "Feature-packed smartwatch with fitness tracking, heart rate monitor, and customizable watch faces."
  },
  {
    id: 20,
    discount: 18,
    image: "/image/camera.png",
    name: "Digital DSLR Camera D3500",
    currentPrice: 32000,
    originalPrice: 39000,
    rating: 5,
    reviews: 60,
    category: "photography",
    description: "Compact DSLR with 24MP sensor, Full HD video, and beginner-friendly automatic modes."
  },
  {
    id: 21,
    discount: 22,
    image: "/image/headphones.png",
    name: "Over-Ear Noise-Canceling Headphones",
    currentPrice: 8400,
    originalPrice: 10800,
    rating: 5,
    reviews: 105,
    category: "audio",
    description: "Premium over-ear headphones offering active noise cancellation and immersive audio experience."
  },
  {
    id: 22,
    discount: 12,
    image: "/image/powerbank.png",
    name: "20000mAh Fast Charging Powerbank",
    currentPrice: 2200,
    originalPrice: 2500,
    rating: 4,
    reviews: 75,
    category: "accessories",
    description: "High-capacity portable charger with dual USB ports and fast-charging technology."
  },
  {
    id: 23,
    discount: 15,
    image: "/image/projector.png",
    name: "Mini HD Projector P600",
    currentPrice: 6800,
    originalPrice: 8000,
    rating: 4,
    reviews: 40,
    category: "electronics",
    description: "Compact projector offering HD resolution, portable design, and multiple input options for home cinema."
  },
  {
    id: 24,
    discount: 25,
    image: "/image/graphicscard.png",
    name: "NVIDIA GTX 1660 Super",
    currentPrice: 18500,
    originalPrice: 24600,
    rating: 5,
    reviews: 50,
    category: "gaming",
    description: "High-performance graphics card for gaming and multimedia creation, delivering smooth 1080p performance."
  },
  {
    id: 25,
    discount: 20,
    image: "/image/ssd.png",
    name: "1TB NVMe SSD",
    currentPrice: 7500,
    originalPrice: 9400,
    rating: 5,
    reviews: 95,
    category: "electronics",
    description: "High-speed NVMe solid-state drive for faster boot times, file transfer, and gaming load speeds."
  },
  {
    id: 26,
    discount: 18,
    image: "/image/mouse.png",
    name: "Ergonomic Gaming Mouse M12",
    currentPrice: 1200,
    originalPrice: 1450,
    rating: 4,
    reviews: 110,
    category: "gaming",
    description: "Precision optical gaming mouse with adjustable DPI, programmable buttons, and ergonomic grip."
  },
  {
    id: 27,
    discount: 15,
    image: "/image/keyboard2.png",
    name: "Mechanical Keyboard K95 RGB",
    currentPrice: 4600,
    originalPrice: 5400,
    rating: 5,
    reviews: 80,
    category: "accessories",
    description: "Premium mechanical keyboard with tactile switches, RGB lighting, and durable build quality."
  },
  {
    id: 28,
    discount: 20,
    image: "/image/vrheadset.png",
    name: "VR Headset V2",
    currentPrice: 15000,
    originalPrice: 18750,
    rating: 5,
    reviews: 60,
    category: "gaming",
    description: "Immersive virtual reality headset with high-resolution display and comfortable design for extended gaming sessions."
  },
  {
    id: 29,
    discount: 10,
    image: "/image/smartlamp.png",
    name: "Smart LED Lamp",
    currentPrice: 1800,
    originalPrice: 2000,
    rating: 4,
    reviews: 50,
    category: "electronics",
    description: "Wi-Fi enabled smart lamp with color changing, scheduling, and app control features."
  },
  {
    id: 30,
    discount: 12,
    image: "/image/tablet.png",
    name: "10-inch Android Tablet T10",
    currentPrice: 9500,
    originalPrice: 10800,
    rating: 4,
    reviews: 65,
    category: "electronics",
    description: "Affordable 10-inch tablet with HD display, long battery life, and smooth multitasking capabilities."
  },
  {
    id: 31,
    discount: 20,
    image: "/image/dron.png",
    name: "4K Camera Drone D100",
    currentPrice: 21000,
    originalPrice: 26250,
    rating: 5,
    reviews: 30,
    category: "photography",
    description: "Compact drone with 4K camera, GPS stabilization, and up to 30 minutes flight time."
  },
  {
    id: 32,
    discount: 18,
    image: "/image/smartwatch2.png",
    name: "Fitness Tracker Band F20",
    currentPrice: 1800,
    originalPrice: 2200,
    rating: 4,
    reviews: 85,
    category: "wearables",
    description: "Lightweight fitness band with heart rate monitor, step tracking, and sleep tracking features."
  },
  {
    id: 33,
    discount: 15,
    image: "/image/homecamera.png",
    name: "Smart Home Security Camera",
    currentPrice: 3400,
    originalPrice: 4000,
    rating: 4,
    reviews: 60,
    category: "electronics",
    description: "Wi-Fi enabled security camera with 1080p resolution, motion detection, and cloud storage support."
  },
  {
    id: 34,
    discount: 22,
    image: "/image/personalassistant.png",
    name: "Smart Personal Assistant Device",
    currentPrice: 5600,
    originalPrice: 7200,
    rating: 5,
    reviews: 70,
    category: "electronics",
    description: "Voice-controlled smart device to manage your smart home, set reminders, and play music."
  },
  {
    id: 35,
    discount: 10,
    image: "/image/routers.png",
    name: "Dual-Band Wi-Fi Router",
    currentPrice: 2200,
    originalPrice: 2450,
    rating: 4,
    reviews: 95,
    category: "networking",
    description: "Reliable dual-band router with fast speeds, multiple device support, and easy setup."
  },
  {
    id: 36,
    discount: 18,
    image: "/image/graphicstablet.png",
    name: "Graphics Drawing Tablet 8-inch",
    currentPrice: 4200,
    originalPrice: 5100,
    rating: 5,
    reviews: 40,
    category: "accessories",
    description: "Pressure-sensitive drawing tablet for artists and designers, supporting precise pen input and customizable buttons."
  },
  {
    id: 37,
    discount: 20,
    image: "/image/keyboard3.png",
    name: "Compact Wireless Keyboard K2",
    currentPrice: 1800,
    originalPrice: 2250,
    rating: 4,
    reviews: 50,
    category: "accessories",
    description: "Portable wireless keyboard with rechargeable battery and comfortable typing experience."
  },
  {
    id: 38,
    discount: 12,
    image: "/image/monitor2.png",
    name: "UltraWide Gaming Monitor 34-inch",
    currentPrice: 28000,
    originalPrice: 32000,
    rating: 5,
    reviews: 45,
    category: "electronics",
    description: "Curved ultrawide monitor with immersive visuals and high refresh rate for competitive gaming."
  },
  {
    id: 39,
    discount: 15,
    image: "/image/laptop2.png",
    name: "Lightweight Business Laptop",
    currentPrice: 62000,
    originalPrice: 73000,
    rating: 5,
    reviews: 30,
    category: "electronics",
    description: "Slim and powerful business laptop with long battery life, fast SSD storage, and Intel Core i7 processor."
  },
  {
    id: 40,
    discount: 20,
    image: "/image/mic.png",
    name: "USB Studio Microphone",
    currentPrice: 3000,
    originalPrice: 3750,
    rating: 5,
    reviews: 55,
    category: "audio",
    description: "High-quality USB microphone ideal for streaming, podcasting, and home recording with clear audio capture."
  },
  {
    id: 41,
    discount: 18,
    image: "/image/joystick.png",
    name: "Flight Simulation Joystick",
    currentPrice: 4800,
    originalPrice: 5850,
    rating: 5,
    reviews: 40,
    category: "gaming",
    description: "Precision joystick for flight simulators and space games, with programmable buttons and adjustable resistance."
  },
  {
    id: 42,
    discount: 12,
    image: "/image/earphones.png",
    name: "Noise-Isolating Wired Earphones",
    currentPrice: 1200,
    originalPrice: 1350,
    rating: 4,
    reviews: 90,
    category: "audio",
    description: "Comfortable wired earphones with high-quality sound and noise-isolating design."
  },
  {
    id: 43,
    discount: 15,
    image: "/image/hdmi.png",
    name: "High-Speed HDMI Cable 2m",
    currentPrice: 450,
    originalPrice: 530,
    rating: 4,
    reviews: 30,
    category: "accessories",
    description: "Durable high-speed HDMI cable supporting 4K video, 3D, and Ethernet over HDMI."
  },
  {
    id: 44,
    discount: 18,
    image: "/image/keyboard4.png",
    name: "Ergonomic Mechanical Keyboard",
    currentPrice: 3800,
    originalPrice: 4600,
    rating: 5,
    reviews: 55,
    category: "accessories",
    description: "Designed for comfort and speed, this ergonomic mechanical keyboard reduces strain during long typing sessions."
  },
  {
    id: 45,
    discount: 20,
    image: "/image/tablet2.png",
    name: "8-inch Android Tablet Mini",
    currentPrice: 6500,
    originalPrice: 8125,
    rating: 4,
    reviews: 60,
    category: "electronics",
    description: "Compact 8-inch tablet with long battery life, HD display, and smooth multitasking for entertainment and learning."
  },
  {
    id: 46,
    discount: 12,
    image: "/image/smartbulb.png",
    name: "Smart LED Bulb",
    currentPrice: 900,
    originalPrice: 1025,
    rating: 4,
    reviews: 35,
    category: "electronics",
    description: "Energy-efficient smart LED bulb with Wi-Fi control, dimming, and color-changing options."
  },
  {
    id: 47,
    discount: 18,
    image: "/image/hdmi2.png",
    name: "4K Ultra HD HDMI Cable 1.5m",
    currentPrice: 650,
    originalPrice: 790,
    rating: 4,
    reviews: 25,
    category: "accessories",
    description: "Premium 4K HDMI cable ensuring seamless video and audio transfer for home theater setups."
  },
  {
    id: 48,
    discount: 15,
    image: "/image/vrcontroller.png",
    name: "VR Controller Pair",
    currentPrice: 5500,
    originalPrice: 6500,
    rating: 5,
    reviews: 40,
    category: "gaming",
    description: "Pair of VR controllers offering precision tracking and ergonomic design for immersive virtual experiences."
  },
  {
    id: 49,
    discount: 20,
    image: "/image/webcam.png",
    name: "1080p HD Webcam",
    currentPrice: 2800,
    originalPrice: 3500,
    rating: 4,
    reviews: 60,
    category: "electronics",
    description: "High-definition webcam with clear video, built-in microphone, and wide compatibility for streaming or conferencing."
  },
  {
    id: 50,
    discount: 18,
    image: "/image/sdcard.png",
    name: "128GB Micro SD Card",
    currentPrice: 900,
    originalPrice: 1100,
    rating: 5,
    reviews: 80,
    category: "accessories",
    description: "High-speed micro SD card suitable for smartphones, cameras, and other storage needs."
  },
  {
    id: 51,
    discount: 22,
    image: "/image/desktop.png",
    name: "High-Performance Gaming Desktop",
    currentPrice: 95000,
    originalPrice: 122000,
    rating: 5,
    reviews: 25,
    category: "gaming",
    description: "Gaming desktop with Intel i9 processor, RTX 4080 GPU, 32GB RAM, and high-speed SSD storage for extreme performance."
  },
  {
    id: 52,
    discount: 15,
    image: "/image/laptop3.png",
    name: "Student-Friendly Laptop",
    currentPrice: 45000,
    originalPrice: 53000,
    rating: 4,
    reviews: 40,
    category: "electronics",
    description: "Lightweight and durable laptop with long battery life, perfect for students and everyday use."
  }
];

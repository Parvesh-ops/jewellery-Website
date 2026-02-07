import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Royal Gold Necklace",
    price:  120000,
    category: "Necklace",
    type: "Gold",
    image: "https://shrishyamjewellers.in/wp-content/uploads/2025/06/Necklace1-1.png",
    description:
      "An elegant 22K handcrafted gold necklace designed for weddings and special occasions. Features a timeless design with fine detailing and premium finishing.",
    rating: 4.8,
    reviews: [
      { name: "Sita Sharma", comment: "Absolutely stunning necklace!", date: "2026-01-05" },
      { name: "Ramesh Thapa", comment: "My wife loved it, perfect gift.", date: "2026-01-10" }
    ]
  },
  {
    id: 2,
    name: "Classic Gold Chain",
    price:  85000,
    category: "Chain",
    type: "Gold",
    image: "https://medleyjewellery.com.au/cdn/shop/files/classic-curb-chain-necklace-in-gold-medley-jewellery-necklace-41227213111526_1800x1800.jpg?v=1724214176",
    description:
      "A lightweight yet durable gold chain made from pure 22K gold. Ideal for daily wear and pairs beautifully with pendants.",
    rating: 4.5,
    reviews: [
      { name: "Anita KC", comment: "Looks premium and feels durable.", date: "2026-01-08" }
    ]
  },
  {
    id: 3,
    name: "Diamond Stud Earrings",
    price:  150000,
    category: "Earrings",
    type: "Diamond",
    image: "https://uncommonjames.com/cdn/shop/files/J18E-MAKEITSHINE-GOLD-1.jpg?v=1752676156&width=1946",
    description:
      "Premium diamond stud earrings crafted with precision. Perfect for formal events and everyday elegance with a sparkling finish.",
    rating: 5,
    reviews: [
      { name: "Binod Rai", comment: "Sparkles beautifully!", date: "2026-01-12" },
      { name: "Maya Gurung", comment: "High-quality diamonds, very happy.", date: "2026-01-14" }
    ]
  },
  {
    id: 4,
    name: "Traditional Gold Bangles",
    price:  200000,
    category: "Bangle",
    type: "Gold",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV28p9tynDKZRkSmjtj2Ot-gwIG_ACNaBzSQ&s",
    description:
      "A pair of traditional 22K gold bangles inspired by Nepali cultural designs. Ideal for weddings and festive celebrations.",
    rating: 4.7,
    reviews: [
      { name: "Prakash Lama", comment: "Beautiful design and perfect weight.", date: "2026-01-15" }
    ]
  },
  {
    id: 5,
    name: "Silver Anklet Set",
    price:  18000,
    category: "Anklet",
    type: "Silver",
    image: "https://www.matapayals.com/cdn/shop/files/Anklet_4.jpg?v=1749906922&width=720",
    description:
      "Beautifully crafted silver anklets with delicate patterns. Lightweight, comfortable, and perfect for everyday ethnic wear.",
    rating: 4.3,
    reviews: [
      { name: "Sanjana Rai", comment: "Very cute and comfortable!", date: "2026-01-11" }
    ]
  },
  {
    id: 6,
    name: "Platinum Engagement Ring",
    price:  320000,
    category: "Ring",
    type: "Platinum",
    image: "https://www.rockher.com/cdn/shop/articles/Gold_vs_Platinum_Engagement_Ring__Which_to_Choose_520x500_194d945f-29bb-4fac-afda-b04c707bc76d_1200x630.jpg?v=1736975479",
    description:
      "A luxurious platinum engagement ring designed for lasting brilliance. Features a sleek modern design with superior durability.",
    rating: 4.9,
    reviews: [
      { name: "Rajan Adhikari", comment: "Exactly what we wanted for engagement!", date: "2026-01-18" }
    ]
  },
  {
    id: 7,
    name: "Gold Pendant with Chain",
    price:  65000,
    category: "Pendant",
    type: "Gold",
    image: "https://static.wixstatic.com/media/980b5c_a4274e78511a431fa2d607f30c678aab~mv2.jpg/v1/fill/w_480,h_534,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/980b5c_a4274e78511a431fa2d607f30c678aab~mv2.jpg",
    description:
      "A minimalistic gold pendant paired with a matching chain. Perfect for daily wear and gifting purposes.",
    rating: 4.4,
    reviews: [
      { name: "Meena Shrestha", comment: "Delicate and elegant.", date: "2026-01-20" }
    ]
  },
  {
    id: 8,
    name: "Diamond Necklace Set",
    price:  450000,
    category: "Necklace",
    type: "Diamond",
    image: "/images/necklace2.jpg",
    description:
      "A premium diamond necklace set crafted for luxury occasions. Designed to enhance bridal and party looks.",
    rating: 5,
    reviews: [
      { name: "Rohit Kc", comment: "Absolutely gorgeous set!", date: "2026-01-22" }
    ]
  },
  {
    id: 9,
    name: "Silver Bracelet",
    price:  22000,
    category: "Bracelet",
    type: "Silver",
    image: "/images/bracelet1.jpg",
    description:
      "Stylish silver bracelet with a modern finish. Suitable for both casual and formal wear.",
    rating: 4.2,
    reviews: [
      { name: "Sita Tamang", comment: "Nice and shiny bracelet.", date: "2026-01-19" }
    ]
  },
  {
    id: 10,
    name: "Gold Stud Earrings",
    price:  55000,
    category: "Earrings",
    type: "Gold",
    image: "/images/earring2.jpg",
    description:
      "Simple yet elegant gold stud earrings made from 22K gold. Perfect for daily use and office wear.",
    rating: 4.6,
    reviews: [
      { name: "Anil Rai", comment: "Lightweight and classy.", date: "2026-01-21" }
    ]
  },

  {
    id: 11,
    name: "Diamond Wedding Ring",
    price:  280000,
    category: "Ring",
    type: "Diamond",
    image: "/images/ring2.jpg",
    description:
      "A beautifully designed diamond wedding ring symbolizing love and commitment. Crafted for lifelong shine.",
    rating: 4.6,
    reviews: [
      { name: "Anil Rai", comment: "Lightweight and classy.", date: "2026-01-21" }
    ]
  },
  {
    id: 12,
    name: "Traditional Gold Choker",
    price:  175000,
    category: "Necklace",
    type: "Gold",
    image: "/images/choker1.jpg",
    description:
      "A traditional gold choker necklace with intricate craftsmanship. Ideal for bridal and festive outfits.",
      rating: 4.6,
    reviews: [
      { name: "Anil Rai", comment: "Lightweight and classy.", date: "2026-01-21" }
    ]
  },
  {
    id: 13,
    name: "Silver Toe Rings",
    price:  6500,
    category: "Toe Ring",
    type: "Silver",
    image: "/images/toering1.jpg",
    description:
      "Classic silver toe rings designed for comfort and durability. A must-have accessory for traditional wear.",
      rating: 4.6,
    reviews: [
      { name: "Anil Rai", comment: "Lightweight and classy.", date: "2026-01-21" }
    ]
  },
  {
    id: 14,
    name: "Gold Kada for Men",
    price:  95000,
    category: "Kada",
    type: "Gold",
    image: "/images/kada1.jpg",
    description:
      "A solid gold kada designed for men with a bold and masculine look. Perfect for daily wear.",
      rating: 4.2,
    reviews: [
      { name: "Sita Tamang", comment: "Nice and shiny bracelet.", date: "2026-01-19" }
    ]
  },
  {
    id: 15,
    name: "Diamond Nose Pin",
    price:  42000,
    category: "Nose Pin",
    type: "Diamond",
    image: "/images/nosepin1.jpg",
    description:
      "A delicate diamond nose pin with a subtle sparkle. Crafted for elegance and comfort.",
      rating: 4.2,
    reviews: [
      { name: "Sita Tamang", comment: "Nice and shiny bracelet.", date: "2026-01-19" }
    ]
  },
  {
    id: 16,
    name: "Gold Mangalsutra",
    price:  110000,
    category: "Mangalsutra",
    type: "Gold",
    image: "/images/mangalsutra1.jpg",
    description:
      "Traditional gold mangalsutra designed with cultural significance and modern aesthetics.",
      rating: 4.2,
    reviews: [
      { name: "Sita Tamang", comment: "Nice and shiny bracelet.", date: "2026-01-19" }
    ]
  },
  {
    id: 17,
    name: "Silver Chain for Men",
    price:  28000,
    category: "Chain",
    type: "Silver",
    image: "/images/chain2.jpg",
    description:
      "A strong and stylish silver chain designed for men. Ideal for daily wear and casual outfits.",
       rating: 5,
    reviews: [
      { name: "Rohit Kc", comment: "Absolutely gorgeous set!", date: "2026-01-22" }
    ]
  },
  {
    id: 18,
    name: "Platinum Wedding Band",
    price:  210000,
    category: "Ring",
    type: "Platinum",
    image: "/images/ring3.jpg",
    description:
      "A premium platinum wedding band with a polished finish. Symbolizes everlasting commitment.",
       rating: 5,
    reviews: [
      { name: "Rohit Kc", comment: "Absolutely gorgeous set!", date: "2026-01-22" }
    ]
  },
  {
    id: 19,
    name: "Gold Drop Earrings",
    price:  78000,
    category: "Earrings",
    type: "Gold",
    image: "/images/earring3.jpg",
    description:
      "Elegant gold drop earrings designed for parties and special occasions.",
       rating: 5,
    reviews: [
      { name: "Rohit Kc", comment: "Absolutely gorgeous set!", date: "2026-01-22" }
    ]
  },
  {
    id: 20,
    name: "Diamond Bracelet",
    price:  390000,
    category: "Bracelet",
    type: "Diamond",
    image: "/images/bracelet2.jpg",
    description:
      "A luxury diamond bracelet crafted with precision and elegance. Perfect for premium gifting.",
       rating: 4.4,
    reviews: [
      { name: "Meena Shrestha", comment: "Delicate and elegant.", date: "2026-01-20" }
    ]
  },
  {
    id: 21,
    name: "Silver Payal",
    price:  15000,
    category: "Anklet",
    type: "Silver",
    image: "/images/payal1.jpg",
    description:
      "Traditional silver payal with smooth finishing and classic design.",
       rating: 4.4,
    reviews: [
      { name: "Meena Shrestha", comment: "Delicate and elegant.", date: "2026-01-20" }
    ]
  },
  {
    id: 22,
    name: "Gold Bridal Set",
    price:  520000,
    category: "Jewellery Set",
    type: "Gold",
    image: "/images/bridalset1.jpg",
    description:
      "A complete gold bridal jewellery set crafted for weddings and grand ceremonies.",
       rating: 4.4,
    reviews: [
      { name: "Meena Shrestha", comment: "Delicate and elegant.", date: "2026-01-20" }
    ]
  },
  {
    id: 23,
    name: "Diamond Pendant",
    price:  135000,
    category: "Pendant",
    type: "Diamond",
    image: "/images/pendant2.jpg",
    description:
      "A modern diamond pendant designed for elegance and everyday luxury.",
       rating: 4.4,
    reviews: [
      { name: "Meena Shrestha", comment: "Delicate and elegant.", date: "2026-01-20" }
    ]
  },
];
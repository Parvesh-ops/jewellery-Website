export interface Review {
  name: string;
  comment: string;
  date: string; 
}

export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  type: "Gold" | "Silver" | "Diamond" | "Platinum";
  image: string;
  description: string;
  rating: number; // 1 to 5
  reviews: Review[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Royal Gold Necklace",
    price: "NPR 120,000",
    category: "Necklace",
    type: "Gold",
    image: "/images/necklace1.jpg",
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
    price: "NPR 85,000",
    category: "Chain",
    type: "Gold",
    image: "/images/chain1.jpg",
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
    price: "NPR 150,000",
    category: "Earrings",
    type: "Diamond",
    image: "/images/earring1.jpg",
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
    price: "NPR 200,000",
    category: "Bangle",
    type: "Gold",
    image: "/images/bangle1.jpg",
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
    price: "NPR 18,000",
    category: "Anklet",
    type: "Silver",
    image: "/images/anklet1.jpg",
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
    price: "NPR 320,000",
    category: "Ring",
    type: "Platinum",
    image: "/images/ring1.jpg",
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
    price: "NPR 65,000",
    category: "Pendant",
    type: "Gold",
    image: "/images/pendant1.jpg",
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
    price: "NPR 450,000",
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
    price: "NPR 22,000",
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
    price: "NPR 55,000",
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
    price: "NPR 280,000",
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
    price: "NPR 175,000",
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
    price: "NPR 6,500",
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
    price: "NPR 95,000",
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
    price: "NPR 42,000",
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
    price: "NPR 110,000",
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
    price: "NPR 28,000",
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
    price: "NPR 210,000",
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
    price: "NPR 78,000",
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
    price: "NPR 390,000",
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
    price: "NPR 15,000",
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
    price: "NPR 520,000",
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
    price: "NPR 135,000",
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

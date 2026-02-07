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



export interface Review {
  name: string;
  comment: string;
  date: string; 
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  type: "Gold" | "Silver" | "Diamond" | "Platinum";
  image: string;
  description: string;
  rating: number; 
  reviews: Review[];
}

//cart
export interface CartItems extends Product {
    quantity: number
}



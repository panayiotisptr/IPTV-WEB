export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
}

export interface MovieShowcase {
  id: string;
  title: string;
  imageUrl: string;
  category: 'movie' | 'show' | 'sport';
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}
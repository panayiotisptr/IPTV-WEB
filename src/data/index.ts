import { FAQ, MovieShowcase, PricingPlan, Testimonial } from "../types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "monthly",
    name: "Basic",
    price: 10,
    duration: "month",
    features: [
      "Full access to 80,000+ movies & shows",
      "HD streaming quality",
      "Watch on 2 devices simultaneously",
      "24/7 customer support",
      "Cancel anytime"
    ]
  },
  {
    id: "quarterly",
    name: "Standard",
    price: 30,
    duration: "3 months",
    popular: true,
    features: [
      "Full access to 80,000+ movies & shows",
      "HD & 4K streaming quality",
      "Watch on 4 devices simultaneously",
      "24/7 priority customer support",
      "Download for offline viewing",
      "25% savings compared to monthly"
    ]
  },
  {
    id: "yearly",
    name: "Premium",
    price: 90,
    duration: "12 months",
    features: [
      "Full access to 80,000+ movies & shows",
      "HD & 4K streaming quality",
      "Watch on unlimited devices",
      "24/7 VIP customer support",
      "Download for offline viewing",
      "Premium content early access",
      "25% savings compared to quarterly"
    ]
  }
];

export const showcaseContent: MovieShowcase[] = [
  {
    id: "1",
    title: "Stranger Things",
    imageUrl: "https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg",
    category: "show"
  },
  {
    id: "2",
    title: "Breaking Bad",
    imageUrl: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg",
    category: "show"
  },
  {
    id: "3",
    title: "The Avengers",
    imageUrl: "https://images.pexels.com/photos/5439508/pexels-photo-5439508.jpeg",
    category: "movie"
  },
  {
    id: "4",
    title: "Game of Thrones",
    imageUrl: "https://images.pexels.com/photos/4585185/pexels-photo-4585185.jpeg",
    category: "show"
  },
  {
    id: "5",
    title: "Inception",
    imageUrl: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg",
    category: "movie"
  },
  {
    id: "6",
    title: "Premier League",
    imageUrl: "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg",
    category: "sport"
  },
  {
    id: "7",
    title: "The Matrix",
    imageUrl: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
    category: "movie"
  },
  {
    id: "8",
    title: "UFC",
    imageUrl: "https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg",
    category: "sport"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "I've tried many IPTV services, but this one offers the best value. The streaming quality is excellent and I never experience buffering issues.",
    rating: 5
  },
  {
    id: "2",
    name: "Michael Davis",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Having access to so many sports channels in one place is amazing. I can watch all my favorite teams no matter where they're playing.",
    rating: 5
  },
  {
    id: "3",
    name: "Emma Wilson",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "The movie selection is incredible. I'm constantly discovering new titles I've never heard of before. Definitely worth the subscription.",
    rating: 4
  }
];

export const faqs: FAQ[] = [
  {
    question: "What is IPTV?",
    answer: "IPTV (Internet Protocol Television) allows you to stream TV channels and video content over the internet, giving you access to thousands of channels and on-demand content without traditional cable or satellite subscriptions."
  },
  {
    question: "How many channels and movies do you offer?",
    answer: "Our service provides access to over 10,000 live TV channels from around the world and a library of over 80,000 movies and TV shows on demand."
  },
  {
    question: "What devices can I use with your IPTV service?",
    answer: "Our service works on almost any device including smartphones (Android/iOS), tablets, computers, smart TVs, Amazon Fire TV, Apple TV, Android TV boxes, MAG boxes, and more."
  },
  {
    question: "Do I need any special equipment?",
    answer: "No special equipment is needed. You only need a device with internet access and our app or a compatible IPTV player."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 24-hour free trial so you can test our service before subscribing. Contact us via Telegram or WhatsApp to request your trial."
  }
];
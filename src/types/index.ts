export interface Link {
  label: string;
  href: string;
}

export interface Channel {
  id: string;
  name: string;
  thumbnail: string;
  category: string;
  categoryId: string;
  rating: number;
  isLive: boolean;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface FeaturedContent {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  tags: string[];
  isLive: boolean;
}

export interface Program {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  startTime: string;
  endTime: string;
  isLive: boolean;
  day: number; // 0 = today, 1 = tomorrow, etc.
}
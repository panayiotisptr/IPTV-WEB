import React, { useState, useEffect } from 'react';
import { Play, Info, Plus } from 'lucide-react';
import { FeaturedContent } from '../types';

interface HeroProps {
  featuredContent: FeaturedContent[];
}

const Hero: React.FC<HeroProps> = ({ featuredContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = featuredContent[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    
    return () => clearInterval(interval);
  }, [featuredContent.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={current.backgroundImage}
          alt={current.title}
          className="h-full w-full object-cover transition-transform duration-1000 ease-out"
          style={{ transform: 'scale(1.05)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container relative mx-auto h-full px-4">
        <div className="flex h-full flex-col justify-center pt-16 md:max-w-2xl lg:max-w-3xl">
          <div className="mb-4 flex items-center space-x-2">
            {current.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-sm bg-blue-600/80 px-2 py-1 text-xs font-medium uppercase text-white"
              >
                {tag}
              </span>
            ))}
            {current.isLive && (
              <span className="flex items-center rounded-sm bg-red-600/80 px-2 py-1 text-xs font-medium uppercase text-white">
                <span className="mr-1 h-2 w-2 animate-pulse rounded-full bg-white"></span>
                LIVE
              </span>
            )}
          </div>
          
          <h1 className="mb-2 text-3xl font-bold text-white md:text-5xl lg:text-6xl">
            {current.title}
          </h1>
          
          <p className="mb-6 text-gray-300 md:text-lg">
            {current.description}
          </p>
          
          <div className="flex space-x-4">
            <a 
              href={current.isLive ? "/watch/live" : `/watch/${current.id}`}
              className="flex items-center space-x-2 rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              <Play className="h-5 w-5" fill="currentColor" />
              <span>Watch Now</span>
            </a>
            <a 
              href={`/details/${current.id}`}
              className="flex items-center space-x-2 rounded-md bg-gray-800/80 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-700"
            >
              <Info className="h-5 w-5" />
              <span>More Info</span>
            </a>
            <a 
              href="/watchlist/add"
              className="flex items-center space-x-2 rounded-md bg-gray-800/80 px-4 py-3 font-medium text-white transition-colors hover:bg-gray-700 md:hidden"
            >
              <Plus className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Slider dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {featuredContent.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-10 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-600'
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
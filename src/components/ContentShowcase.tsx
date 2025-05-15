import React, { useState } from 'react';
import { showcaseContent } from '../data';
import { PlayCircle, Info } from 'lucide-react';

const ContentShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'movie' | 'show' | 'sport'>('all');
  
  const filteredContent = activeCategory === 'all' 
    ? showcaseContent 
    : showcaseContent.filter(item => item.category === activeCategory);

  return (
    <section id="content" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Explore Our Massive Library</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Dive into our extensive collection of movies, TV shows, and sports from around the world. 
            With over 80,000 titles, there's always something new to discover.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-rose-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Content
            </button>
            <button 
              onClick={() => setActiveCategory('movie')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'movie' 
                  ? 'bg-rose-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Movies
            </button>
            <button 
              onClick={() => setActiveCategory('show')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'show' 
                  ? 'bg-rose-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              TV Shows
            </button>
            <button 
              onClick={() => setActiveCategory('sport')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'sport' 
                  ? 'bg-rose-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Sports
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredContent.map((item) => (
            <div 
              key={item.id}
              className="group relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-rose-600 rounded-md text-white">
                  {item.category === 'movie' ? 'Movie' : item.category === 'show' ? 'TV Show' : 'Sport'}
                </span>
              </div>
              
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-30">
                <button className="p-2 rounded-full bg-rose-600 hover:bg-rose-700 transition-colors">
                  <PlayCircle className="h-8 w-8 text-white" />
                </button>
                <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                  <Info className="h-8 w-8 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            This is just a small sample of our massive library with over 80,000 titles
          </p>
          <a 
            href="#pricing" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 transition-colors"
          >
            Get Full Access
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;
import React, { useState } from 'react';
import Hero from '../components/Hero';
import ChannelGrid from '../components/ChannelGrid';
import CategoryList from '../components/CategoryList';
import ProgramGuide from '../components/ProgramGuide';
import { mockFeaturedContent, mockChannels, mockCategories, mockPrograms } from '../data/mockData';

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredChannels = activeCategory === 'all'
    ? mockChannels
    : mockChannels.filter(channel => channel.categoryId === activeCategory);
  
  const trendingChannels = mockChannels.filter((_, index) => index < 10);
  const sportsChannels = mockChannels.filter(channel => channel.categoryId === 'sports');
  
  return (
    <main className="bg-gray-950 pb-16 pt-16">
      <Hero featuredContent={mockFeaturedContent} />
      
      <div className="container mx-auto px-4 pt-12">
        <CategoryList
          categories={mockCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <ChannelGrid
          title={activeCategory === 'all' ? 'All Channels' : mockCategories.find(c => c.id === activeCategory)?.name || ''}
          channels={filteredChannels}
        />
        
        <ProgramGuide programs={mockPrograms} />
        
        {activeCategory === 'all' && (
          <>
            <ChannelGrid title="Trending Now" channels={trendingChannels} />
            <ChannelGrid title="Sports Channels" channels={sportsChannels} />
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
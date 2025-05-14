import React from 'react';
import ChannelCard from './ChannelCard';
import { Channel } from '../types';

interface ChannelGridProps {
  title: string;
  channels: Channel[];
}

const ChannelGrid: React.FC<ChannelGridProps> = ({ title, channels }) => {
  return (
    <div className="mb-12">
      <h2 className="mb-6 text-2xl font-bold text-white">{title}</h2>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {channels.map((channel) => (
          <ChannelCard key={channel.id} channel={channel} />
        ))}
      </div>
    </div>
  );
};

export default ChannelGrid;
import React from 'react';
import { Play, Star, Clock, Plus } from 'lucide-react';
import { Channel } from '../types';

interface ChannelCardProps {
  channel: Channel;
}

const ChannelCard: React.FC<ChannelCardProps> = ({ channel }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-gray-900 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={channel.thumbnail}
          alt={channel.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{channel.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
            <span className="text-sm text-gray-300">{channel.rating}</span>
          </div>
        </div>
        
        <div className="mt-1 flex items-center text-sm text-gray-400">
          <span className="mr-3">{channel.category}</span>
          {channel.isLive && (
            <span className="flex items-center">
              <span className="mr-1 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              LIVE
            </span>
          )}
        </div>
        
        <div className="mt-3 flex items-center space-x-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a 
            href={`/watch/${channel.id}`}
            className="flex items-center justify-center rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700"
          >
            <Play className="h-5 w-5" fill="currentColor" />
          </a>
          <a 
            href={`/watchlist/add/${channel.id}`}
            className="flex items-center justify-center rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700"
          >
            <Plus className="h-5 w-5" />
          </a>
          <a 
            href={`/schedule/${channel.id}`}
            className="flex items-center justify-center rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700"
          >
            <Clock className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChannelCard;
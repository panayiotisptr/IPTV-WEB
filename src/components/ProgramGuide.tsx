import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Program } from '../types';

interface ProgramGuideProps {
  programs: Program[];
}

const ProgramGuide: React.FC<ProgramGuideProps> = ({ programs }) => {
  const [currentDay, setCurrentDay] = useState(0);
  const days = ['Today', 'Tomorrow', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handlePrevDay = () => {
    setCurrentDay((prev) => (prev === 0 ? days.length - 1 : prev - 1));
  };

  const handleNextDay = () => {
    setCurrentDay((prev) => (prev === days.length - 1 ? 0 : prev + 1));
  };

  // Filter programs by current day (this is a simplified example)
  const filteredPrograms = programs.filter((_, index) => index % days.length === currentDay);

  return (
    <div className="mb-12 rounded-lg bg-gray-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Program Guide</h2>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePrevDay}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
            aria-label="Previous day"
          >
            <ChevronLeft size={18} />
          </button>
          
          <span className="text-lg font-medium text-white">{days[currentDay]}</span>
          
          <button
            onClick={handleNextDay}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
            aria-label="Next day"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredPrograms.map((program) => (
          <div key={program.id} className="flex items-center space-x-4 rounded-lg bg-gray-800 p-4 transition-colors hover:bg-gray-750">
            <div className="min-w-[100px] text-center">
              <span className="text-sm font-medium text-gray-400">
                {program.startTime} - {program.endTime}
              </span>
            </div>
            
            <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md">
              <img
                src={program.thumbnail}
                alt={program.title}
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="flex-grow">
              <h3 className="text-lg font-medium text-white">{program.title}</h3>
              <p className="text-sm text-gray-400">{program.channel}</p>
            </div>
            
            <div>
              {program.isLive ? (
                <span className="flex items-center rounded-full bg-red-600/20 px-3 py-1 text-xs font-medium text-red-400">
                  <span className="mr-1 h-2 w-2 animate-pulse rounded-full bg-red-500"></span>
                  LIVE NOW
                </span>
              ) : (
                <button className="rounded-full bg-blue-600 px-4 py-1 text-xs font-medium text-white transition-colors hover:bg-blue-700">
                  Remind Me
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramGuide;
import React from 'react';
import { Play, Zap, MonitorPlay, Check } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background abstract shapes */}
        <div className="absolute top-0 right-0 -mt-20 opacity-20">
          <div className="w-64 h-64 rounded-full bg-rose-500 blur-[100px]"></div>
        </div>
        <div className="absolute bottom-0 left-0 opacity-20">
          <div className="w-72 h-72 rounded-full bg-blue-500 blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="block">Ultimate TV & Movie Experience</span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-rose-600">
              80,000+ Movies & Shows
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 mx-auto max-w-3xl">
            Stream your favorite movies, TV shows, sports, and more with our premium IPTV service. 
            Enjoy unlimited access to over 80,000 titles across all your devices.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a 
              href="#pricing" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 transition-all shadow-lg hover:shadow-rose-500/20"
            >
              <Zap className="mr-2 h-5 w-5" />
              Get Started Now
            </a>
            <a 
              href="#content" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-gray-700 transition-all"
            >
              <Play className="mr-2 h-5 w-5" />
              Explore Content
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg transform transition-all hover:scale-105">
              <MonitorPlay className="h-8 w-8 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Watch Everywhere</h3>
              <p className="text-gray-400">Stream on your smart TV, phone, tablet, or any device</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg transform transition-all hover:scale-105">
              <Zap className="h-8 w-8 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">No buffering, high-quality streaming with our optimized servers</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg transform transition-all hover:scale-105">
              <Check className="h-8 w-8 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cancel Anytime</h3>
              <p className="text-gray-400">No long-term contracts, cancel your subscription whenever you want</p>
            </div>
          </div>
          
          <div className="text-gray-400 text-sm">
            <span className="block mb-1">Compatible with all popular devices:</span>
            <div className="flex justify-center space-x-6">
              <span>Android</span>
              <span>iOS</span>
              <span>FireTV</span>
              <span>Apple TV</span>
              <span>Smart TVs</span>
              <span>Web</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
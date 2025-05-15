import React from 'react';
import { pricingPlans } from '../data';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 opacity-20">
        <div className="w-96 h-96 rounded-full bg-blue-500 blur-[150px]"></div>
      </div>
      <div className="absolute bottom-0 left-0 opacity-20">
        <div className="w-96 h-96 rounded-full bg-purple-500 blur-[150px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose the plan that works for you. All plans include full access to our entire content library.
            No hidden fees, no commitments, cancel anytime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-gray-700/80 to-gray-800/80 border border-rose-500 shadow-lg shadow-rose-500/20' 
                  : 'bg-gray-700/50 border border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mr-14 mt-3 w-56 transform rotate-45 bg-rose-600 text-white py-1 text-center text-sm font-semibold shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-white">{plan.price}€</span>
                  <span className="ml-2 text-gray-400">/{plan.duration}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-rose-500 mr-2 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={`block w-full py-3 px-4 rounded-lg text-center font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-rose-600 hover:bg-rose-700 text-white' 
                      : 'bg-gray-600 hover:bg-gray-700 text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-5 w-5 text-yellow-400" />
            <Star className="h-5 w-5 text-yellow-400" />
            <Star className="h-5 w-5 text-yellow-400" />
            <Star className="h-5 w-5 text-yellow-400" />
            <Star className="h-5 w-5 text-yellow-400" />
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have already discovered the ultimate streaming experience.
            Our 24-hour free trial lets you test the service risk-free before committing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
import React from 'react';
import { testimonials } from '../data';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our subscribers think about our IPTV service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-800 rounded-xl p-6 shadow-lg relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 opacity-10">
                <Quote className="h-24 w-24 text-rose-500" />
              </div>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-white">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'fill-current' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 relative z-10">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
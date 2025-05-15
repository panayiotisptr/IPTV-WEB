import React, { useState } from 'react';
import { faqs } from '../data';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-400">
            Get answers to the most common questions about our IPTV service.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border border-gray-700 rounded-lg overflow-hidden transition-all duration-200 ${
                openItem === index ? 'bg-gray-700' : 'bg-gray-800 hover:bg-gray-700/50'
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full p-4 text-left"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openItem === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`px-4 overflow-hidden transition-all duration-300 ${
                  openItem === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">
            Still have questions? Feel free to contact us directly.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
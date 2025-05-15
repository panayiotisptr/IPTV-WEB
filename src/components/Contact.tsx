import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    device: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just log the data
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      device: '',
      message: ''
    });

    // Show success message
    alert('Thank you! We will contact you shortly about your free trial.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Started Today</h2>
          <p className="text-lg text-gray-400">
            Ready to experience the ultimate IPTV service? Contact us via Telegram or WhatsApp to sign up or request a free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a 
            href="https://t.me/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 rounded-xl p-8 text-center transition-all duration-300 transform hover:scale-105 flex flex-col items-center"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mb-4">
              <Send className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Telegram</h3>
            <p className="text-gray-400 mb-4">
              Contact us on Telegram for quick responses and easy file sharing.
            </p>
            <span className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Open Telegram
            </span>
          </a>
          
          <a 
            href="https://wa.me/yourphonenumber" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 rounded-xl p-8 text-center transition-all duration-300 transform hover:scale-105 flex flex-col items-center"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full mb-4">
              <MessageSquare className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-400 mb-4">
              Reach out via WhatsApp for personal assistance and video calls.
            </p>
            <span className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors">
              Open WhatsApp
            </span>
          </a>
        </div>
        
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-8 max-w-4xl mx-auto mt-12 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Request a Free Trial</h3>
            <p className="text-gray-300">
              Try our service for 24 hours before making a decision. No credit card required.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:ring-rose-500 focus:border-rose-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:ring-rose-500 focus:border-rose-500 text-white"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="device" className="block text-sm font-medium text-gray-300 mb-1">
                Preferred Device
              </label>
              <select
                id="device"
                name="device"
                value={formData.device}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:ring-rose-500 focus:border-rose-500 text-white"
              >
                <option value="">Select your device</option>
                <option value="android">Android</option>
                <option value="ios">iOS</option>
                <option value="firetv">Amazon Fire TV</option>
                <option value="appletv">Apple TV</option>
                <option value="smarttv">Smart TV</option>
                <option value="pc">PC/Mac</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Any specific questions or requirements?"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:ring-rose-500 focus:border-rose-500 text-white"
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 transition-colors"
              >
                Request Free Trial
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
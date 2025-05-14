import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Tv } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center space-x-2">
              <Tv className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">
                R<span className="text-blue-500">TV</span>
              </span>
            </a>
            <p className="mt-4 text-gray-400">
              Your premium IPTV service with the best channels and on-demand content from around the world.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://facebook.com/rtv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com/rtv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com/rtv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com/rtv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                aria-label="Youtube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 transition-colors hover:text-blue-500">Home</a>
              </li>
              <li>
                <a href="/live" className="text-gray-400 transition-colors hover:text-blue-500">Live TV</a>
              </li>
              <li>
                <a href="/movies" className="text-gray-400 transition-colors hover:text-blue-500">Movies</a>
              </li>
              <li>
                <a href="/sports" className="text-gray-400 transition-colors hover:text-blue-500">Sports</a>
              </li>
              <li>
                <a href="/guide" className="text-gray-400 transition-colors hover:text-blue-500">TV Guide</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/faq" className="text-gray-400 transition-colors hover:text-blue-500">FAQ</a>
              </li>
              <li>
                <a href="/help" className="text-gray-400 transition-colors hover:text-blue-500">Help Center</a>
              </li>
              <li>
                <a href="/account" className="text-gray-400 transition-colors hover:text-blue-500">Account</a>
              </li>
              <li>
                <a href="/community" className="text-gray-400 transition-colors hover:text-blue-500">Community</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 transition-colors hover:text-blue-500">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Download Our App</h3>
            <p className="text-gray-400">
              Watch on the go with our mobile apps. Available on iOS and Android.
            </p>
            <div className="mt-4 flex flex-col space-y-2">
              <a
                href="https://apps.apple.com/app/rtv"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-gray-800 px-4 py-2 text-center text-white transition-colors hover:bg-gray-700"
              >
                iOS App
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.rtv"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-gray-800 px-4 py-2 text-center text-white transition-colors hover:bg-gray-700"
              >
                Android App
              </a>
            </div>
          </div>
        </div>
        
        <hr className="my-8 border-gray-800" />
        
        <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:text-left">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} RTV. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-500 transition-colors hover:text-blue-500">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-500 transition-colors hover:text-blue-500">
              Terms of Use
            </a>
            <a href="/cookies" className="text-gray-500 transition-colors hover:text-blue-500">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
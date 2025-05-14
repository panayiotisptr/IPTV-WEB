import React, { useState } from 'react';
import { Menu, X, Search, User, ChevronDown, Tv } from 'lucide-react';
import { Link } from '../types';

type HeaderProps = {
  links: Link[];
};

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Tv className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">
                R<span className="text-blue-500">TV</span>
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/search"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </a>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                <User size={20} />
                <span>Account</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <a href="/account" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                    My Account
                  </a>
                  <a href="/watchlist" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                    My Watchlist
                  </a>
                  <a href="/settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                    Settings
                  </a>
                  <hr className="my-1 border-gray-700" />
                  <a href="/logout" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                    Logout
                  </a>
                </div>
              </div>
            </div>
            <a
              href="/subscribe"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
            >
              Subscribe Now
            </a>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-gray-700 my-2" />
              <a
                href="/account"
                className="px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                My Account
              </a>
              <a
                href="/watchlist"
                className="px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                My Watchlist
              </a>
              <a
                href="/subscribe"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 mt-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Subscribe Now
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
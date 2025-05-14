import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// Navigation links for the header
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Live TV', href: '/live' },
  { label: 'Movies', href: '/movies' },
  { label: 'Sports', href: '/sports' },
  { label: 'TV Guide', href: '/guide' },
  { label: 'On Demand', href: '/on-demand' },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header links={navLinks} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
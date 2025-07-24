import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, User, Bell } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Investing',
      page: 'investing',
      dropdown: [
        { name: 'Singapore Stocks', page: 'singapore-stocks' },
        { name: 'REITs Guide', page: 'reits-guide' },
        { name: 'Robo-Advisors', page: 'robo-advisors' },
        { name: 'Platform Reviews', page: 'platform-reviews' }
      ]
    },
    {
      name: 'Passive Income',
      page: 'passive-income',
      dropdown: [
        { name: 'Dividend Stocks', page: 'dividend-stocks' },
        { name: 'Bond Investing', page: 'bond-investing' },
        { name: 'Alternative Investments', page: 'alternative-investments' }
      ]
    },
    {
      name: 'Digital Nomad',
      page: 'digital-nomad',
      dropdown: [
        { name: 'Banking Solutions', page: 'banking-solutions' },
        { name: 'Tax Strategies', page: 'tax-strategies' },
        { name: 'Currency Management', page: 'currency-management' }
      ]
    },
    {
      name: 'Singapore Finance',
      page: 'singapore-finance',
      dropdown: [
        { name: 'CPF Optimization', page: 'cpf-optimization' },
        { name: 'Tax Planning', page: 'tax-planning' },
        { name: 'Insurance Guide', page: 'insurance-guide' }
      ]
    },
    { name: 'Resources', page: 'resources' },
    { name: 'About', page: 'about' }
  ];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">SG</span>
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                SGNomadWealth
              </h1>
              <p className={`text-xs transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Singapore Finance for Digital Nomads
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === item.page
                      ? isScrolled
                        ? 'bg-teal-100 text-teal-700'
                        : 'bg-white/20 text-white'
                      : isScrolled
                        ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                  onClick={() => item.dropdown ? null : handleNavClick(item.page)}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <button
                        key={dropdownItem.name}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                        onClick={() => handleNavClick(dropdownItem.page)}
                      >
                        {dropdownItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className={`p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-gray-600 hover:bg-gray-100' 
                : 'text-white/80 hover:bg-white/10'
            }`}>
              <Search className="h-5 w-5" />
            </button>
            
            <Button 
              className={`${
                isScrolled 
                  ? 'btn-primary' 
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              } px-6`}
              onClick={() => handleNavClick('contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-gray-600 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === item.page
                        ? 'bg-teal-100 text-teal-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => handleNavClick(item.page)}
                  >
                    {item.name}
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <button
                          key={dropdownItem.name}
                          className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                          onClick={() => handleNavClick(dropdownItem.page)}
                        >
                          {dropdownItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <Button 
                className="btn-primary w-full"
                onClick={() => handleNavClick('contact')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Notification Bar */}
      {!isScrolled && (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 py-2 px-4 text-center text-sm font-medium">
          <div className="flex items-center justify-center gap-2">
            <Bell className="h-4 w-4" />
            <span>🎉 New Guide: "Complete Singapore Investment Strategy for 2025" - </span>
            <button 
              className="underline hover:no-underline font-semibold"
              onClick={() => handleNavClick('resources')}
            >
              Download Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


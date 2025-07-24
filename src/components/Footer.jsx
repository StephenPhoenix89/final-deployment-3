import React from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  ArrowRight,
  Shield,
  Award,
  Users
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Footer = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Investing',
      links: [
        { name: 'Singapore Stocks', page: 'singapore-stocks' },
        { name: 'REITs Guide', page: 'reits-guide' },
        { name: 'Robo-Advisors', page: 'robo-advisors' },
        { name: 'Platform Reviews', page: 'platform-reviews' },
        { name: 'Investment Calculator', page: 'investment-calculator' }
      ]
    },
    {
      title: 'Passive Income',
      links: [
        { name: 'Dividend Stocks', page: 'dividend-stocks' },
        { name: 'Bond Investing', page: 'bond-investing' },
        { name: 'Alternative Investments', page: 'alternative-investments' },
        { name: 'Income Strategies', page: 'income-strategies' },
        { name: 'Portfolio Building', page: 'portfolio-building' }
      ]
    },
    {
      title: 'Digital Nomad',
      links: [
        { name: 'Banking Solutions', page: 'banking-solutions' },
        { name: 'Tax Strategies', page: 'tax-strategies' },
        { name: 'Currency Management', page: 'currency-management' },
        { name: 'Remote Work Finance', page: 'remote-work-finance' },
        { name: 'Location Independence', page: 'location-independence' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Free Guides', page: 'free-guides' },
        { name: 'Calculators', page: 'calculators' },
        { name: 'Templates', page: 'templates' },
        { name: 'Webinars', page: 'webinars' },
        { name: 'Newsletter', page: 'newsletter' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', page: 'about' },
        { name: 'Contact', page: 'contact' },
        { name: 'Privacy Policy', page: 'privacy' },
        { name: 'Terms of Service', page: 'terms' },
        { name: 'Disclaimer', page: 'disclaimer' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Ahead of the Game
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get weekly insights on Singapore investing, passive income strategies, and nomad-friendly financial planning delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 font-semibold">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-3">
                Join 5,000+ digital nomads. Unsubscribe anytime.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-white/80">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">5,000+ Subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm">Privacy Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span className="text-sm">Award-Winning Content</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">SG</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">SGNomadWealth</h3>
                  <p className="text-gray-400 text-sm">Singapore Finance for Digital Nomads</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering high-earning digital nomads to build wealth through Singapore's robust financial system while maintaining location independence.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="h-4 w-4 text-teal-400" />
                  <span className="text-sm">Singapore & Remote</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-4 w-4 text-teal-400" />
                  <span className="text-sm">hello@sgnomadwealth.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="h-4 w-4 text-teal-400" />
                  <span className="text-sm">+65 9XXX XXXX</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={() => setCurrentPage(link.page)}
                        className="text-gray-300 hover:text-teal-400 transition-colors text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
              <p>&copy; {currentYear} SGNomadWealth. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setCurrentPage('privacy')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setCurrentPage('terms')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => setCurrentPage('disclaimer')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Disclaimer
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-gray-600 text-gray-400">
                🇸🇬 Made in Singapore
              </Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-400">
                🌍 For Digital Nomads
              </Badge>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Disclaimer:</strong> The information provided on this website is for educational and informational purposes only and should not be considered as financial advice. 
              Investing involves risk, including the potential loss of principal. Past performance does not guarantee future results. 
              Please consult with a qualified financial advisor before making any investment decisions. 
              SGNomadWealth is not a licensed financial advisor and does not provide personalized financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


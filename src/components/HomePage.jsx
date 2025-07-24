import React from 'react';
import { ArrowRight, TrendingUp, Shield, Globe, Star, CheckCircle, Users, Award, BarChart3, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="absolute inset-0 bg-pattern"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🇸🇬 Singapore's #1 Digital Nomad Finance Resource
            </Badge>
            <h1 className="heading-xl text-white mb-6 max-w-4xl mx-auto">
              Build Wealth in Singapore While Living Your 
              <span className="text-gradient-gold"> Digital Nomad Dreams</span>
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Your complete guide to investing, passive income, and financial freedom for high-earning digital nomads based in Singapore
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="btn-secondary text-lg px-8 py-4 animate-delay-100">
                Start Building Wealth <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="btn-outline text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 animate-delay-200">
                Download Free Guide
              </Button>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in-up animate-delay-300">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>5,000+ Digital Nomads</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Featured in Forbes</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse animate-delay-200"></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-green-400/20 rounded-full animate-pulse animate-delay-400"></div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 mb-6">
              The Challenge Every Digital Nomad Faces
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You're earning great money remotely, but traditional financial advice doesn't work for your nomadic lifestyle. 
              Singapore offers incredible opportunities, but navigating them while traveling is complex.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 text-xl">❌</span>
                  </div>
                  <div>
                    <h3 className="heading-sm text-gray-900 mb-2">Generic Financial Advice</h3>
                    <p className="text-gray-600">Most financial content assumes you live in one place with a traditional job</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 text-xl">❌</span>
                  </div>
                  <div>
                    <h3 className="heading-sm text-gray-900 mb-2">Complex Tax Situations</h3>
                    <p className="text-gray-600">Multiple countries, currencies, and tax obligations create confusion</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 text-xl">❌</span>
                  </div>
                  <div>
                    <h3 className="heading-sm text-gray-900 mb-2">Limited Investment Access</h3>
                    <p className="text-gray-600">Many platforms restrict access based on residency or location</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="heading-sm text-gray-900 mb-2">Singapore-Specific Strategies</h3>
                    <p className="text-gray-600">Tailored advice for Singapore's unique financial landscape and opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="heading-sm text-gray-900 mb-2">Nomad-Friendly Solutions</h3>
                    <p className="text-gray-600">Investment and banking solutions that work regardless of your location</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="heading-sm text-gray-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">Strategies tested by thousands of successful digital nomads</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Pillars Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 mb-6">
              Everything You Need to Build Wealth as a Digital Nomad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover proven strategies to grow your wealth through Singapore's robust financial system while maintaining the freedom to work from anywhere
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card group cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="heading-md text-gray-900">Singapore Investment Mastery</CardTitle>
                <CardDescription className="text-gray-600">
                  Master the art of investing in Singapore's dynamic market with our comprehensive guides and platform reviews.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Platform comparisons & reviews
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Portfolio optimization strategies
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Tax-efficient investing
                  </li>
                </ul>
                <Button className="btn-outline w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-featured group cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="heading-md text-white">Passive Income Strategies</CardTitle>
                <CardDescription className="text-white/90">
                  Create multiple income streams that work while you travel. Learn dividend investing, REITs, and more.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    Singapore REITs deep-dive
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    Dividend growth strategies
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    Income calculators & tools
                  </li>
                </ul>
                <Button className="bg-white text-gray-900 hover:bg-gray-100 w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card group cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="heading-md text-gray-900">Digital Nomad Finance</CardTitle>
                <CardDescription className="text-gray-600">
                  Optimize your finances for location independence with international banking and tax strategies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Multi-currency banking
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Tax optimization strategies
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Location-independent tools
                  </li>
                </ul>
                <Button className="btn-outline w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-gradient mb-2">$2.5M+</div>
              <div className="text-gray-600">Total Wealth Created</div>
            </div>
            <div className="animate-fade-in-up animate-delay-100">
              <div className="text-4xl font-bold text-gradient mb-2">5,000+</div>
              <div className="text-gray-600">Digital Nomads Helped</div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <div className="text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-gray-600">Countries Covered</div>
            </div>
            <div className="animate-fade-in-up animate-delay-300">
              <div className="text-4xl font-bold text-gradient mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 mb-6">
              Why Choose SGNomadWealth
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges and opportunities of building wealth while living a nomadic lifestyle
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="heading-sm text-gray-900 mb-4">Expert Insights</h3>
              <p className="text-gray-600">
                Content created by experienced investors who have successfully built wealth while maintaining nomadic lifestyles.
              </p>
            </div>
            
            <div className="text-center animate-fade-in-up animate-delay-100">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="heading-sm text-gray-900 mb-4">Singapore-Focused</h3>
              <p className="text-gray-600">
                Specialized knowledge of Singapore's unique financial landscape that you won't find elsewhere.
              </p>
            </div>
            
            <div className="text-center animate-fade-in-up animate-delay-200">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="heading-sm text-gray-900 mb-4">Actionable Strategies</h3>
              <p className="text-gray-600">
                No fluff, no theory-only content. Every article provides specific steps you can implement immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg text-white mb-6">
            Ready to Start Building Wealth in Singapore?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join 5,000+ digital nomads who receive weekly insights on Singapore investing, passive income strategies, and nomad-friendly financial planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary text-lg px-8 py-4">
              Get Free Investment Guide <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
              Browse Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;


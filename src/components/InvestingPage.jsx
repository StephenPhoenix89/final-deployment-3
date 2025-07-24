import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingUp, PieChart, Calculator, BookOpen, Users, Star } from 'lucide-react'

const InvestingPage = () => {
  const investmentGuides = [
    {
      title: "Complete Guide to Investing in Singapore for Beginners",
      description: "Everything you need to know about investing in Singapore, from opening your first brokerage account to building a diversified portfolio.",
      readTime: "15 min read",
      difficulty: "Beginner",
      slug: "singapore-investment-guide-beginners",
      featured: true
    },
    {
      title: "Syfe vs StashAway vs Endowus: Complete 2025 Comparison",
      description: "A comprehensive analysis of Singapore's top robo-advisors, including fees, performance, and which platform suits different investor profiles.",
      readTime: "12 min read",
      difficulty: "Intermediate",
      slug: "robo-advisor-comparison-2025",
      featured: true
    },
    {
      title: "Singapore REITs: Your Gateway to Passive Income",
      description: "Learn how to build a diversified REIT portfolio that generates consistent monthly income while you travel the world.",
      readTime: "10 min read",
      difficulty: "Beginner",
      slug: "singapore-reits-passive-income"
    },
    {
      title: "Tax-Efficient Investment Strategies for High Earners",
      description: "Optimize your investment strategy to minimize taxes and maximize after-tax returns using Singapore's favorable tax system.",
      readTime: "14 min read",
      difficulty: "Advanced",
      slug: "tax-efficient-investment-strategies"
    },
    {
      title: "Building Your First $100,000 Investment Portfolio",
      description: "A step-by-step roadmap to reach your first major investment milestone with specific allocation recommendations.",
      readTime: "18 min read",
      difficulty: "Intermediate",
      slug: "first-100k-investment-portfolio"
    },
    {
      title: "International Diversification for Singapore Investors",
      description: "How to build a globally diversified portfolio that reduces risk and captures opportunities worldwide.",
      readTime: "16 min read",
      difficulty: "Intermediate",
      slug: "international-diversification-singapore"
    }
  ]

  const platforms = [
    {
      name: "Tiger Brokers",
      type: "Digital Brokerage",
      pros: ["Commission-free US stocks", "Advanced trading tools", "Global market access"],
      cons: ["Limited Singapore research", "Complex interface for beginners"],
      rating: 4.5,
      bestFor: "Active traders and international investing"
    },
    {
      name: "Syfe",
      type: "Robo-Advisor",
      pros: ["Low fees", "Automated rebalancing", "Goal-based investing"],
      cons: ["Limited customization", "Newer platform"],
      rating: 4.3,
      bestFor: "Hands-off investors and beginners"
    },
    {
      name: "DBS Vickers",
      type: "Traditional Brokerage",
      pros: ["Comprehensive research", "Local expertise", "Full-service support"],
      cons: ["Higher fees", "Minimum account balance"],
      rating: 4.2,
      bestFor: "High-net-worth investors seeking full service"
    },
    {
      name: "Interactive Brokers",
      type: "International Brokerage",
      pros: ["Lowest fees", "Global market access", "Professional tools"],
      cons: ["Complex platform", "High minimum balance"],
      rating: 4.4,
      bestFor: "Sophisticated investors with large portfolios"
    }
  ]

  const tools = [
    {
      icon: Calculator,
      title: "Investment Portfolio Calculator",
      description: "Track your investment growth and allocation across different asset classes",
      link: "#"
    },
    {
      icon: PieChart,
      title: "Asset Allocation Planner",
      description: "Determine the optimal asset allocation based on your risk tolerance and goals",
      link: "#"
    },
    {
      icon: TrendingUp,
      title: "REIT Analysis Tool",
      description: "Compare Singapore REITs by yield, sector, and performance metrics",
      link: "#"
    }
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'Advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Investment Guides & Platform Reviews
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Master <span className="text-primary">Singapore Investing</span> as a Digital Nomad
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive guides, platform comparisons, and expert strategies to help you build wealth through Singapore's world-class financial system
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/resources">
                  Get Free Investment Starter Kit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="#guides">Browse Guides</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section id="guides" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Investment Guides</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From beginner basics to advanced strategies, our comprehensive guides cover everything you need to know about investing in Singapore
            </p>
          </div>

          {/* Featured Articles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {investmentGuides.filter(guide => guide.featured).map((guide, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getDifficultyColor(guide.difficulty)}>
                      {guide.difficulty}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{guide.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {guide.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {guide.description}
                  </CardDescription>
                  <Button variant="ghost" asChild className="p-0 h-auto font-semibold">
                    <Link to={`/articles/${guide.slug}`}>
                      Read Guide <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* All Guides */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentGuides.filter(guide => !guide.featured).map((guide, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getDifficultyColor(guide.difficulty)}>
                      {guide.difficulty}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{guide.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {guide.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{guide.description}</CardDescription>
                  <Button variant="ghost" asChild className="p-0 h-auto font-semibold">
                    <Link to={`/articles/${guide.slug}`}>
                      Read Guide <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Investment Platform Reviews</h2>
            <p className="text-xl text-muted-foreground">
              Honest reviews and comparisons of Singapore's top investment platforms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{platform.name}</CardTitle>
                      <CardDescription className="text-sm">{platform.type}</CardDescription>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span className="font-semibold">{platform.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
                    <ul className="text-sm space-y-1">
                      {platform.pros.map((pro, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-green-500 rounded-full" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Cons:</h4>
                    <ul className="text-sm space-y-1">
                      {platform.cons.map((con, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-red-500 rounded-full" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Best for:</span> {platform.bestFor}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/articles/platform-comparison-2025">View Detailed Comparison</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Free Investment Tools</h2>
            <p className="text-xl text-muted-foreground">
              Calculators and tools to help you plan and track your investments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <tool.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle>{tool.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{tool.description}</CardDescription>
                  <Button variant="outline" asChild>
                    <a href={tool.link}>Use Tool</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl opacity-90">
              Get our comprehensive Singapore Investment Starter Kit with platform comparisons, portfolio templates, and step-by-step guides.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/resources">
                Download Free Starter Kit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InvestingPage


import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, Calculator, FileText, PieChart, TrendingUp, BookOpen, Video, Users } from 'lucide-react'

const ResourcesPage = () => {
  const freeGuides = [
    {
      icon: BookOpen,
      title: "Singapore Investment Starter Kit",
      description: "Complete guide with platform comparisons, account setup instructions, and sample portfolios",
      pages: "18 pages",
      format: "PDF",
      popular: true
    },
    {
      icon: TrendingUp,
      title: "Passive Income Planning Kit",
      description: "Templates and calculators to help you build multiple income streams",
      pages: "Excel + PDF",
      format: "Spreadsheet",
      popular: true
    },
    {
      icon: FileText,
      title: "Digital Nomad Financial Checklist",
      description: "Essential financial tasks and considerations for location-independent professionals",
      pages: "12 pages",
      format: "PDF",
      popular: false
    },
    {
      icon: Calculator,
      title: "Singapore Tax Optimization Guide",
      description: "Strategies to minimize taxes and maximize after-tax returns",
      pages: "24 pages",
      format: "PDF",
      popular: false
    }
  ]

  const calculators = [
    {
      icon: Calculator,
      title: "Investment Portfolio Calculator",
      description: "Track your investment growth and allocation across different asset classes",
      features: ["Asset allocation tracking", "Performance monitoring", "Rebalancing alerts"],
      status: "Available"
    },
    {
      icon: PieChart,
      title: "Passive Income Calculator",
      description: "Calculate how much you need to invest to reach your target monthly income",
      features: ["Goal-based planning", "Multiple scenarios", "Tax considerations"],
      status: "Coming Soon"
    },
    {
      icon: TrendingUp,
      title: "REIT Analysis Tool",
      description: "Compare Singapore REITs by yield, sector, and performance metrics",
      features: ["Dividend tracking", "Sector analysis", "Performance comparison"],
      status: "Coming Soon"
    }
  ]

  const videoSeries = [
    {
      title: "Singapore Investment Basics",
      description: "5-part video series covering the fundamentals of investing in Singapore",
      duration: "2 hours total",
      episodes: 5,
      level: "Beginner"
    },
    {
      title: "REIT Investment Masterclass",
      description: "Deep dive into Singapore REITs with analysis techniques and portfolio construction",
      duration: "3 hours total",
      episodes: 8,
      level: "Intermediate"
    },
    {
      title: "Digital Nomad Tax Planning",
      description: "Advanced tax strategies for location-independent professionals",
      duration: "1.5 hours total",
      episodes: 4,
      level: "Advanced"
    }
  ]

  const communityResources = [
    {
      icon: Users,
      title: "SGNomadWealth Community",
      description: "Join our Telegram group for real-time discussions and Q&A",
      members: "2,500+",
      activity: "Daily"
    },
    {
      icon: Video,
      title: "Monthly Webinars",
      description: "Live sessions covering market updates and investment strategies",
      frequency: "Monthly",
      duration: "1 hour"
    },
    {
      icon: FileText,
      title: "Weekly Newsletter",
      description: "Market insights, new opportunities, and exclusive content",
      subscribers: "5,000+",
      frequency: "Weekly"
    }
  ]

  const platformReviews = [
    {
      platform: "Syfe",
      rating: 4.3,
      review: "Excellent robo-advisor for beginners with low fees and automated rebalancing",
      pros: ["Low fees", "Easy to use", "Goal-based investing"],
      cons: ["Limited customization", "Newer platform"]
    },
    {
      platform: "StashAway",
      rating: 4.2,
      review: "Sophisticated risk management with good international exposure",
      pros: ["Advanced algorithms", "Global diversification", "Transparent fees"],
      cons: ["Higher minimums", "Complex interface"]
    },
    {
      platform: "Tiger Brokers",
      rating: 4.5,
      review: "Best for active traders with commission-free US stocks and advanced tools",
      pros: ["Commission-free trading", "Advanced tools", "Global markets"],
      cons: ["Complex for beginners", "Limited research"]
    },
    {
      platform: "Interactive Brokers",
      rating: 4.4,
      review: "Professional-grade platform with lowest fees for sophisticated investors",
      pros: ["Lowest fees", "Global access", "Professional tools"],
      cons: ["High minimum", "Steep learning curve"]
    }
  ]

  const getLevelColor = (level) => {
    switch (level) {
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
              Free Resources & Tools
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Everything You Need to <span className="text-primary">Build Wealth</span> in Singapore
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access our comprehensive collection of free guides, calculators, and tools designed specifically for digital nomads building wealth in Singapore
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download All Resources
              </Button>
              <Button variant="outline" size="lg">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Guides */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Free Investment Guides</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive guides to help you start and optimize your investment journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {freeGuides.map((guide, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow relative">
                {guide.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <guide.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{guide.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {guide.pages}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {guide.format}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {guide.description}
                  </CardDescription>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculators & Tools */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Investment Calculators & Tools</h2>
            <p className="text-xl text-muted-foreground">
              Interactive tools to help you plan and track your investments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {calculators.map((calculator, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                      <calculator.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle>{calculator.title}</CardTitle>
                  <Badge variant={calculator.status === 'Available' ? 'default' : 'secondary'}>
                    {calculator.status}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{calculator.description}</CardDescription>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {calculator.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center space-x-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={calculator.status === 'Available' ? 'default' : 'outline'}
                    disabled={calculator.status !== 'Available'}
                  >
                    {calculator.status === 'Available' ? 'Use Tool' : 'Coming Soon'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Series */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Video Learning Series</h2>
            <p className="text-xl text-muted-foreground">
              In-depth video courses covering all aspects of Singapore investing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoSeries.map((series, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getLevelColor(series.level)}>
                      {series.level}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{series.duration}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {series.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{series.description}</CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{series.episodes} episodes</span>
                    <span>{series.duration}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Video className="mr-2 h-4 w-4" />
                    Watch Series
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Reviews */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Investment Platform Reviews</h2>
            <p className="text-xl text-muted-foreground">
              Honest, detailed reviews of Singapore's top investment platforms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformReviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{review.platform}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <span className="text-2xl font-bold text-primary">{review.rating}</span>
                      <span className="text-sm text-muted-foreground">/5</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic">"{review.review}"</p>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <h4 className="font-semibold text-green-600 text-sm mb-1">Pros:</h4>
                      <ul className="text-xs space-y-1">
                        {review.pros.map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 text-sm mb-1">Cons:</h4>
                      <ul className="text-xs space-y-1">
                        {review.cons.map((con, i) => (
                          <li key={i}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Read Full Review
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Community & Learning</h2>
            <p className="text-xl text-muted-foreground">
              Connect with like-minded investors and stay updated with market insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityResources.map((resource, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                      <resource.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{resource.description}</CardDescription>
                  <div className="text-sm text-muted-foreground space-y-1">
                    {resource.members && (
                      <div className="flex justify-center items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{resource.members} members</span>
                      </div>
                    )}
                    {resource.frequency && (
                      <div className="flex justify-center items-center space-x-2">
                        <span>{resource.frequency}</span>
                      </div>
                    )}
                    {resource.subscribers && (
                      <div className="flex justify-center items-center space-x-2">
                        <span>{resource.subscribers} subscribers</span>
                      </div>
                    )}
                  </div>
                  <Button>Join Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Get Weekly Investment Insights
            </h2>
            <p className="text-xl opacity-90">
              Join 5,000+ digital nomads who receive our weekly newsletter with market updates, new opportunities, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button size="lg" variant="secondary">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResourcesPage


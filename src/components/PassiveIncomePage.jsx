import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ArrowRight, DollarSign, TrendingUp, Building, Banknote, Calculator, PieChart } from 'lucide-react'
import passiveIncomeGrowth from '../assets/passive_income_growth.jpg'

const PassiveIncomePage = () => {
  const incomeStrategies = [
    {
      icon: Building,
      title: "Singapore REITs",
      description: "Real Estate Investment Trusts that distribute 90% of income to shareholders",
      yield: "5-8%",
      riskLevel: "Medium",
      minInvestment: "$1,000",
      timeToSetup: "1 day",
      effort: "Low"
    },
    {
      icon: TrendingUp,
      title: "Dividend Growth Stocks",
      description: "Companies with strong track records of increasing dividend payments",
      yield: "3-6%",
      riskLevel: "Medium-High",
      minInvestment: "$500",
      timeToSetup: "1 day",
      effort: "Medium"
    },
    {
      icon: Banknote,
      title: "Singapore Savings Bonds",
      description: "Government-backed bonds with step-up interest rates",
      yield: "2-4%",
      riskLevel: "Low",
      minInvestment: "$500",
      timeToSetup: "1 week",
      effort: "Low"
    },
    {
      icon: PieChart,
      title: "Robo-Advisor Income Portfolios",
      description: "Professionally managed portfolios optimized for income generation",
      yield: "4-7%",
      riskLevel: "Medium",
      minInvestment: "$1,000",
      timeToSetup: "1 day",
      effort: "Very Low"
    }
  ]

  const incomeGoals = [
    {
      monthly: 500,
      annual: 6000,
      capitalRequired: 120000,
      avgYield: 5,
      strategies: ["S-REITs (60%)", "Dividend Stocks (40%)"]
    },
    {
      monthly: 1000,
      annual: 12000,
      capitalRequired: 240000,
      avgYield: 5,
      strategies: ["S-REITs (50%)", "Dividend Stocks (30%)", "Bonds (20%)"]
    },
    {
      monthly: 2000,
      annual: 24000,
      capitalRequired: 480000,
      avgYield: 5,
      strategies: ["S-REITs (40%)", "Dividend Stocks (35%)", "Bonds (15%)", "Alternatives (10%)"]
    },
    {
      monthly: 5000,
      annual: 60000,
      capitalRequired: 1200000,
      avgYield: 5,
      strategies: ["Diversified Portfolio", "Private Banking", "Alternative Investments"]
    }
  ]

  const articles = [
    {
      title: "How to Earn $2,000 Monthly Passive Income in Singapore",
      description: "Step-by-step guide to building multiple passive income streams using Singapore's investment opportunities.",
      readTime: "15 min read",
      slug: "passive-income-singapore-2000",
      featured: true
    },
    {
      title: "Singapore REITs: Complete Guide to Dividend Investing",
      description: "Everything you need to know about investing in S-REITs for consistent passive income.",
      readTime: "12 min read",
      slug: "singapore-reits-dividend-guide"
    },
    {
      title: "Building a Dividend Growth Portfolio in Singapore",
      description: "How to select and manage dividend-paying stocks that grow their payments over time.",
      readTime: "14 min read",
      slug: "dividend-growth-portfolio-singapore"
    },
    {
      title: "Passive Income Tax Optimization Strategies",
      description: "Maximize your after-tax passive income using Singapore's favorable tax system.",
      readTime: "10 min read",
      slug: "passive-income-tax-optimization"
    }
  ]

  const tools = [
    {
      icon: Calculator,
      title: "Passive Income Calculator",
      description: "Calculate how much you need to invest to reach your target monthly income",
      features: ["Goal-based planning", "Multiple scenarios", "Tax considerations"]
    },
    {
      icon: TrendingUp,
      title: "Dividend Tracker",
      description: "Track your dividend payments and monitor portfolio performance",
      features: ["Payment calendar", "Yield tracking", "Growth analysis"]
    },
    {
      icon: PieChart,
      title: "Portfolio Optimizer",
      description: "Optimize your asset allocation for maximum income generation",
      features: ["Risk assessment", "Yield optimization", "Rebalancing alerts"]
    }
  ]

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low':
        return 'bg-green-100 text-green-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'Medium-High':
        return 'bg-orange-100 text-orange-800'
      case 'High':
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                Passive Income Strategies
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Create <span className="text-primary">Multiple Income Streams</span> That Work While You Travel
              </h1>
              <p className="text-xl text-muted-foreground">
                Learn how to build robust passive income streams using Singapore's financial tools, from dividend-paying stocks and REITs to automated investment strategies
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/resources">
                    Get Passive Income Planning Kit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="#strategies">Explore Strategies</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={passiveIncomeGrowth}
                alt="Passive Income Growth"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Income Goals Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Your Path to Financial Freedom</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how much capital you need to generate different levels of monthly passive income
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {incomeGoals.map((goal, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary">${goal.monthly.toLocaleString()}</div>
                  <CardTitle className="text-lg">Monthly Income</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Capital Required:</span>
                      <span className="font-semibold">${goal.capitalRequired.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Average Yield:</span>
                      <span className="font-semibold">{goal.avgYield}%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Recommended Mix:</p>
                    <div className="text-xs text-muted-foreground space-y-1">
                      {goal.strategies.map((strategy, i) => (
                        <div key={i}>{strategy}</div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section id="strategies" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Passive Income Strategies</h2>
            <p className="text-xl text-muted-foreground">
              Proven methods to generate consistent income with minimal ongoing effort
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {incomeStrategies.map((strategy, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <strategy.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{strategy.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {strategy.yield} yield
                        </Badge>
                        <Badge className={getRiskColor(strategy.riskLevel)}>
                          {strategy.riskLevel} risk
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {strategy.description}
                  </CardDescription>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Min Investment:</span>
                      <div className="font-semibold">{strategy.minInvestment}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Setup Time:</span>
                      <div className="font-semibold">{strategy.timeToSetup}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Ongoing Effort:</span>
                      <div className="font-semibold">{strategy.effort}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Passive Income Guides</h2>
            <p className="text-xl text-muted-foreground">
              In-depth guides to help you build and optimize your passive income streams
            </p>
          </div>
          
          {/* Featured Article */}
          <div className="mb-12">
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary">Featured Guide</Badge>
                      <span className="text-sm text-muted-foreground">{articles[0].readTime}</span>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {articles[0].title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-lg">
                      {articles[0].description}
                    </CardDescription>
                    <Button asChild>
                      <Link to={`/articles/${articles[0].slug}`}>
                        Read Complete Guide <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
                <div className="flex items-center justify-center bg-muted/50 rounded-lg p-8">
                  <DollarSign className="h-24 w-24 text-primary/20" />
                </div>
              </div>
            </Card>
          </div>

          {/* Other Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.slice(1).map((article, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{article.description}</CardDescription>
                  <Button variant="ghost" asChild className="p-0 h-auto font-semibold">
                    <Link to={`/articles/${article.slug}`}>
                      Read Guide <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Free Passive Income Tools</h2>
            <p className="text-xl text-muted-foreground">
              Calculators and trackers to help you plan and monitor your passive income journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                      <tool.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle>{tool.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{tool.description}</CardDescription>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center space-x-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline">Coming Soon</Button>
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
              Start Building Your Passive Income Today
            </h2>
            <p className="text-xl opacity-90">
              Get our comprehensive Passive Income Planning Kit with calculators, templates, and step-by-step guides to help you reach your financial goals.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/resources">
                Download Free Planning Kit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PassiveIncomePage


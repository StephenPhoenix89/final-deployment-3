import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Building2, CreditCard, PiggyBank, FileText, Calculator, TrendingUp } from 'lucide-react'
import singaporeDollar from '../assets/singapore_dollar.jpg'

const SingaporeFinancePage = () => {
  const financeTopics = [
    {
      icon: Building2,
      title: "CPF Investment Scheme",
      description: "Maximize your CPF returns by investing in approved instruments while building retirement wealth",
      articles: ["CPF Investment Guide", "Approved Investment List", "Risk Management"],
      difficulty: "Intermediate"
    },
    {
      icon: PiggyBank,
      title: "Supplementary Retirement Scheme (SRS)",
      description: "Tax-advantaged investing for retirement with immediate tax deductions and tax-free growth",
      articles: ["SRS Complete Guide", "Tax Benefits Analysis", "Withdrawal Strategies"],
      difficulty: "Advanced"
    },
    {
      icon: CreditCard,
      title: "Banking for Nomads",
      description: "Best banking solutions for digital nomads including multi-currency accounts and international transfers",
      articles: ["Bank Comparison", "International Banking", "Fee Optimization"],
      difficulty: "Beginner"
    },
    {
      icon: FileText,
      title: "Tax Optimization",
      description: "Navigate Singapore's tax system to minimize your tax burden while maximizing investment returns",
      articles: ["Tax Residency Guide", "Investment Tax Planning", "International Tax Treaties"],
      difficulty: "Advanced"
    }
  ]

  const bankingOptions = [
    {
      name: "DBS Bank",
      type: "Local Bank",
      features: ["Multi-currency account", "Global remittance", "Investment platform", "Digital banking"],
      pros: ["Comprehensive services", "Strong digital platform", "Global presence"],
      cons: ["Higher fees for some services", "Minimum balance requirements"],
      bestFor: "High-net-worth individuals and comprehensive banking needs"
    },
    {
      name: "OCBC Bank",
      type: "Local Bank",
      features: ["360 Account", "International transfers", "Investment services", "Premier banking"],
      pros: ["Competitive rates", "Good customer service", "Regional network"],
      cons: ["Limited international presence", "Complex fee structure"],
      bestFor: "Regional banking and investment services"
    },
    {
      name: "Wise (formerly TransferWise)",
      type: "Digital Bank",
      features: ["Multi-currency account", "Low-cost transfers", "Debit card", "Business accounts"],
      pros: ["Transparent fees", "Real exchange rates", "Global coverage"],
      cons: ["Limited banking services", "No physical branches"],
      bestFor: "Digital nomads and international transfers"
    },
    {
      name: "Revolut",
      type: "Digital Bank",
      features: ["Multi-currency wallet", "Cryptocurrency", "Investment platform", "Travel benefits"],
      pros: ["Innovative features", "Low fees", "Great mobile app"],
      cons: ["Limited Singapore presence", "Customer service issues"],
      bestFor: "Tech-savvy users and frequent travelers"
    }
  ]

  const taxBenefits = [
    {
      scheme: "CPF Investment Scheme",
      taxBenefit: "Tax-free growth on investments",
      contribution: "Up to 35% of OA balance",
      withdrawal: "At age 55 (with conditions)",
      suitability: "Singapore citizens and PRs"
    },
    {
      scheme: "Supplementary Retirement Scheme",
      taxBenefit: "Tax deduction on contributions",
      contribution: "Up to $15,300 annually",
      withdrawal: "From age 62 (50% taxable)",
      suitability: "All tax residents"
    },
    {
      scheme: "Regular Investment Account",
      taxBenefit: "No capital gains tax",
      contribution: "No limits",
      withdrawal: "Anytime",
      suitability: "All investors"
    }
  ]

  const guides = [
    {
      title: "Complete Guide to Singapore Banking for Digital Nomads",
      description: "Everything you need to know about opening and managing bank accounts in Singapore as a location-independent professional.",
      readTime: "12 min read",
      difficulty: "Beginner",
      slug: "singapore-banking-digital-nomads"
    },
    {
      title: "CPF Investment Scheme: Maximizing Your Returns",
      description: "How to use your CPF savings to invest in approved instruments and potentially earn higher returns than the guaranteed rates.",
      readTime: "15 min read",
      difficulty: "Intermediate",
      slug: "cpf-investment-scheme-guide"
    },
    {
      title: "SRS Tax Benefits and Investment Strategies",
      description: "Comprehensive guide to the Supplementary Retirement Scheme and how to maximize its tax advantages.",
      readTime: "18 min read",
      difficulty: "Advanced",
      slug: "srs-tax-benefits-strategies"
    },
    {
      title: "Singapore Tax Optimization for High Earners",
      description: "Advanced strategies to minimize your tax burden while building wealth in Singapore's favorable tax environment.",
      readTime: "20 min read",
      difficulty: "Advanced",
      slug: "singapore-tax-optimization-high-earners"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                Singapore Financial System
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Master <span className="text-primary">Singapore's Financial System</span> as a Digital Nomad
              </h1>
              <p className="text-xl text-muted-foreground">
                Navigate CPF, SRS, banking, and tax optimization to maximize your wealth while maintaining nomadic freedom in Singapore
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/resources">
                    Get Singapore Finance Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="#topics">Explore Topics</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={singaporeDollar}
                alt="Singapore Dollar Currency"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Finance Topics */}
      <section id="topics" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Singapore Finance Topics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master the key components of Singapore's financial system to optimize your wealth building strategy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {financeTopics.map((topic, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <topic.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{topic.title}</CardTitle>
                      <Badge className={getDifficultyColor(topic.difficulty)}>
                        {topic.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {topic.description}
                  </CardDescription>
                  <div>
                    <p className="text-sm font-medium mb-2">Related Articles:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {topic.articles.map((article, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          <span>{article}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Banking Options */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Banking Solutions for Digital Nomads</h2>
            <p className="text-xl text-muted-foreground">
              Compare banking options that work seamlessly for location-independent professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bankingOptions.map((bank, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{bank.name}</CardTitle>
                      <CardDescription>{bank.type}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="text-sm space-y-1">
                      {bank.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <h4 className="font-semibold text-green-600 text-sm mb-1">Pros:</h4>
                      <ul className="text-xs space-y-1">
                        {bank.pros.map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 text-sm mb-1">Cons:</h4>
                      <ul className="text-xs space-y-1">
                        {bank.cons.map((con, i) => (
                          <li key={i}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Best for:</span> {bank.bestFor}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Benefits Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Tax-Advantaged Investment Schemes</h2>
            <p className="text-xl text-muted-foreground">
              Compare different investment schemes and their tax benefits
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Scheme</th>
                  <th className="text-left p-4 font-semibold">Tax Benefit</th>
                  <th className="text-left p-4 font-semibold">Contribution Limit</th>
                  <th className="text-left p-4 font-semibold">Withdrawal</th>
                  <th className="text-left p-4 font-semibold">Suitability</th>
                </tr>
              </thead>
              <tbody>
                {taxBenefits.map((benefit, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-4 font-medium">{benefit.scheme}</td>
                    <td className="p-4 text-sm">{benefit.taxBenefit}</td>
                    <td className="p-4 text-sm">{benefit.contribution}</td>
                    <td className="p-4 text-sm">{benefit.withdrawal}</td>
                    <td className="p-4 text-sm">{benefit.suitability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Singapore Finance Guides</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive guides to help you navigate Singapore's financial system
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
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
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Singapore Finance Tools</h2>
            <p className="text-xl text-muted-foreground">
              Calculators and tools to help you optimize your Singapore financial strategy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    <Calculator className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle>CPF Investment Calculator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>
                  Calculate potential returns from investing your CPF savings in approved instruments
                </CardDescription>
                <Button variant="outline">Coming Soon</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    <PiggyBank className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle>SRS Tax Benefit Calculator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>
                  Calculate your tax savings and optimal SRS contribution amount
                </CardDescription>
                <Button variant="outline">Coming Soon</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle>Tax Optimization Planner</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>
                  Plan your investment allocation across different accounts for maximum tax efficiency
                </CardDescription>
                <Button variant="outline">Coming Soon</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Master Singapore's Financial System
            </h2>
            <p className="text-xl opacity-90">
              Get our comprehensive Singapore Finance Guide with banking comparisons, tax optimization strategies, and step-by-step setup instructions.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/resources">
                Download Free Finance Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingaporeFinancePage


import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Globe, Plane, CreditCard, Shield, Calculator, FileText } from 'lucide-react'
import digitalNomadLaptop from '../assets/digital_nomad_laptop.jpg'

const DigitalNomadPage = () => {
  const nomadChallenges = [
    {
      icon: CreditCard,
      title: "Multi-Currency Banking",
      description: "Managing finances across multiple currencies while minimizing fees and maximizing convenience",
      solutions: ["Multi-currency accounts", "Low-cost transfer services", "Currency hedging strategies"],
      difficulty: "Intermediate"
    },
    {
      icon: FileText,
      title: "International Tax Planning",
      description: "Navigating tax obligations across multiple jurisdictions while optimizing your overall tax burden",
      solutions: ["Tax residency planning", "Treaty benefits", "Professional tax advice"],
      difficulty: "Advanced"
    },
    {
      icon: Shield,
      title: "Emergency Fund Management",
      description: "Maintaining accessible emergency funds across different countries and currencies",
      solutions: ["Geographic diversification", "Multiple account access", "Liquid investment options"],
      difficulty: "Beginner"
    },
    {
      icon: Globe,
      title: "Investment Platform Access",
      description: "Ensuring continuous access to your investments regardless of your physical location",
      solutions: ["Singapore-based platforms", "VPN considerations", "Mobile-first solutions"],
      difficulty: "Intermediate"
    }
  ]

  const bankingSolutions = [
    {
      name: "Wise Multi-Currency Account",
      type: "Digital Banking",
      features: ["40+ currencies", "Real exchange rates", "Global debit card", "Local bank details"],
      fees: "0.35-2% transfer fees",
      pros: ["Transparent pricing", "Fast transfers", "Global coverage"],
      cons: ["Limited banking services", "No physical branches"],
      nomadRating: 9
    },
    {
      name: "DBS Multi-Currency Account",
      type: "Traditional Banking",
      features: ["12 currencies", "Global remittance", "Investment platform", "Premier banking"],
      fees: "Variable based on tier",
      pros: ["Full banking services", "Investment integration", "Regional presence"],
      cons: ["Higher fees", "Minimum balance requirements"],
      nomadRating: 7
    },
    {
      name: "Revolut Business",
      type: "Digital Banking",
      features: ["30+ currencies", "Cryptocurrency", "Expense management", "Team cards"],
      fees: "Monthly subscription + usage",
      pros: ["Business features", "Crypto integration", "Expense tracking"],
      cons: ["Limited customer service", "Regulatory uncertainty"],
      nomadRating: 8
    }
  ]

  const taxConsiderations = [
    {
      scenario: "Singapore Tax Resident",
      description: "Maintaining Singapore tax residency while traveling",
      benefits: ["Territorial tax system", "No capital gains tax", "Tax treaty network"],
      requirements: ["183+ days in Singapore", "Maintain Singapore ties", "Proper documentation"],
      complexity: "Medium"
    },
    {
      scenario: "Non-Resident for Tax",
      description: "Becoming non-resident for Singapore tax purposes",
      benefits: ["Potential tax savings", "Greater flexibility", "Simplified compliance"],
      requirements: ["Less than 183 days in Singapore", "Establish tax residency elsewhere", "Proper exit planning"],
      complexity: "High"
    },
    {
      scenario: "Digital Nomad Visa Holder",
      description: "Using special nomad visa programs",
      benefits: ["Legal clarity", "Simplified procedures", "Networking opportunities"],
      requirements: ["Meet visa requirements", "Maintain compliance", "Regular renewals"],
      complexity: "Medium"
    }
  ]

  const guides = [
    {
      title: "Complete Digital Nomad Banking Guide for Singapore Residents",
      description: "Everything you need to know about managing your finances while traveling the world as a Singapore-based nomad.",
      readTime: "16 min read",
      difficulty: "Intermediate",
      slug: "digital-nomad-banking-singapore"
    },
    {
      title: "International Tax Planning for Singapore Digital Nomads",
      description: "Navigate complex tax obligations and optimize your tax strategy across multiple jurisdictions.",
      readTime: "22 min read",
      difficulty: "Advanced",
      slug: "international-tax-planning-nomads"
    },
    {
      title: "Emergency Fund Strategies for Location-Independent Professionals",
      description: "Build and maintain emergency funds that are accessible from anywhere in the world.",
      readTime: "12 min read",
      difficulty: "Beginner",
      slug: "emergency-fund-digital-nomads"
    },
    {
      title: "Investment Management While Traveling: Tools and Strategies",
      description: "How to monitor and manage your investment portfolio while living a nomadic lifestyle.",
      readTime: "14 min read",
      difficulty: "Intermediate",
      slug: "investment-management-nomads"
    }
  ]

  const tools = [
    {
      icon: Calculator,
      title: "Nomad Tax Calculator",
      description: "Calculate your tax obligations across different countries and residency scenarios",
      features: ["Multi-country comparison", "Residency planning", "Treaty benefits"]
    },
    {
      icon: CreditCard,
      title: "Banking Fee Optimizer",
      description: "Compare banking solutions and minimize fees for international transactions",
      features: ["Fee comparison", "Currency optimization", "Account recommendations"]
    },
    {
      icon: Globe,
      title: "Location Independence Planner",
      description: "Plan your nomadic journey with financial and legal considerations",
      features: ["Visa requirements", "Tax implications", "Banking access"]
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

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Low':
        return 'bg-green-100 text-green-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
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
                Digital Nomad Finance
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Optimize Your Finances for <span className="text-primary">Location Independence</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Master international banking, tax optimization, and investment management while maintaining the freedom to work from anywhere in the world
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/resources">
                    Get Digital Nomad Finance Kit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="#challenges">Explore Solutions</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={digitalNomadLaptop}
                alt="Digital Nomad Working"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Nomad Challenges */}
      <section id="challenges" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Common Digital Nomad Financial Challenges</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understand and overcome the unique financial challenges faced by location-independent professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nomadChallenges.map((challenge, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <challenge.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{challenge.title}</CardTitle>
                      <Badge className={getDifficultyColor(challenge.difficulty)}>
                        {challenge.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {challenge.description}
                  </CardDescription>
                  <div>
                    <p className="text-sm font-medium mb-2">Solutions:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {challenge.solutions.map((solution, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          <span>{solution}</span>
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

      {/* Banking Solutions */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Banking Solutions for Digital Nomads</h2>
            <p className="text-xl text-muted-foreground">
              Compare banking options optimized for location-independent professionals
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bankingSolutions.map((solution, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{solution.name}</CardTitle>
                      <CardDescription>{solution.type}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{solution.nomadRating}/10</div>
                      <div className="text-xs text-muted-foreground">Nomad Rating</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="text-sm space-y-1">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fees:</h4>
                    <p className="text-sm text-muted-foreground">{solution.fees}</p>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <div>
                      <h4 className="font-semibold text-green-600 text-sm">Pros:</h4>
                      <ul className="text-xs space-y-1">
                        {solution.pros.map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 text-sm">Cons:</h4>
                      <ul className="text-xs space-y-1">
                        {solution.cons.map((con, i) => (
                          <li key={i}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Considerations */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Tax Planning Scenarios</h2>
            <p className="text-xl text-muted-foreground">
              Understand different tax scenarios and their implications for digital nomads
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {taxConsiderations.map((scenario, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{scenario.scenario}</CardTitle>
                  <CardDescription>{scenario.description}</CardDescription>
                  <Badge className={getComplexityColor(scenario.complexity)}>
                    {scenario.complexity} Complexity
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Benefits:</h4>
                    <ul className="text-sm space-y-1">
                      {scenario.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-green-500 rounded-full" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Requirements:</h4>
                    <ul className="text-sm space-y-1">
                      {scenario.requirements.map((requirement, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-blue-500 rounded-full" />
                          <span>{requirement}</span>
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

      {/* Guides Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Digital Nomad Finance Guides</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive guides to help you master nomadic finance
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
            <h2 className="text-3xl lg:text-4xl font-bold">Digital Nomad Finance Tools</h2>
            <p className="text-xl text-muted-foreground">
              Tools and calculators designed specifically for location-independent professionals
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
              Master Digital Nomad Finance
            </h2>
            <p className="text-xl opacity-90">
              Get our comprehensive Digital Nomad Finance Kit with banking guides, tax planning templates, and location independence checklists.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/resources">
                Download Free Nomad Kit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DigitalNomadPage


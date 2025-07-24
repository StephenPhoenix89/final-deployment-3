import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Target, Users, TrendingUp, Globe, Shield, Award } from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Expert Insights",
      description: "Our content is created by experienced investors and financial professionals who have successfully built wealth while maintaining nomadic lifestyles."
    },
    {
      icon: Globe,
      title: "Singapore-Focused",
      description: "We specialize in Singapore's unique financial landscape, providing insights you won't find in generic international finance blogs."
    },
    {
      icon: TrendingUp,
      title: "Actionable Strategies",
      description: "No fluff, no theory-only content. Every article provides specific, actionable steps you can implement immediately."
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Join a community of like-minded professionals who are successfully building wealth while living their dream lifestyle."
    }
  ]

  const stats = [
    {
      number: "5,000+",
      label: "Newsletter Subscribers",
      description: "Digital nomads and investors who trust our insights"
    },
    {
      number: "50+",
      label: "In-Depth Guides",
      description: "Comprehensive articles covering every aspect of Singapore investing"
    },
    {
      number: "4.9/5",
      label: "Reader Rating",
      description: "Average rating from our community feedback"
    },
    {
      number: "30+",
      label: "Countries Represented",
      description: "Global community of location-independent professionals"
    }
  ]

  const team = [
    {
      name: "Alex Chen",
      role: "Founder & Lead Investment Strategist",
      bio: "Former investment banker with 10+ years experience in Singapore's financial sector. Built a $2M portfolio while traveling to 40+ countries.",
      expertise: ["Singapore Markets", "Portfolio Management", "Tax Optimization"]
    },
    {
      name: "Sarah Lim",
      role: "Digital Nomad Finance Expert",
      bio: "Certified Financial Planner specializing in international tax planning and nomadic lifestyle optimization. 8 years of nomadic experience.",
      expertise: ["International Tax", "Banking Solutions", "Nomad Finance"]
    },
    {
      name: "Marcus Tan",
      role: "REIT & Passive Income Specialist",
      bio: "Real estate investment expert with deep knowledge of Singapore REITs. Generates $5,000+ monthly passive income from diversified portfolio.",
      expertise: ["Singapore REITs", "Passive Income", "Real Estate"]
    }
  ]

  const milestones = [
    {
      year: "2022",
      title: "SGNomadWealth Founded",
      description: "Started as a personal blog sharing investment experiences while traveling"
    },
    {
      year: "2023",
      title: "Community Growth",
      description: "Reached 1,000 newsletter subscribers and launched comprehensive investment guides"
    },
    {
      year: "2024",
      title: "Platform Expansion",
      description: "Launched interactive tools and expanded content to cover all aspects of nomadic finance"
    },
    {
      year: "2025",
      title: "Market Leadership",
      description: "Became Singapore's leading resource for digital nomad investment strategies"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              About SGNomadWealth
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Empowering <span className="text-primary">Digital Nomads</span> to Build Wealth in Singapore
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe that geographic freedom shouldn't come at the cost of financial growth. Our mission is to empower digital nomads with the knowledge and tools needed to leverage Singapore's world-class financial infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To bridge the gap between traditional Singapore finance and the modern nomadic lifestyle, providing actionable insights that help location-independent professionals build substantial wealth while maintaining geographic freedom.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">What Makes Us Different</h3>
                <p className="text-muted-foreground">
                  Unlike generic investment advice, every strategy we share is specifically tailored for high-earning professionals who value both wealth accumulation and lifestyle freedom. We understand the complexities of international taxation, multi-currency management, and the unique investment opportunities available to Singapore residents.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold">Trusted Expertise</h4>
                <p className="text-sm text-muted-foreground">
                  Content created by experienced professionals with proven track records
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold">Proven Results</h4>
                <p className="text-sm text-muted-foreground">
                  Strategies tested and validated by our community of successful nomads
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at SGNomadWealth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Impact</h2>
            <p className="text-xl text-muted-foreground">
              Numbers that reflect our commitment to the digital nomad community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-primary">{stat.number}</div>
                <div className="text-lg font-semibold">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals who understand both finance and the nomadic lifestyle
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-center space-y-2">
                    <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="font-medium">{member.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
                  <div>
                    <h4 className="font-semibold mb-2 text-center">Expertise:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              From personal blog to Singapore's leading nomad finance resource
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                      <Badge variant="outline">{milestone.year}</Badge>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Join Our Community
            </h2>
            <p className="text-xl opacity-90">
              Become part of a growing community of digital nomads who are successfully building wealth while living their dream lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/resources">
                  Get Free Resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage


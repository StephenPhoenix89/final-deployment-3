import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Clock, User, Calendar, ArrowRight, Share2 } from 'lucide-react'

const ArticlePage = () => {
  const { slug } = useParams()

  // Mock article data - in a real app, this would come from an API or CMS
  const articles = {
    'singapore-investment-guide-beginners': {
      title: "Complete Guide to Investing in Singapore for Beginners",
      description: "Everything you need to know about investing in Singapore, from opening your first brokerage account to building a diversified portfolio.",
      content: `
# Complete Guide to Investing in Singapore for Beginners

Singapore stands as one of Asia's premier financial hubs, offering investors unparalleled access to global markets, sophisticated investment platforms, and a regulatory environment that prioritizes investor protection. For digital nomads and high-earning professionals choosing Singapore as their base, understanding the local investment landscape is crucial for building long-term wealth while maintaining geographic flexibility.

## Why Singapore is Perfect for Digital Nomad Investors

Singapore's strategic position as a financial gateway between East and West makes it an ideal base for location-independent professionals. The city-state offers several unique advantages that make it particularly attractive for digital nomads looking to build wealth.

The regulatory framework in Singapore is among the world's most robust, with the Monetary Authority of Singapore (MAS) maintaining strict oversight that protects investors while fostering innovation. This creates an environment where you can invest with confidence, knowing that your assets are protected by world-class regulations.

## Understanding Singapore's Investment Landscape

The Singapore investment ecosystem encompasses several distinct market segments, each offering unique opportunities for wealth building. Understanding these segments is crucial for making informed investment decisions that align with your risk tolerance and financial objectives.

The Singapore Exchange (SGX) serves as the primary stock exchange, listing over 700 companies across various sectors. The exchange is known for its strong representation of real estate investment trusts (REITs), banking stocks, and companies with significant exposure to the broader Asian economy.

## Essential Investment Accounts for Singapore Residents

Before you can begin investing in Singapore, you'll need to establish the appropriate accounts that provide access to local and international markets while optimizing your tax situation. Understanding the different account types and their specific benefits is crucial for maximizing your investment efficiency.

The Central Provident Fund (CPF) Investment Scheme represents a unique opportunity for Singapore residents and permanent residents. Through CPFIS, you can use a portion of your CPF savings to invest in approved instruments, including stocks, bonds, and unit trusts.

## Getting Started: Your Action Plan

Beginning your investment journey in Singapore requires systematic preparation and careful execution. Following a structured approach helps ensure you make informed decisions and avoid common pitfalls that can derail your wealth-building efforts.

Start by clarifying your financial goals and investment timeline. Are you investing for retirement, building passive income, or accumulating wealth for a specific purpose? Your goals will determine your appropriate asset allocation and investment strategy.

## Conclusion

Investing in Singapore as a digital nomad offers unique opportunities to build substantial wealth while maintaining the freedom to live and work anywhere in the world. The combination of sophisticated financial infrastructure, favorable tax treatment, and access to global markets makes Singapore an ideal base for nomadic investors.

Success in investing requires patience, discipline, and continuous learning. Start with the basics, build good habits, and gradually expand your knowledge and investment sophistication over time.
      `,
      author: "SGNomadWealth Team",
      publishDate: "January 21, 2025",
      readTime: "15 min read",
      difficulty: "Beginner",
      category: "Investment Guides"
    },
    'passive-income-singapore-2000': {
      title: "How to Earn $2,000 Monthly Passive Income in Singapore",
      description: "Step-by-step guide to building multiple passive income streams using Singapore's investment opportunities and financial tools.",
      content: `
# How to Earn $2,000 Monthly Passive Income in Singapore

Building substantial passive income while based in Singapore represents one of the most effective paths to financial freedom for digital nomads and location-independent professionals. With Singapore's sophisticated financial infrastructure, favorable tax environment, and access to high-quality investment opportunities, earning $2,000 or more in monthly passive income is not only achievable but can be accomplished through multiple complementary strategies.

## Understanding Passive Income in the Singapore Context

Passive income in Singapore benefits from several unique advantages that make it particularly attractive for digital nomads and high-earning professionals. The city-state's territorial tax system, combined with its position as a regional financial hub, creates an environment where passive income can grow efficiently with minimal tax drag.

## Strategy 1: Singapore REIT Dividend Portfolio

Real Estate Investment Trusts (REITs) form the cornerstone of many successful passive income strategies in Singapore. S-REITs are required by law to distribute at least 90% of their taxable income to shareholders, making them reliable sources of quarterly dividend payments.

To generate $500 monthly ($6,000 annually) from S-REITs, assuming an average dividend yield of 6%, you would need to invest approximately $100,000. This calculation assumes reinvestment of dividends to compound growth over time.

## Strategy 2: Dividend Growth Stock Portfolio

Dividend growth investing focuses on companies with strong track records of increasing their dividend payments over time. This strategy provides growing passive income that can keep pace with inflation while building long-term wealth through capital appreciation.

The three major Singapore banks - DBS Group, OCBC Bank, and United Overseas Bank (UOB) - have historically provided reliable dividend growth. With dividend yields typically ranging from 4-6%, these stocks can form the foundation of a dividend growth portfolio.

## Calculating Your Path to $2,000 Monthly

Achieving $2,000 in monthly passive income ($24,000 annually) requires strategic allocation across multiple income sources. A diversified approach might include:

- $100,000 in S-REITs yielding 6% = $6,000 annual income
- $200,000 in dividend growth stocks yielding 4.5% = $9,000 annual income  
- $120,000 in fixed income yielding 3% = $3,600 annual income
- $120,000 in robo-advisor income portfolios yielding 4% = $4,800 annual income

Total investment required: $540,000
Total annual passive income: $23,400 ($1,950 monthly)

## Conclusion

Earning $2,000 monthly in passive income through Singapore-based investments is an achievable goal that can provide the financial foundation for true nomadic freedom. The combination of high-quality investment opportunities, favorable tax treatment, and sophisticated financial infrastructure makes Singapore an ideal base for building substantial passive income.
      `,
      author: "SGNomadWealth Team",
      publishDate: "January 12, 2025",
      readTime: "12 min read",
      difficulty: "Intermediate",
      category: "Passive Income"
    },
    'robo-advisor-comparison-2025': {
      title: "Syfe vs StashAway vs Endowus: Complete 2025 Comparison",
      description: "A comprehensive analysis of Singapore's top robo-advisors, including fees, performance, and which platform suits different investor profiles.",
      content: `
# Syfe vs StashAway vs Endowus: Complete 2025 Comparison

Singapore's robo-advisor landscape has matured significantly, with three major platforms dominating the market: Syfe, StashAway, and Endowus. Each platform offers unique approaches to automated investing, catering to different investor preferences and financial goals. This comprehensive comparison will help you choose the right platform for your investment journey.

## Platform Overview

### Syfe
Founded in 2019, Syfe has quickly established itself as a user-friendly platform focused on goal-based investing. The platform emphasizes simplicity and accessibility, making it particularly attractive to new investors and those who prefer a hands-off approach.

### StashAway
Launched in 2017, StashAway pioneered the robo-advisor space in Singapore with its sophisticated risk management algorithms. The platform targets investors who want professional portfolio management with global diversification.

### Endowus
Endowus takes a different approach by providing access to institutional-quality funds typically reserved for high-net-worth individuals. The platform focuses on fund selection and cost optimization rather than proprietary algorithms.

## Fee Comparison

Understanding the fee structure is crucial for long-term investment success, as fees compound over time and can significantly impact returns.

**Syfe Fees:**
- Management fee: 0.4% - 0.65% annually
- No minimum investment for most portfolios
- No lock-in period

**StashAway Fees:**
- Management fee: 0.2% - 0.8% annually (tiered based on portfolio size)
- $1 minimum investment
- No lock-in period

**Endowus Fees:**
- Access fee: 0.4% - 0.6% annually
- Underlying fund fees: varies by fund
- $1,000 minimum investment for most funds

## Investment Approach

Each platform employs different investment philosophies and methodologies:

**Syfe's Approach:**
- Goal-based investing with themed portfolios
- Simple risk profiling
- Focus on ETFs and index funds
- Regular rebalancing

**StashAway's Approach:**
- Proprietary ERAA® (Economic Regime-based Asset Allocation) algorithm
- Dynamic asset allocation based on economic conditions
- Global diversification across asset classes
- Sophisticated risk management

**Endowus's Approach:**
- Curated selection of institutional funds
- Focus on cost-effective fund selection
- Access to dimensional funds and other institutional products
- Professional fund research and due diligence

## Performance Analysis

While past performance doesn't guarantee future results, examining historical returns provides insights into each platform's effectiveness.

Based on available data through 2024, all three platforms have delivered competitive returns relative to their benchmarks, with performance varying based on market conditions and specific portfolio allocations.

## Which Platform is Right for You?

**Choose Syfe if:**
- You're new to investing and want simplicity
- You prefer goal-based investing
- You want low minimum investments
- You value user-friendly interfaces

**Choose StashAway if:**
- You want sophisticated risk management
- You prefer dynamic asset allocation
- You're comfortable with algorithm-driven decisions
- You want global diversification

**Choose Endowus if:**
- You want access to institutional-quality funds
- You have larger investment amounts
- You value professional fund selection
- You're willing to pay for premium fund access

## Conclusion

All three platforms offer compelling value propositions for different types of investors. Your choice should depend on your investment goals, risk tolerance, and preferences for platform features and investment approach.
      `,
      author: "SGNomadWealth Team",
      publishDate: "January 15, 2025",
      readTime: "12 min read",
      difficulty: "Intermediate",
      category: "Platform Reviews"
    }
  }

  const article = articles[slug]

  if (!article) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Article Not Found</h1>
          <p className="text-muted-foreground">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    )
  }

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

  const relatedArticles = Object.entries(articles)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, article]) => ({ slug: key, ...article }))

  return (
    <div className="flex flex-col">
      {/* Article Header */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/investing">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Link>
            </Button>
            
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className={getDifficultyColor(article.difficulty)}>
                  {article.difficulty}
                </Badge>
                <Badge variant="outline">{article.category}</Badge>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                {article.title}
              </h1>
              
              <p className="text-xl text-muted-foreground">
                {article.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.publishDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                      {paragraph.replace('# ', '')}
                    </h1>
                  )
                } else if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-4 mb-2">
                      {paragraph.replace('### ', '')}
                    </h3>
                  )
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <p key={index} className="font-semibold mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  )
                } else if (paragraph.startsWith('- ')) {
                  const listItems = paragraph.split('\n').filter(item => item.startsWith('- '))
                  return (
                    <ul key={index} className="list-disc pl-6 mb-4 space-y-1">
                      {listItems.map((item, i) => (
                        <li key={i}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  )
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  )
                }
                return null
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Card key={relatedArticle.slug} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getDifficultyColor(relatedArticle.difficulty)}>
                        {relatedArticle.difficulty}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{relatedArticle.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="line-clamp-3">
                      {relatedArticle.description}
                    </CardDescription>
                    <Button variant="ghost" asChild className="p-0 h-auto font-semibold">
                      <Link to={`/articles/${relatedArticle.slug}`}>
                        Read Article <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
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
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl opacity-90">
              Get our comprehensive investment guides and tools to help you build wealth in Singapore.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/resources">
                Get Free Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArticlePage


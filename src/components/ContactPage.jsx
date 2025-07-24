import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Mail, MessageCircle, Clock, Users, Send, Linkedin, Twitter, Youtube } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch for general inquiries, partnerships, or detailed questions",
      contact: "hello@sgnomadwealth.com",
      responseTime: "Within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Join Our Community",
      description: "Connect with other nomads and get real-time answers to your questions",
      contact: "Telegram Group",
      responseTime: "Real-time discussions"
    },
    {
      icon: Users,
      title: "Book a Consultation",
      description: "Schedule a one-on-one session for personalized financial planning advice",
      contact: "Premium Service",
      responseTime: "Available for subscribers"
    }
  ]

  const faqs = [
    {
      question: "Do you provide personalized financial advice?",
      answer: "We provide educational content and general strategies. For personalized advice, we recommend consulting with qualified financial advisors who understand your specific situation."
    },
    {
      question: "Are your investment recommendations suitable for beginners?",
      answer: "Yes! We create content for all experience levels, clearly marking difficulty levels. Our beginner guides start with the basics and progress to more advanced strategies."
    },
    {
      question: "How often do you update your platform reviews?",
      answer: "We review and update our platform comparisons quarterly, or whenever there are significant changes to fees, features, or terms of service."
    },
    {
      question: "Can I use your strategies if I'm not based in Singapore?",
      answer: "While our content focuses on Singapore, many principles apply internationally. However, tax and regulatory advice is specific to Singapore residents and tax residents."
    },
    {
      question: "Do you earn commissions from recommended platforms?",
      answer: "We may earn affiliate commissions from some platforms we recommend. We always disclose these relationships and only recommend platforms we genuinely believe provide value."
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "#",
      description: "Professional insights and market updates"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "#",
      description: "Daily tips and market commentary"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "#",
      description: "In-depth tutorials and platform reviews"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              We're Here to <span className="text-primary">Help You Succeed</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about investing in Singapore or building passive income as a digital nomad? We'd love to hear from you and help you on your wealth-building journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">How to Reach Us</h2>
            <p className="text-xl text-muted-foreground">
              Choose the best way to connect based on your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <method.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {method.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="font-semibold text-primary">{method.contact}</div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{method.responseTime}</span>
                    </div>
                  </div>
                  <Button variant="outline">
                    {method.title === "Email Us" ? "Send Email" : 
                     method.title === "Join Our Community" ? "Join Group" : "Learn More"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Send Us a Message</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your question or how we can help..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our content and services
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Follow Us</h2>
            <p className="text-xl text-muted-foreground">
              Stay connected and get the latest updates on social media
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {socialLinks.map((social, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <social.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{social.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-center">
                    {social.description}
                  </CardDescription>
                  <Button variant="outline" asChild>
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      Follow Us
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Stay Updated
            </h2>
            <p className="text-xl opacity-90">
              Subscribe to our newsletter for weekly insights, market updates, and exclusive content delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-primary-foreground text-foreground"
              />
              <Button size="lg" variant="secondary">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75">
              Join 5,000+ subscribers. We respect your privacy and never spam.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage


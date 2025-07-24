import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import InvestingPage from './components/InvestingPage'
import PassiveIncomePage from './components/PassiveIncomePage'
import SingaporeFinancePage from './components/SingaporeFinancePage'
import DigitalNomadPage from './components/DigitalNomadPage'
import ResourcesPage from './components/ResourcesPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ArticlePage from './components/ArticlePage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/investing" element={<InvestingPage />} />
            <Route path="/passive-income" element={<PassiveIncomePage />} />
            <Route path="/singapore-finance" element={<SingaporeFinancePage />} />
            <Route path="/digital-nomad" element={<DigitalNomadPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App


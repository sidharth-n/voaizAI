import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import ImpactSection from "../components/ImpactSection"
import FeaturesSection from "../components/FeaturesSection"
import TestimonialSection from "../components/TestimonialSection"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <div id="impact">
        <ImpactSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      {/*  <div id="testimonials">
        <TestimonialSection />
      </div> */}
      <Footer />
    </div>
  )
}

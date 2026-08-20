import React from 'react'
import HeroSection from '../components/HeroSection'
import BenifitComponent from '../components/BenefitComponent'
import FeaturesComponent from '../components/FeaturesComponent'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ContactSection from '../components/ContactSection'
import FAQSection from '../components/FaqSection'
import TrustedBy from '../components/TrustedBy'

export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <TrustedBy />
            <BenifitComponent />
            <FeaturesComponent />
            <FAQSection />
            <ContactSection />
            <Footer />
        </>
    )
}

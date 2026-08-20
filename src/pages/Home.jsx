import React from 'react'
import HeroSection from '../components/HeroSection'
import BenifitComponent from '../components/BenefitComponent'
import FeaturesComponent from '../components/FeaturesComponent'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <BenifitComponent />
            <FeaturesComponent />
            <Footer />
        </>
    )
}

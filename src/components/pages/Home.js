import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Pricing from './../Pricing/Pricing';

function Home() {
    return (
        <>
            <HeroSection />
            <Pricing />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;

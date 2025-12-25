import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TimelineSection from './components/TimelineSection';
import MechanismSection from './components/MechanismSection';
import RiskSimulator from './components/RiskSimulator';
import ClinicalSection from './components/ClinicalSection';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Hero />
                <TimelineSection />
                <MechanismSection />
                <RiskSimulator />
                <ClinicalSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;
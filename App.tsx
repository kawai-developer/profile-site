
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Services from './components/Services';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Vision />
        <Services />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

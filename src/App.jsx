import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Research from './components/Research.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Activities from './components/Activities.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ResumeModal from './components/ResumeModal.jsx';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--canvas-bg)' }}>
      {/* Sticky Broadcast & Executive Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Portfolio Flow */}
      <main style={{ flex: 1 }}>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Research />
        <Experience />
        <Projects />
        <Activities />
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <Skills />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Studio Colophon & Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Official Executive Resume & Media Kit Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

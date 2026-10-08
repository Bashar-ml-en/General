import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Research from './components/Research.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import About from './components/About.jsx';
import Activities from './components/Activities.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ResumeModal from './components/ResumeModal.jsx';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--canvas-bg)' }}>
      {/* Sticky Editorial Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Narrative Flow */}
      <main style={{ flex: 1 }}>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Research />
        <Projects />
        <Experience />
        <About />
        <Activities />
        <Skills />
        <Contact />
      </main>

      {/* Colophon & Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Official Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

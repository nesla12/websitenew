import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Assessment } from './pages/Assessment';
import { MakeAutomation } from './pages/services/MakeAutomation';
import { Services } from './pages/Services';
import { Guides } from './pages/Guides';
import { GuideDetail } from './pages/GuideDetail';
import { Contact } from './pages/Contact';
import { Workshops } from './pages/Workshops';
import { ConsultationBooking } from './components/consultation/ConsultationBooking';
import { About } from './pages/About';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { Legal } from './pages/legal/Legal';
import { Terms } from './pages/legal/Terms';
import { TranslationProvider } from './contexts/TranslationContext';

function App() {
  return (
    <TranslationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/make-automation" element={<MakeAutomation />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:id" element={<GuideDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/book-consultation" element={<ConsultationBooking />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Router>
    </TranslationProvider>
  );
}

export default App;
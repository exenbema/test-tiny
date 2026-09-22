/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Showcase } from './components/Showcase';
import { Craftsmanship } from './components/Craftsmanship';
import { Process } from './components/Process';
import { WorkshopAbout } from './components/WorkshopAbout';
import { Faq } from './components/Faq';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VehicleModel } from './types';

export default function App() {
  const [inquirySummary, setInquirySummary] = useState<string>('');
  const [inquiryPrice, setInquiryPrice] = useState<number>(0);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectModel = (model: VehicleModel) => {
    setInquirySummary(
      `Ich interessiere mich für das Modell-Konzept "${model.name}" (${model.baseVehicle}, Richtpreis ab ${model.priceFrom.toLocaleString('de-DE')} €).`
    );
    setInquiryPrice(model.priceFrom);
    scrollTo('kontakt');
  };

  const handleOpenConsultation = () => {
    scrollTo('kontakt');
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 selection:bg-amber-800 selection:text-white">
      {/* Top Bar Header */}
      <Header
        onOpenConsultation={handleOpenConsultation}
        onScrollTo={scrollTo}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onRequestConsultation={handleOpenConsultation}
          onExploreModels={() => scrollTo('modelle')}
        />

        {/* Showcase Models */}
        <Showcase onSelectModel={handleSelectModel} />

        {/* 4 Pillars of Craftsmanship & Technology */}
        <Craftsmanship />

        {/* 5-Step Manufacturing Process */}
        <Process onOpenConsultation={handleOpenConsultation} />

        {/* About tinyandvan Manufaktur in Rosenheim */}
        <WorkshopAbout />

        {/* FAQ */}
        <Faq />

        {/* Contact & Consultation Booking */}
        <ContactSection
          injectedSummary={inquirySummary}
          injectedPrice={inquiryPrice}
        />
      </main>

      {/* Footer */}
      <Footer onScrollTo={scrollTo} />
    </div>
  );
}

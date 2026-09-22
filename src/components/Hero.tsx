import React from 'react';
import { ArrowRight, ShieldCheck, Compass } from 'lucide-react';

interface HeroProps {
  onRequestConsultation: () => void;
  onExploreModels: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestConsultation, onExploreModels }) => {
  return (
    <section className="relative overflow-hidden bg-stone-900 text-stone-100 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background cinematic image with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_campervan_interior_1790107560363.jpg"
          alt="Individueller Campervan Innenausbau aus geöltem Eichenholz von tinyandvan"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-40 filter contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quiet editorial kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">
          <span>Manufaktur für individuelle Campervans & Tiny Homes auf Rädern</span>
          <span aria-hidden="true">·</span>
          <span>Manufaktur Punitz</span>
        </div>

        {/* Primary headline with balanced text */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display max-w-4xl leading-[1.1] mb-6 [text-wrap:balance]">
          Freiheit nach Maß: Wohnmobile & Campervans aus Meisterhand.
        </h1>

        {/* Concise value proposition */}
        <p className="text-lg sm:text-xl text-stone-300 max-w-2xl leading-relaxed mb-8 font-normal">
          Wir bauen deinen Kastenwagen zum autarken Traumvan um. Mit massiven Naturhölzern,
          hochpräziser Schreinerei, modernster Victron-Lithium-Technik und lückenloser TÜV-Wohnmobilzulassung.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
          <button
            onClick={onRequestConsultation}
            className="px-7 py-3.5 text-sm font-semibold text-white bg-amber-700 hover:bg-amber-600 rounded-lg shadow-lg hover:shadow-amber-900/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Kostenloses Erstgespräch anfragen</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onExploreModels}
            className="px-6 py-3.5 text-sm font-semibold text-stone-200 hover:text-white bg-stone-800/80 hover:bg-stone-800 border border-stone-700 rounded-lg transition-all duration-200 text-center cursor-pointer"
          >
            Ausbau-Konzepte ansehen
          </button>
        </div>

        {/* Claim-to-Proof Quantitative Rigor (Unboxed clean typography) */}
        <div className="pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums tracking-tight">
              100%
            </div>
            <div className="text-xs sm:text-sm text-stone-400 mt-1">
              Individuelle Meister-Schreinerei ohne Serien-Kompromisse
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums tracking-tight">
              &lt; 3.500 kg
            </div>
            <div className="text-xs sm:text-sm text-stone-400 mt-1">
              Garantierte B-Führerschein-Tauglichkeit mit Wiegeprotokoll
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums tracking-tight">
              354 Tage
            </div>
            <div className="text-xs sm:text-sm text-stone-400 mt-1">
              Volle 4-Jahreszeiten-Isolation & autarkes Lithium-Kochen
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums tracking-tight flex items-center gap-1.5">
              <span>TÜV Süd</span>
              <ShieldCheck className="w-5 h-5 text-emerald-400 inline" />
            </div>
            <div className="text-xs sm:text-sm text-stone-400 mt-1">
              Offizielle Wohnmobil-Umschreibung (M1 SA) inklusive
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

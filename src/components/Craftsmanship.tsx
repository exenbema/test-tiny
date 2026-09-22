import React from 'react';
import { Hammer, Shield, Zap, Award } from 'lucide-react';

export const Craftsmanship: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Schreiner-Meisterqualität',
      icon: Hammer,
      text: 'Keine klapprigen Pressspanplatten. Wir fertigen alle Möbel aus leichtem, formstabilem Birke- und Eichen-Multiplex mit hochpräzisen CNC-Passungen. Gesichert mit Soft-Close und langlebigen Blum-Beschlägen.',
      detail: 'Individuelle Holzöle & seidenmatte HPL-Oberflächen'
    },
    {
      number: '02',
      title: '4-Jahreszeiten Isolierung',
      icon: Shield,
      text: 'Wintertauglich von den Dolomiten bis zum Polarkreis: Erst entdröhnen wir das Karosserieblech mit Alubutyl, danach folgt eine lückenlose 19–25 mm Armaflex XG Dämmung. Kältebrücken werden thermisch entkoppelt.',
      detail: 'Kein Kondenswasser, minimale Heizverluste'
    },
    {
      number: '03',
      title: 'Autarke Victron-Lithium-Technik',
      icon: Zap,
      text: 'Als offizieller Systemintegrator verbauen wir LiFePO4-Batterien mit intelligentem BMS, MPPT-Solarregler und echte Sinus-Wechselrichter. VDE-gerecht abgesichert für kochen per Induktion und tagelanges autarkes Stehen.',
      detail: 'Echtzeit-Überwachung per Bluetooth & Touch-Display'
    },
    {
      number: '04',
      title: 'TÜV-Wohnmobilzulassung (M1 SA)',
      icon: Award,
      text: 'Wir übernehmen die komplette bürokratische und technische Abnahme beim TÜV Süd. Dein Kastenwagen wird offiziell als Sonder-Kfz Wohnmobil eingetragen – für spürbar günstigere Versicherungs- und Steuertarife.',
      detail: 'Inkl. Wiegeprotokoll & dokumentierter Elektrik'
    }
  ];

  return (
    <section id="manufaktur" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Philosophie & Bauweise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight [text-wrap:balance]">
            Vier Säulen kompromissloser Manufaktur-Handwerkskunst
          </h2>
          <p className="text-stone-300 mt-3 text-sm sm:text-base leading-relaxed">
            Ein Van von tinyandvan ist kein Serienprodukt von der Stange, sondern ein handgefertigtes
            Zuhause auf vier Rädern. Wir verbinden traditionelles Tischlerhandwerk mit modernster
            Fahrzeugelektronik und aero-akustischer Schalldämpfung.
          </p>
        </div>

        {/* Asymmetric Bento Layout: Left Workshop Feature + Right Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Workshop Visual Spotlight */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-stone-800 border border-stone-700 relative flex flex-col justify-end min-h-[380px]">
            <img
              src="/src/assets/images/camper_craftsman_workshop_1790107589801.jpg"
              alt="Schreinermeister beim präzisen Wohnmobil-Ausbau in der tinyandvan Werkstatt"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
            <div className="relative z-10 p-6 sm:p-8">
              <div className="text-xs font-semibold uppercase text-amber-400 tracking-wider mb-1">
                Eigene Schreinerei in Punitz
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Jede Rundung sitzt auf den Millimeter genau
              </h3>
              <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                Weil kein Kastenwagen absolut rechtwinklig ist, passen wir jede Möbelflanke per Hand
                und 3D-Schablonen exakt an die Karosseriewölbung deines Fahrzeugs an.
              </p>
            </div>
          </div>

          {/* Right: 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="bg-stone-800/60 border border-stone-700/70 rounded-2xl p-6 flex flex-col justify-between hover:bg-stone-800 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-mono font-bold text-amber-400">
                        {pillar.number}.
                      </span>
                      <Icon className="w-5 h-5 text-stone-400" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed mb-4">
                      {pillar.text}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-stone-700/60 text-[11px] font-medium text-amber-200/90">
                    {pillar.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quality stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-stone-800 text-center">
          <div>
            <div className="text-2xl font-bold font-mono text-white">0% Silikon</div>
            <div className="text-xs text-stone-400 mt-1">Dauerelastische MS-Polymere (kein Schimmel)</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-white">100% Gasfrei</div>
            <div className="text-xs text-stone-400 mt-1">Induktions- & Dieselbetrieb möglich</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-white">5 Jahre</div>
            <div className="text-xs text-stone-400 mt-1">Garantie auf Schreinermöbel & Statik</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-white">14 Tage</div>
            <div className="text-xs text-stone-400 mt-1">Fotoupdate-Intervall während des Baus</div>
          </div>
        </div>
      </div>
    </section>
  );
};

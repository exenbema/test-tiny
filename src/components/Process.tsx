import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProcessProps {
  onOpenConsultation: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      step: '01',
      title: 'Erstgespräch & Bedarfsanalyse',
      subtitle: 'Kostenlos & unverbindlich',
      description: 'Vor Ort in Punitz oder per Video-Call: Wir besprechen deine Reisepläne, Budgetgrenzen, Personenzahl und ob du bereits ein Fahrzeug besitzt oder eine Kaufberatung benötigst.',
      highlights: ['Persönliche Bedarfsanalyse', 'Fahrzeugtyp-Empfehlung', 'Realistischer Budgetcheck']
    },
    {
      step: '02',
      title: '3D-CAD-Planung & Materialauswahl',
      subtitle: 'Dein Van vorab am Bildschirm',
      description: 'Gemeinsam wählen wir Echthölzer, Linoleum- und HPL-Muster aus. Du erhältst einen maßstabsgetreuen 3D-Grundriss deines Fahrzeugs sowie ein verbindliches Festpreis-Angebot.',
      highlights: ['3D-Visualisierung aller Möbel', 'Echte Holzmuster zum Anfassen', 'Verbindliches Festpreisangebot']
    },
    {
      step: '03',
      title: 'Rohbau, Dämmung & Fenster',
      subtitle: 'Das solide Fundament',
      description: 'Wir schneiden und versiegeln Fenster & MaxxFan-Dachlüfter, entdröhnen das Karosserieblech und verkleben nahtlos 19–25 mm Armaflex XG. Alle Kabeltrassen werden hochflexibel verrohrt.',
      highlights: ['Rostschutz nach jedem Blechschnitt', 'Lückenlose 4-Jahreszeiten-Dämmung', 'Sichere Unterflur-Verkabelung']
    },
    {
      step: '04',
      title: 'Meister-Schreinerei & Technik',
      subtitle: 'Mit 14-tägigen Foto-Updates',
      description: 'In unserer Tischlerei entstehen deine maßgefertigten Schränke, Küchenzeilen und Betten. Du erhältst alle zwei Wochen ein digitales Fototagebuch über den aktuellen Baufortschritt.',
      highlights: ['Handgefertigte Leichtbaumöbel', 'Victron-Autarkie-Installation', 'Druckprüfung aller Wasserleitungen']
    },
    {
      step: '05',
      title: 'TÜV-Abnahme & 3-stündige Übergabe',
      subtitle: 'Der Schlüssel zur Freiheit',
      description: 'Nach bestandener TÜV-Sonderabnahme als Wohnmobil (M1 SA) übergeben wir dir deinen Van mit einer 3-stündigen Intensiv-Einweisung aller Systeme sowie einer vollständigen Systemdokumentation.',
      highlights: ['Offizielle Wohnmobil-Zulassung', 'Ausführliche System-Einweisung', 'Prall gefüllter Übergabe-Ordner']
    }
  ];

  return (
    <section id="ablauf" className="py-20 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            Transparenter Ablauf
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight [text-wrap:balance]">
            In 5 verlässlichen Schritten zu deinem fertigen Wohnmobil
          </h2>
          <p className="text-stone-600 mt-3 text-sm sm:text-base leading-relaxed">
            Ein Van-Ausbau ist Vertrauenssache. Deshalb setzen wir auf maximale Transparenz,
            verbindliche Fertigstellungstermine und eine lückenlose Fotodokumentation deines Fahrzeugs.
          </p>
        </div>

        {/* Vertical Step Timeline */}
        <div className="relative border-l-2 border-stone-300 ml-4 sm:ml-6 space-y-12 mb-16">
          {steps.map((s) => (
            <div key={s.step} className="relative pl-8 sm:pl-10">
              {/* Step indicator node */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-amber-900 text-white flex items-center justify-center font-mono font-bold text-xs shadow-sm ring-4 ring-stone-100">
                {s.step}
              </div>

              <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3 gap-1">
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-display">
                    {s.title}
                  </h3>
                  <span className="text-xs font-medium text-amber-800">
                    {s.subtitle}
                  </span>
                </div>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {s.description}
                </p>

                <div className="pt-3 border-t border-stone-100 flex flex-wrap gap-4 text-xs text-stone-700">
                  {s.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="bg-amber-950 text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase font-semibold text-amber-400 tracking-wider mb-1">
              Bereit für den ersten Schritt?
            </div>
            <h3 className="text-2xl font-bold font-display">
              Lass uns über deine Vanlife-Idee sprechen
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-xl">
              Komm auf einen Kaffee in unsere Werkstatt nach Punitz oder vereinbare ein
              unverbindliches Video-Telefonat zur Ersteinschätzung deines Projekts.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-amber-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shrink-0 flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Erstgespräch vereinbaren</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

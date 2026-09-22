import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Kann ich mein eigenes Fahrzeug anliefern oder besorgt ihr den Kastenwagen?',
      a: 'Beides ist möglich! Rund 60% unserer Kunden bringen ihr eigenes Bestandsfahrzeug (z.B. Mercedes Sprinter, VW Crafter, Ford Transit oder Fiat Ducato) zu uns. Gerne beraten wir dich aber bereits vor dem Kauf kostenlos hinsichtlich Radstand, Dachhöhe, Motorisierung und technischer Eignung. Alternativ konfigurieren und bestellen wir dein Basisfahrzeug als Neufahrzeug direkt über unsere Partner-Händler.'
    },
    {
      q: 'Bleibt der Campervan garantiert unter der 3,5-Tonnen-Grenze für den PKW-Führerschein B?',
      a: 'Ja, das ist eines unserer obersten Konstruktionsprinzipien. Durch computeroptimierten Leichtbau aus hochfestem Multiplex-Sperrholz und den gezielten Verzicht auf unnötigen Ballast liegt das Leergewicht unserer fertigen L2H2- und L3H2-Ausbauten typischerweise zwischen 2.650 kg und 2.850 kg. Damit verbleiben dir 650 kg bis 850 kg echte Zuladung für Personen, Gepäck, E-Bikes und volle Wassertanks. Jedes Fahrzeug verlässt unsere Manufaktur mit einem amtlichen Wiegeprotokoll.'
    },
    {
      q: 'Wie lange dauert ein Komplettausbau und wie weit im Voraus muss ich anfragen?',
      a: 'Die reine Bauzeit in unserer Schreinerei und Werkstatt beträgt je nach Umfang und Trocknungszeiten ca. 8 bis 12 Wochen. Da wir parallel nur eine begrenzte Anzahl an Fahrzeugen aufnehmen, um unsere Manufaktur-Qualität zu garantieren, empfehlen wir eine Vorlaufzeit von etwa 2 bis 4 Monaten bis zum geplanten Baubeginn.'
    },
    {
      q: 'Bietet tinyandvan auch Teilausbauten an (z.B. nur Dämmung, Fenster oder Elektrik)?',
      a: 'Ja! Wenn du deinen Camper teilweise im Do-It-Yourself-Verfahren ausbauen möchtest, aber die kritischen Schritte Profis überlassen willst, unterstützen wir dich gerne. Wir übernehmen den Einbau von Fenstern & MaxxFan-Dachlüftern, die fachgerechte Armaflex-Dämmung, die 230V/12V Victron-Elektrik oder den Einbau von zugelassenen Schlafsitzbänken inklusive TÜV-Eintragung.'
    },
    {
      q: 'Wie läuft die TÜV-Zulassung als Wohnmobil (M1 SA) ab?',
      a: 'Um dein Fahrzeug offiziell als Wohnmobil zuzulassen, sind feste Kriterien erforderlich (feste Kochgelegenheit, Schlafplatz, Tisch, Stauraum und Fluchtwege). Wir stimmen jeden Ausbau direkt mit dem TÜV Süd ab. Nach Fertigstellung führen die Prüfer die Abnahme direkt in unserer Werkstatt durch. Du erhältst das fertige Gutachten zur Umschreibung bei deiner Zulassungsstelle, was deine Kfz-Steuer und Versicherungskosten drastisch senkt.'
    },
    {
      q: 'Wie wintertauglich ist ein tinyandvan Camper bei eisigen Minusgraden?',
      a: 'Absolut winterfest. Dank durchgängiger 19 bis 25 mm Armaflex XG Isolierung, thermisch entkoppelten Karosserieholmen und beheizten Innenraum-Wassertanks kannst du auch bei -20 °C im Schnee campen. Unsere Autoterm- und Truma-Standheizungen verfügen über ein automatisches Höhenkit (bis 3.000m Meereshöhe) und halten den Van flüsterleise mollig warm.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            Häufig gestellte Fragen
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight [text-wrap:balance]">
            Alles, was du vor deinem Van-Ausbau wissen musst
          </h2>
          <p className="text-stone-600 mt-2 text-sm sm:text-base">
            Offene Fragen? Hier findest du klare Antworten zu Technik, Kosten, TÜV und Bauzeit.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-stone-200/90 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-stone-900 font-display">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-900' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-xs text-stone-500">
          Deine spezielle Frage war nicht dabei? Schreib uns einfach direkt oder ruf uns an:
          <a href="tel:+498921547890" className="ml-1.5 font-semibold text-amber-900 hover:underline">
            089 / 2154 7890
          </a>
        </div>
      </div>
    </section>
  );
};

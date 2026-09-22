import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, Clock } from 'lucide-react';

interface ContactSectionProps {
  injectedSummary?: string;
  injectedPrice?: number;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ injectedSummary, injectedPrice }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Komplettausbau',
    vehicleStatus: 'Fahrzeug bereits vorhanden',
    timeline: 'In 3-6 Monaten',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update message when an injected summary is passed
  useEffect(() => {
    if (injectedSummary) {
      setFormData(prev => ({
        ...prev,
        message: prev.message
          ? `${prev.message}\n\n${injectedSummary}`
          : `Hallo tinyandvan-Team,\n\nich habe meinen Wunschcamper im Online-Kalkulator zusammengestellt und interessiere mich für ein unverbindliches Erstgespräch:\n\n${injectedSummary}`,
      }));
    }
  }, [injectedSummary]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Bitte gib deinen Namen ein.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Bitte gib eine gültige E-Mail-Adresse ein.');
      return;
    }

    setSubmitting(true);
    // Simulate submission latency
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="kontakt" className="py-20 bg-stone-900 text-stone-100 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact details & intro */}
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Beratungstermin & Werkstatt
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4 [text-wrap:balance]">
              Lass uns deinen Traumvan Wirklichkeit werden lassen
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8">
              Ganz gleich, ob du schon konkrete Skizzen hast oder noch am Anfang deiner Vanlife-Reise
              stehst: Wir nehmen uns Zeit für deine Ideen und beantworten jede technische Frage.
            </p>

            {/* Direct contact items */}
            <div className="space-y-4 mb-8 text-xs sm:text-sm">
              <a
                href="tel:+498921547890"
                className="flex items-center gap-3 p-3 bg-stone-800/80 hover:bg-stone-800 rounded-xl border border-stone-700/60 transition-colors text-stone-200"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-900/60 text-amber-300 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-400">Telefonische Erstberatung</div>
                  <div className="font-semibold font-mono text-white">089 / 2154 7890</div>
                </div>
              </a>

              <a
                href="mailto:exenberger.markus@gmail.com"
                className="flex items-center gap-3 p-3 bg-stone-800/80 hover:bg-stone-800 rounded-xl border border-stone-700/60 transition-colors text-stone-200"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-900/60 text-amber-300 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-400">E-Mail für Pläne & Anfragen</div>
                  <div className="font-semibold text-white">exenberger.markus@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 bg-stone-800/80 rounded-xl border border-stone-700/60 text-stone-200">
                <div className="w-8 h-8 rounded-lg bg-amber-900/60 text-amber-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-400">Manufaktur & Schreinerei</div>
                  <div className="font-semibold text-white">Punitz</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-stone-800/80 rounded-xl border border-stone-700/60 text-stone-200">
                <div className="w-8 h-8 rounded-lg bg-amber-900/60 text-amber-300 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-400">Öffnungszeiten Werkstatt</div>
                  <div className="font-semibold text-white">Mo – Fr: 08:00 – 17:30 Uhr (nach Termin)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="bg-stone-800/90 border border-stone-700 rounded-2xl p-6 sm:p-8 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 ring-8 ring-emerald-500/10">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-2">
                    Anfrage erfolgreich empfangen!
                  </h3>
                  <p className="text-sm text-stone-300 max-w-md mx-auto mb-6">
                    Vielen Dank, {formData.name}. Wir prüfen deine Konfiguration und
                    melden uns innerhalb von 24 Stunden mit Terminvorschlägen bei dir.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'Komplettausbau',
                        vehicleStatus: 'Fahrzeug bereits vorhanden',
                        timeline: 'In 3-6 Monaten',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-stone-200 bg-stone-700 hover:bg-stone-600 rounded-lg transition-colors cursor-pointer"
                  >
                    Weitere Anfrage stellen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {injectedPrice && injectedPrice > 0 && (
                    <div className="p-3 bg-amber-950/60 border border-amber-800/80 rounded-xl flex items-center justify-between text-xs text-amber-200">
                      <span>Übernommene Richtpreiskalkulation:</span>
                      <span className="font-mono font-bold text-white text-sm">
                        ca. {injectedPrice.toLocaleString('de-DE')} €
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">
                        Dein Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="z.B. Markus Huber"
                        className="w-full bg-stone-900/90 border border-stone-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">
                        E-Mail-Adresse *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="markus@beispiel.de"
                        className="w-full bg-stone-900/90 border border-stone-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">
                        Telefonnummer (für Rückfragen)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+49 170 1234567"
                        className="w-full bg-stone-900/90 border border-stone-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">
                        Art des Projekts
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-stone-900/90 border border-stone-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="Komplettausbau">Komplettausbau (Schlüsselfertig)</option>
                        <option value="Teilausbau Elektrik & Dämmung">Teilausbau (Elektrik & Dämmung)</option>
                        <option value="Fenstereinbau & Schlafdach">Fenstereinbau & Schlafdach</option>
                        <option value="Kaufberatung Basisfahrzeug">Kaufberatung Basisfahrzeug</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">
                        Basisfahrzeug Status
                      </label>
                      <select
                        value={formData.vehicleStatus}
                        onChange={(e) => setFormData({ ...formData, vehicleStatus: e.target.value })}
                        className="w-full bg-stone-900/90 border border-stone-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="Fahrzeug bereits vorhanden">Fahrzeug bereits vorhanden</option>
                        <option value="Suche aktuell nach Kastenwagen">Suche aktuell nach Kastenwagen</option>
                        <option value="Neufahrzeug über tinyandvan bestellen">Neufahrzeug über tinyandvan bestellen</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">
                        Geplanter Ausbauzeitraum
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-stone-900/90 border border-stone-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="Schnellstmöglich">Schnellstmöglich (nächster freier Slot)</option>
                        <option value="In 3-6 Monaten">In 3-6 Monaten</option>
                        <option value="In 6-12 Monaten">In 6-12 Monaten</option>
                        <option value="Erstmal Orientierungsphase">Erstmal Orientierungsphase</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Deine Wünsche, Reisepläne oder Fragen
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Erzähl uns von deinen Plänen: Wo soll es hingehen? Wie viele Personen reisen mit? Welche Besonderheiten wünschst du dir?"
                      className="w-full bg-stone-900/90 border border-stone-700 rounded-lg p-3 text-xs text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500 font-sans"
                    />
                  </div>

                  {errorMessage && (
                    <div className="text-xs text-red-400 bg-red-950/60 p-2.5 rounded-lg border border-red-800">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-amber-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Wird übermittelt...' : 'Unverbindliche Anfrage absenden'}</span>
                  </button>

                  <div className="text-[11px] text-stone-400 text-center">
                    Deine Daten werden vertraulich behandelt und ausschließlich zur Beantwortung deiner Anfrage genutzt.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Compass, Phone, Mail, MapPin, Shield } from 'lucide-react';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  return (
    <footer className="bg-stone-950 text-stone-400 text-xs border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-2xl font-extrabold tracking-tight text-white font-display inline-block"
            >
              tinyandvan
            </a>
            <p className="text-stone-400 max-w-sm leading-relaxed">
              Manufaktur für maßgeschneiderte Campervans, Kastenwagen-Ausbauten und Tiny Homes auf Rädern.
              Handwerkliche Meisterqualität mit Sitz in Punitz.
            </p>
            <div className="flex items-center gap-3 text-stone-300">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>TÜV Süd zertifiziert</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>Victron System Partner</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div className="text-white font-semibold mb-3 font-display text-sm">
              Ausbauten & Technik
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onScrollTo('modelle')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Modell-Konzepte
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('kontakt')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Beratung & Anfrage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('manufaktur')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Schreiner-Handwerk
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('manufaktur')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Autarkie & Elektrik
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  4-Jahreszeiten Dämmung
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Fahrzeuge */}
          <div>
            <div className="text-white font-semibold mb-3 font-display text-sm">
              Basisfahrzeuge
            </div>
            <ul className="space-y-2">
              <li>Mercedes-Benz Sprinter 4x4</li>
              <li>VW Crafter & MAN TGE</li>
              <li>Ford Transit Custom & Kasten</li>
              <li>Fiat Ducato & Boxer</li>
              <li>Eigenes Bestandsfahrzeug</li>
            </ul>
          </div>

          {/* Col 4: Manufaktur Kontakt */}
          <div>
            <div className="text-white font-semibold mb-3 font-display text-sm">
              Werkstatt Punitz
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0 mt-0.5" />
                <span>Punitz</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span className="font-mono">089 / 2154 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <a href="mailto:exenberger.markus@gmail.com" className="hover:text-stone-300 transition-colors">
                  exenberger.markus@gmail.com
                </a>
              </li>
              <li className="text-stone-500 pt-1">
                Mo – Fr: 08:00 – 17:30 Uhr
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} tinyandvan Wohnmobilbau GmbH & Co. KG. Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-stone-300 transition-colors">Impressum</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-stone-300 transition-colors">AGB & Garantie</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Cookie-Einstellungen</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

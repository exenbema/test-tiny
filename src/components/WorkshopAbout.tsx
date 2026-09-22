import React from 'react';
import { Compass, Check, MapPin, Wrench } from 'lucide-react';

export const WorkshopAbout: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
              Über tinyandvan Wohnmobilbau
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight mb-6 [text-wrap:balance]">
              Aus Liebe zum Holz und dem Drang nach echten Horizonten
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
              tinyandvan entstand aus einer einfachen Erkenntnis: Herkömmliche Wohnmobile von der Stange
              sind oft voller klappernder Plastikbeschläge und steril wirkender Kunstlederpolster. Wir
              wollten ein echtes Zuhause für unterwegs schaffen.
            </p>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
              In unserer Manufaktur in Punitz verschmelzen wir das Raumwunder-Prinzip moderner Tiny Houses
              mit der robusten Mobilität von Kastenwagen. Jedes Möbelstück wird von ausgebildeten Schreinern
              gefertigt, jedes Kabel nach VDE-Standard verlegt und jede Komponente auf alpinen Rüttelpisten
              auf Herz und Nieren erprobt.
            </p>

            {/* Certifications & Badges */}
            <div className="space-y-2.5 pt-4 border-t border-stone-200 text-xs text-stone-800">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Eingetragener Tischler-Meisterbetrieb mit höchstem Handwerksanspruch</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Zertifizierter Einbaupartner für Victron Energy & Autoterm Standheizungen</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Eigene Prüfstraße & direkte offizielle Wohnmobil-Typisierungen</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Ausschließliche Verwendung formaldehydfreier, nachhaltiger Multiplexplatten</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-800" />
                <span>Punitz</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-amber-800" />
                <span>Werkstattbesuche nach Voranmeldung</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card with Details */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100 aspect-[4/3]">
              <img
                src="/src/assets/images/camper_kitchen_details_1790107599998.jpg"
                alt="Detailansicht der tinyandvan Vollholz-Küche mit Ausblick"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Quote Card */}
            <div className="mt-4 p-5 bg-white rounded-xl border border-stone-200/90 shadow-xs">
              <p className="italic text-stone-700 text-xs sm:text-sm">
                „Ein Van ist fertig, wenn nichts mehr weggelassen werden kann, ohne dass die
                Gemütlichkeit oder die Sicherheit leidet.“
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-stone-500">
                <span className="font-semibold text-stone-900">— Das tinyandvan Manufaktur-Team</span>
                <span className="font-mono text-amber-900">Punitz</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

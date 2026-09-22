import React, { useState } from 'react';
import { SHOWCASE_MODELS } from '../data/models';
import { VehicleModel } from '../types';
import { ArrowRight, Check, X, Shield, BatteryCharging, Droplets, Flame, Bed, Users } from 'lucide-react';

interface ShowcaseProps {
  onSelectModel: (model: VehicleModel) => void;
}

export const Showcase: React.FC<ShowcaseProps> = ({ onSelectModel }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedModel, setSelectedModel] = useState<VehicleModel | null>(null);

  const categories = [
    { id: 'all', label: 'Alle Ausbauten' },
    { id: 'Offroad', label: '4x4 & Expedition' },
    { id: 'Comfort', label: 'Komfort & Loft (L3H2)' },
    { id: 'Compact', label: 'Kompakt & Alltag' },
  ];

  const filteredModels = activeCategory === 'all'
    ? SHOWCASE_MODELS
    : SHOWCASE_MODELS.filter(m => m.category === activeCategory);

  return (
    <section id="modelle" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
              Portfolio & Ausbau-Konzepte
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight">
              Inspirationen aus unserer Werkstatt
            </h2>
            <p className="text-stone-600 mt-2 max-w-xl text-sm sm:text-base">
              Jedes Fahrzeug wird als Einzelstück gefertigt. Hier findest du drei unserer beliebtesten
              Grundriss-Konzepte als Ausgangsbasis für deinen ganz persönlichen Ausbau.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-stone-900 shadow-sm font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Model Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredModels.map((model) => (
            <div
              key={model.id}
              className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={model.image}
                  alt={`${model.name} Campervan Ausbau`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-4 left-4 text-xs font-medium text-stone-900 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md border border-stone-200/60 shadow-xs">
                  {model.baseVehicle}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                    <span>{model.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{model.specs.length}</span>
                    <span aria-hidden="true">·</span>
                    <span>{model.buildTimeWeeks} Wochen Bauzeit</span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 font-display mb-1.5">
                    {model.name}
                  </h3>
                  <p className="text-xs text-stone-600 mb-4 line-clamp-2">
                    {model.subtitle}
                  </p>

                  {/* Highlights preview */}
                  <ul className="space-y-2 mb-6 text-xs text-stone-700">
                    {model.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Action Row */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-stone-500 uppercase tracking-wide">
                      Ausbau ab
                    </div>
                    <div className="text-lg font-bold text-stone-900 font-mono tabular-nums">
                      {model.priceFrom.toLocaleString('de-DE')} €
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedModel(model)}
                      className="px-3 py-2 text-xs font-medium text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onSelectModel(model)}
                      className="px-3.5 py-2 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Modell anfragen</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Model Deep-Dive Modal */}
      {selectedModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs">
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 p-6 sm:p-8 relative"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedModel(null)}
              className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                <span>{selectedModel.category} Manufaktur-Konzept</span>
                <span aria-hidden="true">·</span>
                <span>{selectedModel.specs.length}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-stone-900">
                {selectedModel.name}
              </h3>
              <p className="text-sm text-stone-600 mt-1">
                {selectedModel.subtitle}
              </p>
            </div>

            {/* Main Modal Image */}
            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-stone-100 border border-stone-200">
              <img
                src={selectedModel.image}
                alt={selectedModel.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-stone-700 text-sm leading-relaxed mb-6">
              {selectedModel.description}
            </p>

            {/* Technical Specifications Grid */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                Technische Spezifikationen & Einbauten
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <BatteryCharging className="w-3.5 h-3.5 text-amber-800" />
                    <span>Batteriesystem</span>
                  </div>
                  <div className="text-xs font-semibold text-stone-900">
                    {selectedModel.specs.battery}
                  </div>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <Droplets className="w-3.5 h-3.5 text-blue-700" />
                    <span>Wasser & Abwasser</span>
                  </div>
                  <div className="text-xs font-semibold text-stone-900">
                    {selectedModel.specs.water}
                  </div>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <Flame className="w-3.5 h-3.5 text-red-600" />
                    <span>Heizung</span>
                  </div>
                  <div className="text-xs font-semibold text-stone-900">
                    {selectedModel.specs.heating}
                  </div>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <Bed className="w-3.5 h-3.5 text-stone-700" />
                    <span>Schlafplätze</span>
                  </div>
                  <div className="text-xs font-semibold text-stone-900">
                    {selectedModel.specs.berths} Personen
                  </div>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <Users className="w-3.5 h-3.5 text-stone-700" />
                    <span>Fahr-Sitzplätze</span>
                  </div>
                  <div className="text-xs font-semibold text-stone-900">
                    {selectedModel.specs.seats} zugelassen
                  </div>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Dämmung</span>
                  </div>
                  <div className="text-xs font-semibold text-stone-900">
                    {selectedModel.specs.isolation}
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights Full List */}
            <div className="mb-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                Serienmäßige Ausstattungs-Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                {selectedModel.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-stone-500">
                  Richtpreis Ausbau (inkl. 19% MwSt.)
                </div>
                <div className="text-2xl font-bold font-mono text-stone-900">
                  ab {selectedModel.priceFrom.toLocaleString('de-DE')} €
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedModel(null)}
                  className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                >
                  Schließen
                </button>
                <button
                  onClick={() => {
                    const m = selectedModel;
                    setSelectedModel(null);
                    onSelectModel(m);
                  }}
                  className="flex-1 sm:flex-initial px-6 py-2.5 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Dieses Modell anfragen</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

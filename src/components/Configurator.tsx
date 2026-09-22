import React, { useState, useMemo } from 'react';
import {
  BASE_VEHICLES,
  LAYOUT_STYLES,
  BED_SYSTEMS,
  ENERGY_PACKAGES,
  SANITARY_PACKAGES,
  ADDONS
} from '../data/models';
import { ConfiguratorState } from '../types';
import {
  Check,
  Truck,
  Palette,
  Bed,
  Zap,
  Droplet,
  PlusCircle,
  Copy,
  Calendar,
  Weight,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ConfiguratorProps {
  initialConfig?: Partial<ConfiguratorState>;
  onSendInquiry: (configSummary: string, totalEstimate: number) => void;
}

export const Configurator: React.FC<ConfiguratorProps> = ({ initialConfig, onSendInquiry }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [includeVanPrice, setIncludeVanPrice] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const [state, setState] = useState<ConfiguratorState>({
    baseVehicle: initialConfig?.baseVehicle || 'sprinter',
    layoutStyle: initialConfig?.layoutStyle || 'nordic',
    bedSystem: initialConfig?.bedSystem || 'fixed-rear',
    seats: 2,
    energyPackage: initialConfig?.energyPackage || 'offgrid-pro',
    sanitaryPackage: initialConfig?.sanitaryPackage || 'indoor-shower-trelino',
    heatingSystem: 'autoterm-2d',
    selectedAddons: initialConfig?.selectedAddons || ['awning'],
    bringOwnVehicle: false,
  });

  const selectedBaseVehicle = useMemo(
    () => BASE_VEHICLES.find(v => v.id === state.baseVehicle) || BASE_VEHICLES[0],
    [state.baseVehicle]
  );

  const selectedLayout = useMemo(
    () => LAYOUT_STYLES.find(l => l.id === state.layoutStyle) || LAYOUT_STYLES[0],
    [state.layoutStyle]
  );

  const selectedBed = useMemo(
    () => BED_SYSTEMS.find(b => b.id === state.bedSystem) || BED_SYSTEMS[0],
    [state.bedSystem]
  );

  const selectedEnergy = useMemo(
    () => ENERGY_PACKAGES.find(e => e.id === state.energyPackage) || ENERGY_PACKAGES[0],
    [state.energyPackage]
  );

  const selectedSanitary = useMemo(
    () => SANITARY_PACKAGES.find(s => s.id === state.sanitaryPackage) || SANITARY_PACKAGES[0],
    [state.sanitaryPackage]
  );

  const selectedAddonsList = useMemo(
    () => ADDONS.filter(a => state.selectedAddons.includes(a.id)),
    [state.selectedAddons]
  );

  // Base craftmanship cost includes insulation, window installation, lining, basic wiring, plumbing & TÜV
  const BASE_CRAFT_FEE = 29500;

  const calculation = useMemo(() => {
    const addonsCost = selectedAddonsList.reduce((sum, item) => sum + item.price, 0);
    const addonsWeight = selectedAddonsList.reduce((sum, item) => sum + item.weightKg, 0);

    const conversionTotal =
      BASE_CRAFT_FEE +
      selectedLayout.price +
      selectedBed.price +
      selectedEnergy.price +
      selectedSanitary.price +
      addonsCost;

    const vehicleCost = includeVanPrice && state.baseVehicle !== 'own-van'
      ? selectedBaseVehicle.priceBaseVan
      : 0;

    const totalWeightKg =
      220 + // base insulation & floor & wall paneling
      selectedLayout.weightKg +
      selectedBed.weightKg +
      selectedEnergy.weightKg +
      selectedSanitary.weightKg +
      addonsWeight;

    // Estimate weeks: base 8 + addons
    const buildWeeks = 8 + (state.selectedAddons.length > 2 ? 2 : 1);

    return {
      conversionTotal,
      vehicleCost,
      grandTotal: conversionTotal + vehicleCost,
      totalWeightKg,
      buildWeeks,
    };
  }, [
    selectedLayout,
    selectedBed,
    selectedEnergy,
    selectedSanitary,
    selectedAddonsList,
    includeVanPrice,
    state.baseVehicle,
    selectedBaseVehicle
  ]);

  const toggleAddon = (addonId: string) => {
    setState(prev => {
      const exists = prev.selectedAddons.includes(addonId);
      return {
        ...prev,
        selectedAddons: exists
          ? prev.selectedAddons.filter(id => id !== addonId)
          : [...prev.selectedAddons, addonId],
      };
    });
  };

  const generateSummaryText = () => {
    const addonNames = selectedAddonsList.map(a => a.name).join(', ') || 'Keine';
    return `--- tinyandvan Traumvan Konfiguration ---
Basisfahrzeug: ${selectedBaseVehicle.name} (${includeVanPrice && state.baseVehicle !== 'own-van' ? 'inkl. Neufahrzeug' : 'Bestandsfahrzeug'})
Ausbau-Stil: ${selectedLayout.name}
Schlafsystem: ${selectedBed.name}
Energiepaket: ${selectedEnergy.name}
Sanitärpaket: ${selectedSanitary.name}
Gewählte Upgrades: ${addonNames}
----------------------------------------
Geschätzter Ausbaupreis: ca. ${calculation.conversionTotal.toLocaleString('de-DE')} €
${includeVanPrice && state.baseVehicle !== 'own-van' ? `Gesamt inkl. Fahrzeug: ca. ${calculation.grandTotal.toLocaleString('de-DE')} €\n` : ''}Geschätztes Ausbaugewicht: ca. ${calculation.totalWeightKg} kg
Geschätzte Bauzeit: ca. ${calculation.buildWeeks} Wochen`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInquiry = () => {
    onSendInquiry(generateSummaryText(), calculation.grandTotal);
  };

  const steps = [
    { id: 1, label: 'Basisfahrzeug', icon: Truck },
    { id: 2, label: 'Ausbaustil', icon: Palette },
    { id: 3, label: 'Schlafsystem', icon: Bed },
    { id: 4, label: 'Energie & Autarkie', icon: Zap },
    { id: 5, label: 'Sanitär & Wasser', icon: Droplet },
    { id: 6, label: 'Upgrades & Offroad', icon: PlusCircle },
  ];

  return (
    <section id="konfigurator" className="py-20 bg-stone-50 border-b border-stone-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            Interaktiver Preiskalkulator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight [text-wrap:balance]">
            Konfiguriere dein Wohnmobil
          </h2>
          <p className="text-stone-600 mt-2 text-sm sm:text-base">
            Wähle dein Wunschfahrzeug und deine Ausstattung. Du erhältst sofort eine
            transparente Richtpreiskalkulation, Gewichtsschätzung und Bauzeitprognose.
          </p>
        </div>

        {/* Step Selector Tabs */}
        <div className="flex items-center justify-between border-b border-stone-200 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {steps.map(step => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex items-center gap-2 py-3 px-3 sm:px-4 text-xs font-medium border-b-2 transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'border-amber-900 text-amber-900 font-semibold bg-amber-50/50 rounded-t-lg'
                    : 'border-transparent text-stone-600 hover:text-stone-900 hover:border-stone-300'
                }`}
              >
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] bg-stone-200 text-stone-800 font-mono">
                  {step.id}
                </span>
                <Icon className="w-3.5 h-3.5" />
                <span>{step.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Config Options (Left 7 cols) + Sticky Live Summary (Right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Container */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
            {/* Step 1: Base Vehicle */}
            {activeStep === 1 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-stone-900 font-display">
                    01. Welches Basisfahrzeug möchtest du ausbauen?
                  </h3>
                  <span className="text-xs text-stone-500 font-mono">Schritt 1 von 6</span>
                </div>
                <p className="text-xs text-stone-600 mb-6">
                  Wir arbeiten mit allen gängigen Kastenwagen zusammen oder unterstützen dich
                  bei der Anschaffung eines geprüften Neu- oder Gebrauchtfahrzeugs.
                </p>

                <div className="space-y-3">
                  {BASE_VEHICLES.map(v => {
                    const isSelected = state.baseVehicle === v.id;
                    return (
                      <div
                        key={v.id}
                        onClick={() => setState(s => ({ ...s, baseVehicle: v.id }))}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'border-amber-900 bg-amber-50/40 ring-1 ring-amber-900'
                            : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-stone-900">
                              {v.name}
                            </span>
                            {v.recommended && (
                              <span className="text-[10px] font-medium text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded">
                                Beliebt
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-stone-500 mt-0.5">
                            {v.subtitle}
                          </div>
                          <div className="text-[11px] text-stone-500 mt-1 flex items-center gap-2">
                            <span>Laderaumlänge: {v.cargoLength}</span>
                            <span aria-hidden="true">·</span>
                            <span>Zuladungsreserve: {v.payloadScore}</span>
                          </div>
                        </div>

                        <div className="text-right pl-3">
                          {v.priceBaseVan > 0 ? (
                            <div className="text-xs text-stone-500">
                              Neufahrzeug ca. <span className="font-mono tabular-nums font-semibold text-stone-800">{v.priceBaseVan.toLocaleString('de-DE')} €</span>
                            </div>
                          ) : (
                            <div className="text-xs font-semibold text-emerald-700">
                              Keine Fahrzeugkosten
                            </div>
                          )}
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ml-auto mt-1 ${
                            isSelected ? 'bg-amber-900 border-amber-900 text-white' : 'border-stone-300'
                          }`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {state.baseVehicle !== 'own-van' && (
                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <label className="text-xs text-stone-700 flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeVanPrice}
                        onChange={(e) => setIncludeVanPrice(e.target.checked)}
                        className="rounded border-stone-300 text-amber-900 focus:ring-amber-900 cursor-pointer"
                      />
                      <span>Neufahrzeug-Kaufpreis in Gesamtkalkulation einrechnen</span>
                    </label>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Layout & Wood Style */}
            {activeStep === 2 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-stone-900 font-display">
                    02. Ausbau-Linie & Holzgestaltung
                  </h3>
                  <span className="text-xs text-stone-500 font-mono">Schritt 2 von 6</span>
                </div>
                <p className="text-xs text-stone-600 mb-6">
                  Wir nutzen ausschließlich nachhaltig zertifiziertes Birke- und Eichen-Multiplex,
                  geölt mit speichelechten Naturharz-Ölen für ein gesundes Raumklima.
                </p>

                <div className="space-y-3">
                  {LAYOUT_STYLES.map(style => {
                    const isSelected = state.layoutStyle === style.id;
                    return (
                      <div
                        key={style.id}
                        onClick={() => setState(s => ({ ...s, layoutStyle: style.id }))}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-amber-900 bg-amber-50/40 ring-1 ring-amber-900'
                            : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="text-sm font-semibold text-stone-900 flex items-center gap-2">
                              <span>{style.name}</span>
                              {style.popular && (
                                <span className="text-[10px] text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded">
                                  tinyandvan Signature
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                              {style.description}
                            </p>
                          </div>
                          <div className="text-right pl-3 shrink-0">
                            <div className="text-xs font-mono font-semibold text-stone-800">
                              {style.price === 0 ? 'Im Grundpreis inkl.' : `+${style.price.toLocaleString('de-DE')} €`}
                            </div>
                            <div className="text-[11px] text-stone-500">
                              ca. {style.weightKg} kg
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Bed System */}
            {activeStep === 3 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-stone-900 font-display">
                    03. Bett- & Raumsystem
                  </h3>
                  <span className="text-xs text-stone-500 font-mono">Schritt 3 von 6</span>
                </div>
                <p className="text-xs text-stone-600 mb-6">
                  Erholsamer Schlaf ist das Wichtigste im Camper. Unsere Matratzen liegen auf
                  hochwertigen Froli-Tellerfedersystemen für optimale Unterlüftung.
                </p>

                <div className="space-y-3">
                  {BED_SYSTEMS.map(bed => {
                    const isSelected = state.bedSystem === bed.id;
                    return (
                      <div
                        key={bed.id}
                        onClick={() => setState(s => ({ ...s, bedSystem: bed.id }))}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-amber-900 bg-amber-50/40 ring-1 ring-amber-900'
                            : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="text-sm font-semibold text-stone-900">
                              {bed.name}
                            </div>
                            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                              {bed.description}
                            </p>
                          </div>
                          <div className="text-right pl-3 shrink-0">
                            <div className="text-xs font-mono font-semibold text-stone-800">
                              +{bed.price.toLocaleString('de-DE')} €
                            </div>
                            <div className="text-[11px] text-stone-500">
                              ca. {bed.weightKg} kg
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Energy Package */}
            {activeStep === 4 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-stone-900 font-display">
                    04. Autarkie & Victron-Elektrik
                  </h3>
                  <span className="text-xs text-stone-500 font-mono">Schritt 4 von 6</span>
                </div>
                <p className="text-xs text-stone-600 mb-6">
                  Alle Elektrosysteme werden nach VDE-Norm mit Einzelabsicherungen,
                  Mehrfach-Ladeboostern und Bluetooth-Batterieüberwachung verbaut.
                </p>

                <div className="space-y-3">
                  {ENERGY_PACKAGES.map(pkg => {
                    const isSelected = state.energyPackage === pkg.id;
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setState(s => ({ ...s, energyPackage: pkg.id }))}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-amber-900 bg-amber-50/40 ring-1 ring-amber-900'
                            : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-stone-900">
                                {pkg.name}
                              </span>
                              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                                Autarkie: {pkg.offgridDays}
                              </span>
                            </div>
                            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                              {pkg.description}
                            </p>
                          </div>
                          <div className="text-right pl-3 shrink-0">
                            <div className="text-xs font-mono font-semibold text-stone-800">
                              +{pkg.price.toLocaleString('de-DE')} €
                            </div>
                            <div className="text-[11px] text-stone-500">
                              ca. {pkg.weightKg} kg
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 5: Sanitary & Water */}
            {activeStep === 5 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-stone-900 font-display">
                    05. Wasser, Dusche & Toilette
                  </h3>
                  <span className="text-xs text-stone-500 font-mono">Schritt 5 von 6</span>
                </div>
                <p className="text-xs text-stone-600 mb-6">
                  Wir setzen standardmäßig auf umweltfreundliche Trockentrenntoiletten (ohne Chemie)
                  oder Verschweißtoiletten für maximale Hygiene ohne Geruch.
                </p>

                <div className="space-y-3">
                  {SANITARY_PACKAGES.map(pkg => {
                    const isSelected = state.sanitaryPackage === pkg.id;
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setState(s => ({ ...s, sanitaryPackage: pkg.id }))}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-amber-900 bg-amber-50/40 ring-1 ring-amber-900'
                            : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="text-sm font-semibold text-stone-900">
                              {pkg.name}
                            </div>
                            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                              {pkg.description}
                            </p>
                          </div>
                          <div className="text-right pl-3 shrink-0">
                            <div className="text-xs font-mono font-semibold text-stone-800">
                              +{pkg.price.toLocaleString('de-DE')} €
                            </div>
                            <div className="text-[11px] text-stone-500">
                              ca. {pkg.weightKg} kg
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 6: Upgrades & Offroad */}
            {activeStep === 6 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-stone-900 font-display">
                    06. Zubehör, Offroad & Sonderausstattung
                  </h3>
                  <span className="text-xs text-stone-500 font-mono">Schritt 6 von 6</span>
                </div>
                <p className="text-xs text-stone-600 mb-6">
                  Wähle zusätzliche Features für dein Abenteuer. Alle Anbauten werden von uns
                  vorschriftsmäßig montiert und per TÜV-Einzelabnahme eingetragen.
                </p>

                <div className="space-y-3">
                  {ADDONS.map(addon => {
                    const isSelected = state.selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-amber-900 bg-amber-50/40 ring-1 ring-amber-900'
                            : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded mt-0.5 border flex items-center justify-center shrink-0 ${
                              isSelected ? 'bg-amber-900 border-amber-900 text-white' : 'border-stone-300 bg-white'
                            }`}>
                              {isSelected && <Check className="w-3 h-3" />}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-stone-900">
                                {addon.name}
                              </div>
                              <p className="text-xs text-stone-600 mt-0.5">
                                {addon.description}
                              </p>
                            </div>
                          </div>
                          <div className="text-right pl-3 shrink-0">
                            <div className="text-xs font-mono font-semibold text-stone-800">
                              +{addon.price.toLocaleString('de-DE')} €
                            </div>
                            <div className="text-[11px] text-stone-500">
                              ca. {addon.weightKg} kg
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Pagination Controls between steps */}
            <div className="mt-8 pt-6 border-t border-stone-200 flex items-center justify-between">
              <button
                disabled={activeStep === 1}
                onClick={() => setActiveStep(s => Math.max(1, s - 1))}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 disabled:opacity-30 disabled:hover:text-stone-600 transition-colors cursor-pointer"
              >
                Zurück
              </button>

              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5, 6].map(stepNum => (
                  <button
                    key={stepNum}
                    onClick={() => setActiveStep(stepNum)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeStep === stepNum ? 'w-6 bg-amber-900' : 'bg-stone-300'
                    }`}
                    aria-label={`Schritt ${stepNum}`}
                  />
                ))}
              </div>

              {activeStep < 6 ? (
                <button
                  onClick={() => setActiveStep(s => Math.min(6, s + 1))}
                  className="px-5 py-2 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Nächster Schritt</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={handleInquiry}
                  className="px-5 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Jetzt anfragen</span>
                </button>
              )}
            </div>
          </div>

          {/* Sticky Summary Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
            <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-7 shadow-lg border border-stone-800">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                    Live-Kalkulation
                  </div>
                  <div className="text-xl font-bold font-display text-white">
                    Dein Ausbau-Überblick
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  title="Konfiguration kopieren"
                  className="p-2 text-stone-400 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors cursor-pointer text-xs flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Kopiert!' : 'Kopieren'}</span>
                </button>
              </div>

              {/* Selected components summary list */}
              <div className="py-4 space-y-2 text-xs border-b border-stone-800">
                <div className="flex justify-between text-stone-300">
                  <span className="text-stone-400">Basis:</span>
                  <span className="font-medium text-white">{selectedBaseVehicle.name}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span className="text-stone-400">Stil:</span>
                  <span className="font-medium text-white">{selectedLayout.name}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span className="text-stone-400">Bett:</span>
                  <span className="font-medium text-white">{selectedBed.name}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span className="text-stone-400">Elektrik:</span>
                  <span className="font-medium text-white">{selectedEnergy.name}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span className="text-stone-400">Sanitär:</span>
                  <span className="font-medium text-white">{selectedSanitary.name}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span className="text-stone-400">Upgrades:</span>
                  <span className="font-medium text-white">{selectedAddonsList.length} gewählt</span>
                </div>
              </div>

              {/* Key Quantitative Metrics */}
              <div className="py-4 grid grid-cols-2 gap-4 border-b border-stone-800">
                <div className="p-3 bg-stone-800/60 rounded-xl border border-stone-700/50">
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-400 mb-1">
                    <Weight className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ausbaugewicht</span>
                  </div>
                  <div className="text-lg font-bold font-mono text-white tabular-nums">
                    ca. {calculation.totalWeightKg} kg
                  </div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">
                    ✓ Führerschein B sicher
                  </div>
                </div>

                <div className="p-3 bg-stone-800/60 rounded-xl border border-stone-700/50">
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-400 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ausbauzeit</span>
                  </div>
                  <div className="text-lg font-bold font-mono text-white tabular-nums">
                    ca. {calculation.buildWeeks} Wochen
                  </div>
                  <div className="text-[10px] text-stone-400 mt-0.5">
                    ab Baubeginn
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="pt-4 space-y-2">
                <div className="flex justify-between text-xs text-stone-300">
                  <span>Reine Ausbau- & Meisterkosten:</span>
                  <span className="font-mono tabular-nums font-semibold">
                    {calculation.conversionTotal.toLocaleString('de-DE')} €
                  </span>
                </div>

                {includeVanPrice && state.baseVehicle !== 'own-van' && (
                  <div className="flex justify-between text-xs text-stone-300">
                    <span>Neufahrzeug {selectedBaseVehicle.name}:</span>
                    <span className="font-mono tabular-nums font-semibold">
                      +{selectedBaseVehicle.priceBaseVan.toLocaleString('de-DE')} €
                    </span>
                  </div>
                )}

                <div className="pt-3 border-t border-stone-700 flex items-baseline justify-between">
                  <div>
                    <div className="text-xs text-stone-400">Gesamte Richtpreis-Schätzung</div>
                    <div className="text-[10px] text-stone-400">inkl. 19% MwSt. & TÜV-Abnahme</div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                    {calculation.grandTotal.toLocaleString('de-DE')} €
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleInquiry}
                className="w-full mt-6 py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Diese Konfiguration unverbindlich anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust box */}
            <div className="p-4 bg-stone-100 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1.5">
              <div className="font-semibold text-stone-800 flex items-center gap-1.5">
                <span>Transparenz-Garantie</span>
              </div>
              <p>
                Der berechnete Betrag ist eine verlässliche Kostenschätzung. Vor Baubeginn erhältst du
                nach einem persönlichen CAD-Entwurfsgespräch ein verbindliches Festpreis-Angebot ohne versteckte Kosten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

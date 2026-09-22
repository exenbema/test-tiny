import { VehicleModel } from '../types';

export const SHOWCASE_MODELS: VehicleModel[] = [
  {
    id: 'nordic-explorer',
    name: 'Nordic Explorer 4x4',
    subtitle: 'Der autarke Hochgebirgs- & Skandinavien-Spezialist',
    baseVehicle: 'Mercedes-Benz Sprinter 4x4 L2H2 (319 CDI)',
    category: 'Offroad',
    priceFrom: 68500,
    buildTimeWeeks: 10,
    image: '/src/assets/images/camper_sprinter_offroad_1790107573813.jpg',
    specs: {
      length: '5,93 m',
      seats: 2,
      berths: 2,
      battery: '300 Ah LiFePO4 Victron Smart',
      solar: '360 W Black-Line Monokristallin',
      water: '95 L Frischwasser (frostgeschützt)',
      heating: 'Autoterm Air 2D Diesel mit Höhenkit bis 3.000m',
      isolation: '19 mm Armaflex XG + Alubutyl Entdröhnung',
    },
    highlights: [
      'Vollwertige Innendusche mit Clesana C1 Verschweißtoilette',
      'Massive geölte Eichenarbeitsplatte mit Induktionskochfeld',
      'Dachterrasse aus sibirischer Lärche mit integrierter LED-Lightbar',
      'Delta 4x4 Klassik B Felgen mit BF Goodrich KO2 All-Terrain Bereifung',
      'Victron MultiPlus II 3000VA Sinus-Wechselrichter'
    ],
    description: 'Für alle, die abseits asphaltierter Straßen absolute Autarkie suchen. Unser Nordic Explorer verbindet echtes Allrad-Potenzial mit skandinavischem Minimalismus und warmen Naturhölzern.'
  },
  {
    id: 'alpine-haven',
    name: 'Alpine Haven L3H2',
    subtitle: 'Mobiles Loft mit Raumgefühl & XXL-Garage',
    baseVehicle: 'VW Crafter / MAN TGE 3.180 4Motion L3H2',
    category: 'Comfort',
    priceFrom: 74900,
    buildTimeWeeks: 12,
    image: '/src/assets/images/hero_campervan_interior_1790107560363.jpg',
    specs: {
      length: '6,84 m',
      seats: 4,
      berths: 4,
      battery: '400 Ah LiFePO4 mit Cerbo GX Display',
      solar: '440 W Schindelzellen-Module',
      water: '120 L Frischwasser / 90 L Abwassertank',
      heating: 'Truma Combi D 6E (Diesel + 230V Elektroheizstab)',
      isolation: '25 mm Doppel-Armaflex + Hanffaser-Dämmung',
    },
    highlights: [
      'Elektrisches Hubbett über der U-Sitzgruppe für 4 Schlafplätze',
      'Heckgarage mit Schwerlastauszug für 2 E-Mountainbikes',
      'Integrierter ergonomischer Workstation-Tisch für Remote Work',
      'Badezimmer mit Echtglas-Schiebetür und Regendusche',
      'Möbelfronten in seidenmattem Fenix HPL mit Anti-Fingerprint'
    ],
    description: 'Das Flaggschiff unserer Manufaktur. Maximale Großzügigkeit, vier vollwertige zugelassene Einzelsitze und ein durchdachtes Energiekonzept für monatelanges freies Stehen.'
  },
  {
    id: 'tiny-escape',
    name: 'Tiny Escape Compact',
    subtitle: 'Agiles Alltags- & Wochenendwunder',
    baseVehicle: 'Ford Transit Custom / VW T6.1',
    category: 'Compact',
    priceFrom: 39500,
    buildTimeWeeks: 7,
    image: '/src/assets/images/camper_kitchen_details_1790107599998.jpg',
    specs: {
      length: '4,97 m (Parkhaus-tauglich < 2,00m)',
      seats: 4,
      berths: 2,
      battery: '150 Ah LiFePO4 Lithium',
      solar: '180 W Semi-flexibel',
      water: '45 L Frischwasser-Kanistersystem',
      heating: 'Planar 2D Unterflur-Standheizung',
      isolation: '19 mm Armaflex XG',
    },
    highlights: [
      'Herausnehmbares Küchenmodul für Outdoor-Kochen im Freien',
      'Schlafsitzbank mit TÜV-Zulassung und Isofix-Befestigung',
      'Schlankes Möbeldesign aus superleichtem Pappelsperrholz',
      'Drehkonsolen für Fahrer- und Beifahrersitz',
      'Vollständige Wohnmobil-Umschreibung mit geringer Kfz-Steuer'
    ],
    description: 'Kompakt genug für die Tiefgarage in der Großstadt, geräumig genug für spontane Trips in die Berge oder an den Atlantik. Perfekt als Erstfahrzeug mit vollem Reisekomfort.'
  }
];

export const BASE_VEHICLES = [
  {
    id: 'sprinter',
    name: 'Mercedes-Benz Sprinter',
    subtitle: 'L2H2 / L3H2 – Der Klassiker für Premium-Ausbauten',
    priceBaseVan: 54000,
    cargoLength: '3,35 m bis 4,40 m',
    payloadScore: 'Sehr hoch',
    recommended: true
  },
  {
    id: 'crafter',
    name: 'VW Crafter / MAN TGE',
    subtitle: 'L3H2 / L4H2 – Geradlinige Wände & enormer Raumkomfort',
    priceBaseVan: 52000,
    cargoLength: '3,45 m bis 4,30 m',
    payloadScore: 'Hervorragend',
    recommended: true
  },
  {
    id: 'transit',
    name: 'Ford Transit Kastenwagen',
    subtitle: 'L3H2 – Bestes Preis-Leistungs-Verhältnis',
    priceBaseVan: 44000,
    cargoLength: '3,49 m',
    payloadScore: 'Sehr gut',
    recommended: false
  },
  {
    id: 'ducato',
    name: 'Fiat Ducato / Boxer',
    subtitle: 'L2H2 / L3H2 – Größte Innenbreite (1,87m Querbett)',
    priceBaseVan: 41000,
    cargoLength: '3,12 m bis 3,70 m',
    payloadScore: 'Sehr gut',
    recommended: false
  },
  {
    id: 'own-van',
    name: 'Eigenes Fahrzeug vorhanden',
    subtitle: 'Wir bauen deinen bereits gekauften Transporter aus',
    priceBaseVan: 0,
    cargoLength: 'Individuell',
    payloadScore: 'Nach Fahrgestell',
    recommended: false
  }
];

export const LAYOUT_STYLES = [
  {
    id: 'nordic',
    name: 'Nordic Oak & Linen',
    description: 'Helle geölte Eichenarbeitsplatte, weiße Schrankfronten, Naturfilz an den Holmen & warmes LED-Ambiente.',
    price: 0,
    weightKg: 280,
    popular: true
  },
  {
    id: 'alpine',
    name: 'Alpine Chalet Wood',
    description: 'Echtholz-Altholzoptik, matte anthrazitfarbene HPL-Möbel, Naturstein-Waschbecken und Messing-Armaturen.',
    price: 3400,
    weightKg: 320,
    popular: false
  },
  {
    id: 'minimal',
    name: 'Modern Minimal Monochrom',
    description: 'Matte Graphitgrau-Oberflächen, Birkensperrholz mit sichtbaren Multiplex-Kanten, hoch strapazierfähig.',
    price: 1800,
    weightKg: 260,
    popular: false
  }
];

export const BED_SYSTEMS = [
  {
    id: 'fixed-rear',
    name: 'Festes Querbett (140 x 195 cm)',
    description: 'Maximaler Stauraum in der Heckgarage für Sportgeräte, kein täglicher Umbau nötig.',
    price: 2400,
    weightKg: 65,
    sleepCapacity: 2
  },
  {
    id: 'lengthwise-extension',
    name: 'Längsbett mit Auszug (175 x 200 cm)',
    description: 'Ideal für Personen über 1,85m. Tagsüber großzügige Sitzlounge, nachts riesiges Doppelbett.',
    price: 3800,
    weightKg: 85,
    sleepCapacity: 2
  },
  {
    id: 'electric-lift',
    name: 'Elektrisches Hubbett über Rundsitzgruppe',
    description: 'Auf Knopfdruck an die Decke fahren. Tagüber riesige Dinette für 5 Personen, nachts Schlafebene.',
    price: 5900,
    weightKg: 110,
    sleepCapacity: 2
  }
];

export const ENERGY_PACKAGES = [
  {
    id: 'weekender',
    name: 'Weekender LiFePO4 (150 Ah)',
    description: '150Ah Lithiumbatterie, 180W Solar, 1200W Sinus-Inverter, Victron SmartShunt.',
    price: 3900,
    weightKg: 38,
    offgridDays: '2-3 Tage'
  },
  {
    id: 'offgrid-pro',
    name: 'Offgrid Pro (300 Ah + Induktion)',
    description: '300Ah Victron LiFePO4, 380W Solar, MultiPlus 3000W Inverter, 50A Ladebooster, Cerbo GX Display.',
    price: 7400,
    weightKg: 62,
    offgridDays: 'Vollständig autark'
  },
  {
    id: 'extreme-nomad',
    name: 'Extreme Autarkie (600 Ah & Dual-Alternator)',
    description: '600Ah Lithium-Powerbank, 540W Solar, 2. Lichtmaschine für blitzschnelles Laden bei Fahrt, Starlink-Port.',
    price: 12200,
    weightKg: 95,
    offgridDays: 'Ganzjährig autark'
  }
];

export const SANITARY_PACKAGES = [
  {
    id: 'compact-external',
    name: 'Außendusche & Trockentrenntoilette im Auszug',
    description: '80L Frischwassertank, Warmwasser-Boiler, mobile Trockentrenntoilette verdeckt in Sitzbank.',
    price: 2800,
    weightKg: 45
  },
  {
    id: 'indoor-shower-trelino',
    name: 'Feste Nasszelle mit Trelino Trockentrenntoilette',
    description: 'Wasserdichte Dusche mit Edelstahltasse, Naturstein-HPL, Entlüftung und 100L Frischwassertank.',
    price: 5800,
    weightKg: 80
  },
  {
    id: 'clesana-premium',
    name: 'High-End Nasszelle mit Clesana C1 Verschweißtoilette',
    description: 'Geruchlos, wasserlos und hygienisch ohne Chemie verschweißen. Inklusive Raindance-Duschkopf.',
    price: 7600,
    weightKg: 90
  }
];

export const ADDONS = [
  {
    id: 'roof-rack',
    name: 'Dachträger mit Holz-Sonnenterrasse & Leiter',
    description: 'Pulverbeschichtetes Aluminium mit Lärchenholz-Deck und Heckleiter.',
    price: 3400,
    weightKg: 42
  },
  {
    id: 'wheels-tires',
    name: 'Delta 4x4 Offroad-Felgen & BF Goodrich AT',
    description: 'Robuster Look, verbesserte Traktion im Gelände und auf nasser Wiese.',
    price: 2950,
    weightKg: 28
  },
  {
    id: 'awning',
    name: 'Thule Omnistor Markise (Anthrazit)',
    description: 'Inklusive LED-Unterbodenbeleuchtung und Sturmsicherung.',
    price: 1350,
    weightKg: 24
  },
  {
    id: 'extra-seats',
    name: 'Zusätzliche Schnierle Einzelsitze (2 Stück)',
    description: 'TÜV-geprüfte Schienenmontage, drehbar, verstellbar und schnell herausnehmbar.',
    price: 3200,
    weightKg: 48
  },
  {
    id: 'floor-heating',
    name: 'Elektrische Fußbodenheizung (Wohlfühlwärme)',
    description: 'Dünnbettheizung unter dem Linoleumboden, sanfte Strahlungswärme im Winter.',
    price: 950,
    weightKg: 8
  }
];

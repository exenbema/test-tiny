import React, { useState } from 'react';
import { Menu, X, Phone, Compass } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
  onScrollTo: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onScrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-2xl font-extrabold tracking-tight text-stone-900 font-display flex items-center gap-2 group"
          >
            <span>tinyandvan</span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <button
              onClick={() => handleNavClick('modelle')}
              className="hover:text-amber-900 transition-colors cursor-pointer py-1"
            >
              Modelle & Ausbauten
            </button>
            <button
              onClick={() => handleNavClick('manufaktur')}
              className="hover:text-amber-900 transition-colors cursor-pointer py-1"
            >
              Handwerk & Technik
            </button>
            <button
              onClick={() => handleNavClick('ablauf')}
              className="hover:text-amber-900 transition-colors cursor-pointer py-1"
            >
              Ablauf
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="hover:text-amber-900 transition-colors cursor-pointer py-1"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('kontakt')}
              className="hover:text-amber-900 transition-colors cursor-pointer py-1"
            >
              Kontakt
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+498921547890"
              className="text-stone-600 hover:text-stone-900 text-xs font-medium px-3 py-2 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-800" />
              <span className="font-mono tabular-nums">089 / 2154 7890</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-lg shadow-sm transition-all duration-150 whitespace-nowrap cursor-pointer"
            >
              Traumvan planen
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 focus:outline-none"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-stone-50 px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick('modelle')}
            className="block w-full text-left py-2 text-base font-medium text-stone-800 hover:text-amber-900"
          >
            Modelle & Ausbauten
          </button>
          <button
            onClick={() => handleNavClick('manufaktur')}
            className="block w-full text-left py-2 text-base font-medium text-stone-800 hover:text-amber-900"
          >
            Handwerk & Manufaktur
          </button>
          <button
            onClick={() => handleNavClick('ablauf')}
            className="block w-full text-left py-2 text-base font-medium text-stone-800 hover:text-amber-900"
          >
            Ablauf in 5 Schritten
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="block w-full text-left py-2 text-base font-medium text-stone-800 hover:text-amber-900"
          >
            Häufige Fragen (FAQ)
          </button>
          <div className="pt-4 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-lg shadow-sm"
            >
              Kostenlose Beratung buchen
            </button>
            <a
              href="tel:+498921547890"
              className="w-full py-2.5 text-center text-xs font-medium text-stone-600 border border-stone-300 rounded-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Direkt anrufen: 089 / 2154 7890</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

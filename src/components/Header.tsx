import React, { useState } from 'react';
import { ShoppingBag, Calendar, MapPin, Phone, Clock, Menu, X, Gift, Sparkles } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
  onOpenGiftCard: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
  onOpenGiftCard,
  activeSection,
  setActiveSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'menu', label: 'Menu' },
    { id: 'patio', label: 'Patio & Events' },
    { id: 'story', label: 'Our Story' },
    { id: 'reviews', label: 'Press & Reviews' },
    { id: 'hours', label: 'Hours & Location' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-amber-900/30 text-amber-50">
      {/* Top Bar Announcement */}
      <div className="bg-gradient-to-r from-amber-950 via-zinc-900 to-emerald-950 py-1.5 px-4 text-xs border-b border-amber-500/20 text-amber-200/90 flex flex-wrap justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-4 text-xs font-medium">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Open Today 5:00 PM - 10:30 PM
          </span>
          <span className="hidden sm:inline text-amber-200/70">
            Happy Hour: Tue - Fri 5:00 - 6:30 PM ($10 Cocktails & $8 Bites)
          </span>
        </div>
        <div className="flex items-center gap-4 text-amber-200/80">
          <a href="tel:7188570200" className="hover:text-amber-400 transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3 text-amber-400" />
            <span>(718) 857-0200</span>
          </a>
          <span className="hidden md:inline text-amber-700">|</span>
          <span className="hidden md:flex items-center gap-1">
            <MapPin className="w-3 h-3 text-amber-400" />
            162 5th Ave, Park Slope Brooklyn
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-left group flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-emerald-800 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center border border-amber-400/40">
              <span className="text-amber-400 font-serif font-bold text-lg">B</span>
            </div>
          </div>
          <div>
            <span className="text-2xl font-serif tracking-widest font-bold uppercase text-amber-100 group-hover:text-amber-300 transition-colors">
              BRICOLAGE
            </span>
            <span className="block text-[10px] tracking-widest text-emerald-400/90 font-sans uppercase -mt-1 font-semibold">
              Vietnamese Gastropub • NYC
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-colors py-2 relative text-amber-100/80 hover:text-amber-300 ${
                activeSection === item.id ? 'text-amber-400 font-semibold' : ''
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenGiftCard}
            className="hidden xl:flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg text-amber-300 bg-amber-950/40 border border-amber-600/30 hover:bg-amber-900/50 transition-all"
          >
            <Gift className="w-3.5 h-3.5 text-amber-400" />
            <span>Gift Cards</span>
          </button>

          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-xl bg-zinc-900 border border-amber-500/20 text-amber-200 hover:text-amber-400 hover:border-amber-500/50 transition-all group"
            title="Online Pickup & Delivery"
          >
            <ShoppingBag className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-amber-500 to-emerald-600 text-zinc-950 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenReservation}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-zinc-950 font-semibold text-sm shadow-lg shadow-amber-950/50 hover:shadow-amber-500/20 transition-all active:scale-95"
          >
            <Calendar className="w-4 h-4 text-zinc-950" />
            <span>Reserve Table</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-zinc-900 text-amber-200 hover:text-amber-400 border border-amber-500/20"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-amber-900/40 px-6 py-6 space-y-4 text-amber-100 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left py-2 text-lg font-serif border-b border-zinc-900 hover:text-amber-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-zinc-950 font-bold text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Reserve a Table</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGiftCard();
              }}
              className="w-full py-3 rounded-xl bg-zinc-900 border border-amber-500/30 text-amber-300 font-medium text-center flex items-center justify-center gap-2"
            >
              <Gift className="w-5 h-5 text-amber-400" />
              <span>Purchase E-Gift Cards</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

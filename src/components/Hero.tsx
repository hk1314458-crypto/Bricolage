import React from 'react';
import { Calendar, ShoppingBag, UtensilsCrossed, Star, Flame, Award, ChevronRight, Heart } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenCart: () => void;
  onScrollToMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenReservation,
  onOpenCart,
  onScrollToMenu,
}) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-950 text-amber-50">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/bricolage_hero_1784981473003.jpg"
          alt="Bricolage NYC Dining & Cocktails"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
      </div>

      {/* Decorative Grid Accent */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Accolades Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-medium shadow-2xl mb-6 backdrop-blur-md">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Michelin Recommended • Michelin Bib Gourmand Favorite • Eater NY Essential 38</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-tight text-balance text-amber-100 leading-[1.1] mb-6">
          Unpretentious Modern <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-400">
            Vietnamese Gastropub
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-xl text-amber-100/80 font-sans font-light leading-relaxed mb-10 text-balance">
          Founded by Slanted Door alumni Chef Lien Lin & Edward Lin in Park Slope, Brooklyn. 
          Savor sizzling Shaking Beef, 24-hour Duck Pho, dragonfruit cocktails, and intimate year-round dining in our heated garden patio.
        </p>

        {/* Call To Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-base shadow-xl shadow-amber-950/80 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5 text-zinc-950" />
            <span>Book A Table</span>
          </button>

          <button
            onClick={onScrollToMenu}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900/90 border border-amber-500/40 text-amber-200 hover:text-amber-100 hover:bg-zinc-800 hover:border-amber-400 font-semibold text-base backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <UtensilsCrossed className="w-5 h-5 text-amber-400" />
            <span>Explore Menu</span>
          </button>

          <button
            onClick={onOpenCart}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900 hover:text-emerald-100 font-medium text-base backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-5 h-5 text-emerald-400" />
            <span>Order Pickup / Delivery</span>
          </button>
        </div>

        {/* Quick Highlights Row */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full border-t border-amber-900/30 pt-8 text-center text-xs sm:text-sm text-amber-200/70">
          <div className="flex flex-col items-center">
            <span className="font-serif text-amber-300 text-lg font-bold">162 5th Ave</span>
            <span>Park Slope, Brooklyn NY</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-amber-300 text-lg font-bold">Heated Patio</span>
            <span>Year-Round Outdoor Dining</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-amber-300 text-lg font-bold">4.8 ★★★★★</span>
            <span>Over 2,500+ Diner Reviews</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-amber-300 text-lg font-bold">Craft Bar</span>
            <span>Natural Wines & Botanical Spirits</span>
          </div>
        </div>

      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
};

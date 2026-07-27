import React from 'react';
import { Heart, Utensils, Compass, Leaf, Sparkles } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-zinc-950 text-amber-50 relative scroll-mt-20 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 font-sans text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30">
            Our Culinary Heritage
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100 mt-3 mb-4">
            The Story Behind Bricolage
          </h2>
          <p className="text-amber-200/70 text-sm sm:text-base">
            From San Francisco's iconic Slanted Door to the vibrant heart of Park Slope, Brooklyn.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-amber-400 font-serif italic text-lg border-b border-amber-500/30 pb-2">
              <Compass className="w-5 h-5 text-amber-400" />
              <span>/bri-kə-ˈläzh/ — Something constructed from a diverse array of available things.</span>
            </div>

            <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-sans font-light">
              Founded by Executive Chef <strong className="text-amber-300 font-semibold">Lien Lin</strong> and <strong className="text-amber-300 font-semibold">Edward Lin</strong>, Bricolage was born from a desire to bring soul-nourishing Vietnamese gastropub cuisine to Brooklyn. Having spent years honing their craft at San Francisco’s legendary <em className="text-amber-300">Slanted Door</em>, Lien and Edward merged West Coast ingredient obsession with East Coast warmth and energy.
            </p>

            <p className="text-sm sm:text-base text-amber-100/80 leading-relaxed font-sans font-light">
              Inside, you’ll find reclaimed industrial timbers, vintage Brooklyn brass, warm candlelight, and a kitchen that simmers aromatic 24-hour beef and duck bones daily.
            </p>

            {/* Philosophy Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-zinc-900 rounded-2xl border border-amber-500/20">
                <Leaf className="w-6 h-6 text-emerald-400 mb-2" />
                <h4 className="font-serif font-bold text-amber-200 text-sm">Sustainable Sourcing</h4>
                <p className="text-xs text-amber-200/60 mt-1">
                  100% Niman Ranch humanely raised pork & beef, local organic produce, and wild-caught seafood.
                </p>
              </div>

              <div className="p-4 bg-zinc-900 rounded-2xl border border-amber-500/20">
                <Utensils className="w-6 h-6 text-amber-400 mb-2" />
                <h4 className="font-serif font-bold text-amber-200 text-sm">Authentic Botanicals</h4>
                <p className="text-xs text-amber-200/60 mt-1">
                  Sawtooth coriander, rau răm, Thai basil, and fresh galangal delivered directly from local Asian farms.
                </p>
              </div>
            </div>
          </div>

          {/* Photo Collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-amber-500/20 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                  alt="Chef Lien Lin preparing Vietnamese Shaking Beef"
                  className="w-full h-48 sm:h-60 object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-amber-500/20 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
                  alt="Bricolage Craft Bar Cocktails"
                  className="w-full h-36 sm:h-44 object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="rounded-2xl overflow-hidden border border-amber-500/20 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80"
                  alt="24-Hour Duck Pho Broth"
                  className="w-full h-36 sm:h-44 object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-amber-500/20 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80"
                  alt="Traditional Vietnamese Coffee"
                  className="w-full h-48 sm:h-60 object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Heart, Instagram, Facebook, CheckCircle2, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-zinc-950 text-amber-50 border-t border-amber-900/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter CTA */}
        <div className="bg-gradient-to-r from-amber-950 via-zinc-900 to-emerald-950 p-8 sm:p-10 rounded-3xl border border-amber-500/30 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-amber-400 font-sans text-xs uppercase tracking-widest font-bold">
              Join Our Supper Club
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100 mt-1">
              Get $10 Off Your First Visit
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/70 mt-1">
              Subscribe for seasonal garden patio dinner announcements, chef specials, and private tasting invites.
            </p>
          </div>

          {subscribed ? (
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm bg-emerald-950/80 px-6 py-3 rounded-xl border border-emerald-500/40">
              <CheckCircle2 className="w-5 h-5" />
              <span>Voucher Sent to {email}! Check Your Inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400 sm:w-72"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <span>Claim $10 Voucher</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-900 text-xs text-amber-200/70">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-600 p-0.5">
                <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center border border-amber-400">
                  <span className="text-amber-400 font-serif font-bold text-base">B</span>
                </div>
              </div>
              <span className="text-xl font-serif font-bold tracking-widest text-amber-100 uppercase">
                BRICOLAGE
              </span>
            </div>
            <p className="text-xs text-amber-200/60 leading-relaxed font-sans">
              Modern Vietnamese Gastropub in Park Slope, Brooklyn. Chef Lien Lin & Edward Lin.
            </p>
            <div className="flex items-center gap-3 pt-2 text-amber-400">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 bg-zinc-900 rounded-lg hover:bg-amber-500 hover:text-zinc-950 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 bg-zinc-900 rounded-lg hover:bg-amber-500 hover:text-zinc-950 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-amber-100 text-sm">Location & Contact</h4>
            <p className="leading-relaxed">
              162 5th Avenue <br />
              Park Slope, Brooklyn, NY 11217 <br />
              <a href="tel:7188570200" className="text-amber-400 hover:underline font-semibold block mt-1">
                (718) 857-0200
              </a>
            </p>
          </div>

          {/* Quick Hours */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-amber-100 text-sm">Service Hours</h4>
            <p className="leading-relaxed">
              <strong>Dinner:</strong> Daily 5:00 PM – 10:30 PM <br />
              <strong>Brunch:</strong> Sat & Sun 11:00 AM – 3:30 PM <br />
              <strong>Happy Hour:</strong> Tue – Fri 5:00 PM – 6:30 PM
            </p>
          </div>

          {/* Accolades */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-amber-100 text-sm">Accolades</h4>
            <p className="leading-relaxed">
              • Michelin Recommended <br />
              • NY Times Critics' Pick <br />
              • Eater NY Essential 38 <br />
              • Zagat Top Vietnamese NYC
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-amber-200/50 gap-4">
          <p>© {new Date().getFullYear()} Bricolage NYC. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Upgraded with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for Bricolage Park Slope Brooklyn
          </p>
        </div>

      </div>
    </footer>
  );
};

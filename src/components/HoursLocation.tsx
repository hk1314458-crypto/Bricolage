import React from 'react';
import { Clock, MapPin, Phone, Navigation, Train, Car, ExternalLink, Calendar } from 'lucide-react';

interface HoursLocationProps {
  onOpenReservation: () => void;
}

export const HoursLocation: React.FC<HoursLocationProps> = ({ onOpenReservation }) => {
  return (
    <section id="hours" className="py-20 bg-zinc-950 text-amber-50 relative scroll-mt-20 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-sans text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/30">
            Visit Us in Park Slope
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100 mt-3 mb-4">
            Hours, Location & Transport
          </h2>
          <p className="text-amber-200/70 text-sm sm:text-base">
            Located on 5th Avenue between Degraw St & Sackett St in Park Slope, Brooklyn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Hours Card */}
          <div className="lg:col-span-5 bg-zinc-900 p-8 rounded-3xl border border-amber-500/30 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-amber-500/20 pb-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/30">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-amber-100">Operating Hours</h3>
                  <span className="text-xs text-emerald-400 font-semibold">Kitchen Open 7 Days A Week</span>
                </div>
              </div>

              {/* Hours Schedule */}
              <div className="space-y-4 text-xs">
                
                {/* Dinner */}
                <div className="bg-zinc-950 p-4 rounded-2xl border border-amber-500/15">
                  <div className="flex justify-between font-serif font-bold text-sm text-amber-300">
                    <span>Dinner Service</span>
                    <span>Daily</span>
                  </div>
                  <div className="mt-1 flex justify-between text-amber-200/80">
                    <span>Tuesday – Sunday</span>
                    <span className="font-semibold text-amber-100">5:00 PM – 10:30 PM</span>
                  </div>
                  <div className="flex justify-between text-amber-200/80">
                    <span>Monday</span>
                    <span className="font-semibold text-amber-100">5:00 PM – 10:00 PM</span>
                  </div>
                </div>

                {/* Weekend Brunch */}
                <div className="bg-zinc-950 p-4 rounded-2xl border border-amber-500/15">
                  <div className="flex justify-between font-serif font-bold text-sm text-emerald-400">
                    <span>Weekend Brunch</span>
                    <span>Sat & Sun</span>
                  </div>
                  <div className="mt-1 flex justify-between text-amber-200/80">
                    <span>Saturday & Sunday</span>
                    <span className="font-semibold text-amber-100">11:00 AM – 3:30 PM</span>
                  </div>
                </div>

                {/* Happy Hour */}
                <div className="bg-zinc-950 p-4 rounded-2xl border border-amber-500/15">
                  <div className="flex justify-between font-serif font-bold text-sm text-amber-400">
                    <span>Happy Hour</span>
                    <span>Tue – Fri</span>
                  </div>
                  <div className="mt-1 flex justify-between text-amber-200/80">
                    <span>Tuesday – Friday</span>
                    <span className="font-semibold text-amber-100">5:00 PM – 6:30 PM</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800">
              <button
                onClick={onOpenReservation}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve A Table Now</span>
              </button>
            </div>
          </div>

          {/* Location & Transport Card */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address & Contact Banner */}
            <div className="bg-zinc-900 p-6 rounded-3xl border border-amber-500/30 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-base">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span>Restaurant Address</span>
                </div>
                <p className="text-xs text-amber-100/90 leading-relaxed font-sans">
                  <strong>BRICOLAGE NYC</strong> <br />
                  162 5th Avenue <br />
                  Park Slope, Brooklyn, NY 11217
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-base">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>Direct Phone & Inquiries</span>
                </div>
                <p className="text-xs text-amber-100/90 leading-relaxed font-sans">
                  <a href="tel:7188570200" className="text-amber-300 font-bold hover:underline">
                    (718) 857-0200
                  </a> <br />
                  <span className="text-amber-200/60">Reservations, Takeout & Catering</span>
                </p>
              </div>
            </div>

            {/* Simulated Interactive Map Container */}
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 h-64 sm:h-72 bg-zinc-950 shadow-2xl group">
              {/* Map background graphic */}
              <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40">
                <div className="p-3 bg-amber-500 text-zinc-950 rounded-full shadow-2xl mb-2 animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-amber-100">162 5th Ave, Brooklyn NY 11217</h4>
                <p className="text-xs text-amber-200/70 max-w-sm mt-1 mb-4">
                  Corner of 5th Ave & Degraw St in vibrant Park Slope
                </p>

                <a
                  href="https://maps.google.com/?q=162+5th+Ave+Brooklyn+NY+11217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded-xl shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Subway & Transit Guide */}
            <div className="bg-zinc-900/80 p-6 rounded-3xl border border-amber-500/20 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
                  <Train className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-amber-200">Subway Lines</h5>
                  <p className="text-amber-200/60 mt-0.5">
                    <strong>R Train</strong> to Union St (2 blocks walk) <br />
                    <strong>2 / 3 Trains</strong> to Bergen St or Atlantic Ave
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg shrink-0">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-amber-200">Street Parking</h5>
                  <p className="text-amber-200/60 mt-0.5">
                    Metered 2-hour parking on 5th Ave. Free residential street parking on Degraw & Sackett St.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

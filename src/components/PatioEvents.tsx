import React, { useState } from 'react';
import { Calendar, Users, Sparkles, CheckCircle2, Flame, Heart, PartyPopper, Mail, Phone, Send } from 'lucide-react';
import { EventInquiry } from '../types';

export const PatioEvents: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [inquiry, setInquiry] = useState<EventInquiry>({
    name: '',
    email: '',
    phone: '',
    eventType: 'birthday',
    guestCount: 20,
    preferredDate: '',
    preferredTime: '18:00',
    cateringOption: 'family_style',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="patio" className="py-20 bg-zinc-950 text-amber-50 relative scroll-mt-20 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-sans text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/30">
            Brooklyn Backyard Oasis
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100 mt-3 mb-4">
            Heated Garden Patio & Private Events
          </h2>
          <p className="text-amber-200/70 text-sm sm:text-base">
            Tucked behind our Park Slope dining room lies an enchanting year-round garden patio wrapped in fairy lights, lush flora, and warmth.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Image Showcase */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl group">
            <img
              src="/src/assets/images/bricolage_patio_1784981496198.jpg"
              alt="Bricolage Heated Backyard Garden Patio Brooklyn"
              className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 bg-zinc-950/80 backdrop-blur-md p-6 rounded-2xl border border-amber-500/30">
              <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-lg mb-1">
                <Flame className="w-5 h-5 text-amber-500 animate-pulse" />
                <span>Heated Year-Round Comfort</span>
              </div>
              <p className="text-xs text-amber-100/80">
                Custom radiant overhead heaters keep the garden cozy through brisk Brooklyn autumns and winter evenings.
              </p>
            </div>
          </div>

          {/* Highlights & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-zinc-900/80 p-6 rounded-3xl border border-amber-500/20 space-y-4">
              <h3 className="text-2xl font-serif font-bold text-amber-100">
                The Perfect Setting For Celebrations
              </h3>
              <p className="text-xs text-amber-200/70 leading-relaxed">
                Whether hosting an intimate birthday dinner, rehearsal party, or corporate gathering, our team creates custom Vietnamese family-style feasts tailored to your guests.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                  <span className="text-amber-400 font-serif font-bold text-lg block">Up to 45</span>
                  <span className="text-[11px] text-amber-200/60">Seated Guests</span>
                </div>
                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                  <span className="text-amber-400 font-serif font-bold text-lg block">Up to 60</span>
                  <span className="text-[11px] text-amber-200/60">Cocktail Party</span>
                </div>
                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                  <span className="text-amber-400 font-serif font-bold text-lg block">Dedicated Bar</span>
                  <span className="text-[11px] text-amber-200/60">Craft Cocktail Service</span>
                </div>
                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                  <span className="text-amber-400 font-serif font-bold text-lg block">Family-Style</span>
                  <span className="text-[11px] text-amber-200/60">Feast Menus</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-gradient-to-r from-amber-950/60 to-emerald-950/60 p-6 rounded-3xl border border-amber-500/30 flex items-center justify-between">
              <div>
                <h4 className="font-serif font-bold text-sm text-amber-200">Have Questions?</h4>
                <p className="text-xs text-amber-200/60">Speak with our Events Director</p>
              </div>
              <a
                href="mailto:events@bricolage.nyc"
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-bold rounded-xl transition-colors"
              >
                Email Events
              </a>
            </div>
          </div>

        </div>

        {/* Private Event Inquiry Form */}
        <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-3xl border border-amber-500/30 p-8 sm:p-12 max-w-4xl mx-auto shadow-2xl">
          
          <div className="text-center mb-8">
            <span className="text-emerald-400 text-xs font-sans uppercase tracking-widest font-bold">
              Group Dining & Buyouts
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100 mt-1">
              Submit a Private Event Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/60 mt-1">
              Fill out details below and our Event Manager will respond within 24 hours with menu options and pricing.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
              <h4 className="text-2xl font-serif font-bold text-amber-100">Inquiry Received!</h4>
              <p className="text-xs text-amber-200/70 max-w-md mx-auto">
                Thank you <strong className="text-amber-300">{inquiry.name}</strong>. Our Events Director will reach out to <span className="text-amber-300">{inquiry.email}</span> shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-amber-600 text-zinc-950 text-xs font-bold rounded-xl"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-amber-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={inquiry.name}
                    onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                    className="w-full p-3 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-amber-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={inquiry.email}
                    onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-amber-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(718) 000-0000"
                    value={inquiry.phone}
                    onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                    className="w-full p-3 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-amber-300 mb-1">Event Type</label>
                  <select
                    value={inquiry.eventType}
                    onChange={(e) => setInquiry({ ...inquiry, eventType: e.target.value as any })}
                    className="w-full p-3 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                  >
                    <option value="birthday">Birthday Party 🎂</option>
                    <option value="corporate">Corporate Event 💼</option>
                    <option value="wedding_rehearsal">Wedding Rehearsal Dinner 💍</option>
                    <option value="cocktail_party">Cocktail & Bites Reception 🍸</option>
                    <option value="other">Other Special Event ✨</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-amber-300 mb-1">Guest Count</label>
                  <input
                    type="number"
                    min={8}
                    max={60}
                    value={inquiry.guestCount}
                    onChange={(e) => setInquiry({ ...inquiry, guestCount: parseInt(e.target.value) })}
                    className="w-full p-3 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-amber-300 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={inquiry.preferredDate}
                    onChange={(e) => setInquiry({ ...inquiry, preferredDate: e.target.value })}
                    className="w-full p-3 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">Additional Notes & Dietary Requests</label>
                <textarea
                  rows={3}
                  placeholder="Tell us more about your ideal vision, budget, or dietary needs..."
                  value={inquiry.notes}
                  onChange={(e) => setInquiry({ ...inquiry, notes: e.target.value })}
                  className="w-full p-3 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4 text-zinc-950" />
                <span>Submit Event Inquiry</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};

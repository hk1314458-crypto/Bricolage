import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, Users, Sparkles, CheckCircle2, Download, MapPin, AlertCircle } from 'lucide-react';
import { ReservationDetails } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [formData, setFormData] = useState<ReservationDetails>({
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '19:00',
    guests: 2,
    seatingArea: 'patio',
    occasion: 'Casual Dining',
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  if (!isOpen) return null;

  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmed');
  };

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Bricolage NYC//Table Reservation//EN
BEGIN:VEVENT
SUMMARY:Table Reservation at Bricolage NYC (${formData.guests} Guests)
DESCRIPTION:Bricolage Modern Vietnamese Gastropub\\nSeating: ${formData.seatingArea.toUpperCase()}\\nName: ${formData.name}
LOCATION:162 5th Ave, Brooklyn, NY 11217
DTSTART:${formData.date.replace(/-/g, '')}T${formData.time.replace(':', '')}00Z
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `bricolage-reservation-${formData.date}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-zinc-900 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden text-amber-50">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-950 via-zinc-900 to-emerald-950 p-6 border-b border-amber-500/20 flex items-center justify-between">
          <div>
            <span className="text-emerald-400 font-sans text-xs uppercase tracking-widest font-semibold">
              Instant Table Booking
            </span>
            <h3 className="text-2xl font-serif font-bold text-amber-100">
              Reserve at Bricolage NYC
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-800 text-amber-200 hover:text-amber-400 hover:bg-zinc-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
            {/* Seating Preference */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
                Seating Area Preference
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'patio', label: '🌿 Heated Garden Patio', sub: 'Open Year-Round' },
                  { id: 'main', label: '🍷 Main Dining Room', sub: 'Rustic & Cozy' },
                  { id: 'bar', label: '🍸 Bar Counter', sub: 'Cocktail Views' },
                ].map((area) => (
                  <button
                    type="button"
                    key={area.id}
                    onClick={() => setFormData({ ...formData, seatingArea: area.id as any })}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      formData.seatingArea === area.id
                        ? 'bg-amber-600/20 border-amber-500 text-amber-200 font-bold shadow-md'
                        : 'bg-zinc-950 border-zinc-800 text-amber-200/60 hover:border-amber-900'
                    }`}
                  >
                    <div className="text-xs font-semibold">{area.label}</div>
                    <div className="text-[10px] text-amber-200/50 mt-0.5">{area.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Date, Time & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1.5 flex items-center gap-1">
                  <CalendarIcon className="w-3.5 h-3.5 text-amber-400" /> Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> Time
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot} PM
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1.5 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-amber-400" /> Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                  className="w-full p-2.5 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((g) => (
                    <option key={g} value={g}>
                      {g} {g === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Occasion */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 mb-1.5">
                Special Occasion (Optional)
              </label>
              <select
                value={formData.occasion}
                onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
              >
                <option value="Casual Dining">Casual Dining</option>
                <option value="Birthday Celebration">Birthday Celebration 🎂</option>
                <option value="Anniversary">Anniversary ❤️</option>
                <option value="Business Dinner">Business Dinner 💼</option>
                <option value="Date Night">Date Night 🥂</option>
              </select>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 pt-2 border-t border-zinc-800">
              <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Guest Contact Information
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="p-2.5 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                />

                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="p-2.5 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  required
                  placeholder="Mobile Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="p-2.5 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                />

                <input
                  type="text"
                  placeholder="Dietary requests or seating notes"
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="p-2.5 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Notice */}
            <div className="bg-amber-950/40 border border-amber-500/30 rounded-xl p-3 flex items-start gap-2 text-[11px] text-amber-200/80">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Reservations are held for 15 minutes. For parties larger than 8, please submit a Private Events Inquiry.
              </span>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-sm shadow-xl shadow-amber-950/80 transition-all"
            >
              Confirm Reservation Now
            </button>
          </form>
        ) : (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-emerald-400 font-sans text-xs uppercase tracking-widest font-bold">
                Reservation Confirmed
              </span>
              <h3 className="text-3xl font-serif font-bold text-amber-100 mt-1">
                We Can’t Wait To See You, {formData.name.split(' ')[0]}!
              </h3>
              <p className="text-xs text-amber-200/70 mt-2">
                A confirmation text & email voucher have been sent to <strong className="text-amber-300">{formData.email}</strong>.
              </p>
            </div>

            {/* Details Box */}
            <div className="bg-zinc-950 border border-amber-500/30 rounded-2xl p-4 text-left text-xs space-y-2 text-amber-200">
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-amber-400 font-semibold">Date & Time:</span>
                <span>{formData.date} at {formData.time} PM</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-amber-400 font-semibold">Party Size:</span>
                <span>{formData.guests} Guests ({formData.seatingArea.toUpperCase()})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-400 font-semibold">Location:</span>
                <span>162 5th Ave, Park Slope, Brooklyn NY</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleDownloadCalendar}
                className="flex-1 py-3 bg-zinc-800 hover:bg-zinc-700 text-amber-300 font-semibold text-xs rounded-xl border border-amber-500/30 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Add To Calendar (.ics)</span>
              </button>

              <button
                onClick={() => {
                  setStep('form');
                  onClose();
                }}
                className="flex-1 py-3 bg-amber-500 text-zinc-950 font-bold text-xs rounded-xl hover:bg-amber-400"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

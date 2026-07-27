import React, { useState } from 'react';
import { X, Gift, Sparkles, CheckCircle2, CreditCard, Send } from 'lucide-react';
import { GiftCardOrder } from '../types';

interface GiftCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GiftCardModal: React.FC<GiftCardModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'build' | 'success'>('build');
  const [amount, setAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [order, setOrder] = useState<GiftCardOrder>({
    amount: 100,
    senderName: '',
    recipientName: '',
    recipientEmail: '',
    message: 'Enjoy a magical Vietnamese gastropub dinner on me at Bricolage NYC!',
    deliveryDate: new Date().toISOString().split('T')[0],
  });

  if (!isOpen) return null;

  const handleAmountChange = (val: number) => {
    setAmount(val);
    setCustomAmount('');
    setOrder({ ...order, amount: val });
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value) || 0;
    setCustomAmount(e.target.value);
    setAmount(val);
    setOrder({ ...order, amount: val });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden text-amber-50">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-950 via-zinc-900 to-emerald-950 p-6 border-b border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <span className="text-amber-400 font-sans text-xs uppercase tracking-widest font-bold">
                Instant Digital Delivery
              </span>
              <h3 className="text-2xl font-serif font-bold text-amber-100">
                Bricolage Digital Gift Card
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-800 text-amber-200 hover:text-amber-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {step === 'build' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            
            {/* Live Gift Card Preview */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-tr from-zinc-950 via-amber-950/80 to-zinc-900 border-2 border-amber-500/40 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full filter blur-2xl pointer-events-none" />
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <span className="text-[10px] tracking-widest text-emerald-400 uppercase font-sans font-bold">
                    E-GIFT VOUCHER
                  </span>
                  <h4 className="text-2xl font-serif font-bold text-amber-100">BRICOLAGE NYC</h4>
                  <p className="text-[10px] text-amber-200/60">162 5th Ave, Park Slope Brooklyn</p>
                </div>

                <div className="text-right">
                  <span className="text-xs text-amber-300 block">CARD VALUE</span>
                  <span className="text-3xl font-serif font-extrabold text-amber-400">${order.amount || 0}</span>
                </div>
              </div>

              <div className="space-y-1 text-xs text-amber-200/80 italic font-serif">
                <p>"{order.message || 'Enjoy your meal!'}"</p>
              </div>

              <div className="mt-6 pt-3 border-t border-amber-500/20 flex justify-between items-center text-[10px] text-amber-200/60 font-mono">
                <span>TO: {order.recipientName || 'Recipient Name'}</span>
                <span>FROM: {order.senderName || 'Your Name'}</span>
              </div>
            </div>

            {/* Amount Buttons */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 mb-2">Select Gift Amount</label>
              <div className="grid grid-cols-5 gap-2">
                {[25, 50, 100, 150, 250].map((amt) => (
                  <button
                    type="button"
                    key={amt}
                    onClick={() => handleAmountChange(amt)}
                    className={`py-2 rounded-xl font-serif font-bold text-sm border transition-all ${
                      amount === amt && !customAmount
                        ? 'bg-amber-500 border-amber-400 text-zinc-950 shadow-md scale-105'
                        : 'bg-zinc-950 border-zinc-800 text-amber-200 hover:border-amber-500/30'
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Recipient & Sender Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">Recipient Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={order.recipientName}
                  onChange={(e) => setOrder({ ...order, recipientName: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">Recipient Email *</label>
                <input
                  type="email"
                  required
                  placeholder="recipient@example.com"
                  value={order.recipientEmail}
                  onChange={(e) => setOrder({ ...order, recipientEmail: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">Your Name (Sender) *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={order.senderName}
                  onChange={(e) => setOrder({ ...order, senderName: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">Delivery Date</label>
                <input
                  type="date"
                  value={order.deliveryDate}
                  onChange={(e) => setOrder({ ...order, deliveryDate: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-300 mb-1">Custom Gift Note</label>
              <textarea
                rows={2}
                value={order.message}
                onChange={(e) => setOrder({ ...order, message: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-extrabold text-sm shadow-xl flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4 text-zinc-950" />
              <span>Purchase Gift Card (${order.amount})</span>
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-6">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
            <div>
              <span className="text-emerald-400 text-xs uppercase tracking-widest font-bold">
                E-Gift Card Delivered!
              </span>
              <h3 className="text-2xl font-serif font-bold text-amber-100 mt-1">
                Thank You, {order.senderName}!
              </h3>
              <p className="text-xs text-amber-200/70 mt-2">
                A digital gift voucher for <strong className="text-amber-300">${order.amount}</strong> has been emailed to <span className="text-amber-300">{order.recipientEmail}</span>.
              </p>
            </div>

            <button
              onClick={() => {
                setStep('build');
                onClose();
              }}
              className="px-6 py-3 bg-amber-500 text-zinc-950 font-bold text-xs rounded-xl"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

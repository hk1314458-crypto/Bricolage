import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Clock, MapPin, CreditCard } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [tipPercent, setTipPercent] = useState<number>(18);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // Address and contact state
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const tax = subtotal * 0.08875; // NYC sales tax 8.875%
  const deliveryFee = orderType === 'delivery' ? 4.99 : 0;
  const tipAmount = (subtotal * tipPercent) / 100;
  const total = subtotal + tax + deliveryFee + tipAmount;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsOrderPlaced(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-900 border-l border-amber-500/30 text-amber-50 flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-amber-950 via-zinc-900 to-zinc-950 border-b border-amber-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-amber-100">Your Online Order</h3>
                <p className="text-xs text-amber-200/60">Bricolage Pickup & Delivery</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-800 text-amber-200 hover:text-amber-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          {isOrderPlaced ? (
            <div className="p-8 text-center flex-1 flex flex-col justify-center items-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 animate-bounce">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div>
                <span className="text-emerald-400 font-sans text-xs uppercase tracking-widest font-bold">
                  Order Received & Kitchen Preparing!
                </span>
                <h3 className="text-2xl font-serif font-bold text-amber-100 mt-2">
                  Estimated Ready Time: ~25 mins
                </h3>
                <p className="text-xs text-amber-200/70 mt-2">
                  Thank you <strong className="text-amber-300">{customerName || 'Diner'}</strong>! We are crafting your meal fresh at 162 5th Ave.
                </p>
              </div>

              <div className="w-full bg-zinc-950 p-4 rounded-2xl border border-amber-500/20 text-xs text-left text-amber-200 space-y-1">
                <div className="flex justify-between font-semibold border-b border-zinc-800 pb-2 mb-2">
                  <span>Order Type: {orderType.toUpperCase()}</span>
                  <span className="text-amber-400">${total.toFixed(2)}</span>
                </div>
                {orderType === 'delivery' && (
                  <p className="text-[11px] text-amber-200/60">Delivery Address: {deliveryAddress}</p>
                )}
                <p className="text-[11px] text-amber-200/60">Phone: {customerPhone}</p>
              </div>

              <button
                onClick={() => {
                  setIsOrderPlaced(false);
                  onClearCart();
                  onClose();
                }}
                className="w-full py-3 bg-amber-500 text-zinc-950 font-bold text-xs rounded-xl hover:bg-amber-400"
              >
                Close & Return to Menu
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <ShoppingBag className="w-16 h-16 text-amber-500/30 mb-4" />
              <h4 className="text-lg font-serif font-semibold text-amber-200">Your cart is empty</h4>
              <p className="text-xs text-amber-200/60 max-w-xs mt-1 mb-6">
                Explore our Vietnamese gastropub menu and add delicious dishes to start your order.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-amber-600 text-zinc-950 font-bold text-xs rounded-xl hover:bg-amber-500"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="flex-1 flex flex-col overflow-y-auto p-6 space-y-6">
              
              {/* Pickup vs Delivery Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-zinc-950 rounded-2xl border border-amber-500/20">
                <button
                  onClick={() => setOrderType('pickup')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    orderType === 'pickup'
                      ? 'bg-amber-600 text-zinc-950 shadow-md'
                      : 'text-amber-200/60 hover:text-amber-100'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Pickup (~20 min)</span>
                </button>

                <button
                  onClick={() => setOrderType('delivery')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    orderType === 'delivery'
                      ? 'bg-amber-600 text-zinc-950 shadow-md'
                      : 'text-amber-200/60 hover:text-amber-100'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Delivery (~35 min)</span>
                </button>
              </div>

              {/* Cart Items List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-amber-300">
                  <span>Selected Dishes ({cart.length})</span>
                  <button onClick={onClearCart} className="text-red-400 hover:underline flex items-center gap-1">
                    <Trash2 className="w-3 h-3" /> Clear
                  </button>
                </div>

                {cart.map((item) => (
                  <div
                    key={item.menuItem.id}
                    className="bg-zinc-950 p-3 rounded-2xl border border-amber-500/15 flex items-center gap-3"
                  >
                    <img
                      src={item.menuItem.image}
                      alt={item.menuItem.name}
                      className="w-14 h-14 object-cover rounded-xl shrink-0"
                      referrerPolicy="no-referrer"
                    />

                    <div className="flex-1 min-w-0">
                      <h5 className="font-serif font-bold text-xs text-amber-100 truncate">
                        {item.menuItem.name}
                      </h5>
                      <span className="text-xs text-amber-400 font-semibold block">
                        ${(item.menuItem.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-zinc-900 px-2 py-1 rounded-xl border border-amber-500/20">
                      <button
                        onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                        className="p-1 hover:text-amber-400 text-amber-200/70"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-amber-100 w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                        className="p-1 hover:text-amber-400 text-amber-200/70"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer Contact & Delivery Info */}
              <form onSubmit={handlePlaceOrder} className="space-y-4 pt-4 border-t border-zinc-800">
                <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Customer & Payment Details
                </h5>

                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                />

                <input
                  type="tel"
                  required
                  placeholder="Mobile Phone Number *"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                />

                {orderType === 'delivery' && (
                  <input
                    type="text"
                    required
                    placeholder="Delivery Address (Brooklyn NYC) *"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                )}

                {/* Tip Selector */}
                <div>
                  <label className="block text-xs font-semibold text-amber-300 mb-1">
                    Add Kitchen Staff Tip
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[15, 18, 20, 25].map((pct) => (
                      <button
                        type="button"
                        key={pct}
                        onClick={() => setTipPercent(pct)}
                        className={`py-1.5 rounded-lg text-xs font-bold border ${
                          tipPercent === pct
                            ? 'bg-amber-600 border-amber-400 text-zinc-950'
                            : 'bg-zinc-950 border-zinc-800 text-amber-200/70'
                        }`}
                      >
                        {pct}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Receipt Breakdown */}
                <div className="bg-zinc-950 p-4 rounded-2xl border border-amber-500/20 text-xs space-y-2 text-amber-200">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-amber-200/70">
                    <span>NYC Sales Tax (8.875%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between text-amber-200/70">
                      <span>Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-amber-200/70">
                    <span>Staff Tip ({tipPercent}%)</span>
                    <span>${tipAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-serif font-bold text-sm text-amber-400 pt-2 border-t border-zinc-800">
                    <span>Total Due</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  type="submit"
                  disabled={isCheckingOut}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-zinc-950 font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 transition-all"
                >
                  {isCheckingOut ? (
                    <span>Processing Order...</span>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4 text-zinc-950" />
                      <span>Place Order (${total.toFixed(2)})</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

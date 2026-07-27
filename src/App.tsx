import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { ReservationModal } from './components/ReservationModal';
import { CartDrawer } from './components/CartDrawer';
import { PatioEvents } from './components/PatioEvents';
import { StorySection } from './components/StorySection';
import { GiftCardModal } from './components/GiftCardModal';
import { HoursLocation } from './components/HoursLocation';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { CartItem, MenuItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('menu');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isGiftCardOpen, setIsGiftCardOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Cart operations
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((c) => c.menuItem.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, { menuItem: item, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.menuItem.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleClearCart = () => setCart([]);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleScrollToMenu = () => {
    setActiveSection('menu');
    const elem = document.getElementById('menu');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-amber-50 font-sans selection:bg-amber-500 selection:text-zinc-950">
      
      {/* Top Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenGiftCard={() => setIsGiftCardOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenReservation={() => setIsReservationOpen(true)}
          onOpenCart={() => setIsCartOpen(true)}
          onScrollToMenu={handleScrollToMenu}
        />

        {/* Menu Section */}
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItemIds={cart.map((c) => c.menuItem.id)}
        />

        {/* Garden Patio & Events Section */}
        <PatioEvents />

        {/* Chef & Brand Story Section */}
        <StorySection />

        {/* Reviews & Press Accolades */}
        <ReviewsSection />

        {/* Operating Hours, Subway & Location */}
        <HoursLocation onOpenReservation={() => setIsReservationOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Slide-over Drawers */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      <GiftCardModal
        isOpen={isGiftCardOpen}
        onClose={() => setIsGiftCardOpen(false)}
      />

    </div>
  );
}

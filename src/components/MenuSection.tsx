import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuCategory, MenuItem, DietaryTag } from '../types';
import { Search, Sparkles, Plus, Check, Filter, Utensils, Info } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: string[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, cartItemIds }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('dinner');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState<DietaryTag | 'ALL'>('ALL');
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const categories: { id: MenuCategory; label: string; desc: string }[] = [
    { id: 'dinner', label: 'Dinner', desc: 'Savor small plates, claypot specialties, and signature 24-hr bone broth soups.' },
    { id: 'brunch', label: 'Weekend Brunch', desc: 'Sat & Sun 11AM - 3:30PM • Duck waffles, pork belly hash, & condensed milk French toast.' },
    { id: 'drinks', label: 'Drinks & Cocktails', desc: 'Botanical spirits, lemongrass infusions, natural organic wines, & draft beers.' },
    { id: 'desserts', label: 'Desserts', desc: 'Artisanal sweet endings featuring pandan, coconut, and caramelized bananas.' },
    { id: 'happy_hour', label: 'Happy Hour', desc: 'Tue - Fri 5:00 - 6:30PM • $10 signature cocktails & $8 small bites.' },
  ];

  const dietaryFilters: { tag: DietaryTag | 'ALL'; label: string }[] = [
    { tag: 'ALL', label: 'All Items' },
    { tag: 'SPECIAL', label: '★ Chef Specials' },
    { tag: 'GF', label: 'Gluten-Free' },
    { tag: 'V', label: 'Vegetarian' },
    { tag: 'VG', label: 'Vegan' },
    { tag: 'SPICY', label: '🌶️ Spicy' },
  ];

  // Filter logic
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (item.category !== activeCategory) return false;

      // Dietary match
      if (selectedDietary !== 'ALL' && !item.dietary.includes(selectedDietary)) {
        return false;
      }

      // Search query match
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchViet = item.vietnameseName?.toLowerCase().includes(q) || false;
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchSub = item.subcategory.toLowerCase().includes(q);
        return matchName || matchViet || matchDesc || matchSub;
      }

      return true;
    });
  }, [activeCategory, selectedDietary, searchQuery]);

  // Group items by subcategory
  const subcategoryGroups = useMemo(() => {
    const groups: { [key: string]: MenuItem[] } = {};
    filteredItems.forEach((item) => {
      if (!groups[item.subcategory]) {
        groups[item.subcategory] = [];
      }
      groups[item.subcategory].push(item);
    });
    return groups;
  }, [filteredItems]);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedAnimationId(item.id);
    setTimeout(() => setAddedAnimationId(null), 1200);
  };

  return (
    <section id="menu" className="py-20 bg-zinc-950 text-amber-50 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-400 font-sans text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
            Culinary Craftsmanship
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100 mt-3 mb-4">
            Our Gastropub Menu
          </h2>
          <p className="text-amber-200/70 text-sm sm:text-base">
            Every dish is prepared fresh using Niman Ranch meats, local organic produce, and authentic aromatic Asian botanicals.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-4 no-scrollbar border-b border-amber-900/30 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSearchQuery('');
              }}
              className={`px-5 py-3 rounded-xl font-serif text-sm sm:text-base transition-all whitespace-nowrap flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-zinc-950 font-bold shadow-lg shadow-amber-950/80 scale-105'
                  : 'bg-zinc-900 text-amber-200/80 hover:bg-zinc-850 hover:text-amber-100 border border-amber-500/10'
              }`}
            >
              <span>{cat.label}</span>
              {cat.id === 'happy_hour' && (
                <span className="bg-amber-950 text-amber-300 text-[10px] font-sans px-1.5 py-0.5 rounded border border-amber-500/40 font-bold">
                  SPECIAL
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Category Description Banner */}
        <div className="bg-gradient-to-r from-zinc-900 via-amber-950/30 to-zinc-900 p-4 rounded-2xl border border-amber-500/20 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-amber-200/90 italic text-center sm:text-left">
            "{categories.find((c) => c.id === activeCategory)?.desc}"
          </p>

          {/* Search & Dietary Controls */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-amber-500/60" />
              <input
                type="text"
                placeholder="Search dishes or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 placeholder-amber-200/40 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>
        </div>

        {/* Dietary Quick Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <span className="text-xs text-amber-400 font-semibold flex items-center gap-1 shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {dietaryFilters.map((f) => (
            <button
              key={f.tag}
              onClick={() => setSelectedDietary(f.tag)}
              className={`px-3 py-1.5 rounded-lg text-xs transition-colors shrink-0 font-medium ${
                selectedDietary === f.tag
                  ? 'bg-amber-500 text-zinc-950 font-bold shadow-md'
                  : 'bg-zinc-900/80 text-amber-200/70 border border-amber-900/30 hover:border-amber-500/30 hover:text-amber-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid grouped by subcategory */}
        {Object.keys(subcategoryGroups).length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/50 rounded-2xl border border-amber-900/20">
            <Utensils className="w-12 h-12 text-amber-500/40 mx-auto mb-3" />
            <h3 className="text-lg font-serif font-semibold text-amber-200">No dishes match your filter</h3>
            <p className="text-xs text-amber-200/60 mt-1">Try clearing search terms or selected dietary tags.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDietary('ALL');
              }}
              className="mt-4 px-4 py-2 bg-amber-600 text-zinc-950 font-bold text-xs rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {(Object.entries(subcategoryGroups) as [string, MenuItem[]][]).map(([subcategory, items]) => (
              <div key={subcategory} className="space-y-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-300">
                    {subcategory}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {items.map((item) => {
                    const isAdded = addedAnimationId === item.id;
                    const inCart = cartItemIds.includes(item.id);

                    return (
                      <div
                        key={item.id}
                        className="group bg-zinc-900/80 hover:bg-zinc-900 rounded-2xl border border-amber-500/15 hover:border-amber-500/40 p-4 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-amber-950/50"
                      >
                        <div className="flex gap-4">
                          {/* Dish Image */}
                          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-amber-500/20">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                            {item.popular && (
                              <span className="absolute top-1 left-1 bg-amber-500 text-zinc-950 text-[10px] font-bold px-1.5 py-0.5 rounded shadow">
                                POPULAR
                              </span>
                            )}
                          </div>

                          {/* Details */}
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <h4 className="font-serif font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition-colors">
                                    {item.name}
                                  </h4>
                                  {item.vietnameseName && (
                                    <span className="text-xs text-emerald-400 font-sans italic block">
                                      {item.vietnameseName}
                                    </span>
                                  )}
                                </div>
                                <span className="font-serif font-extrabold text-amber-400 text-lg sm:text-xl shrink-0">
                                  ${item.price}
                                </span>
                              </div>

                              <p className="text-xs text-amber-200/70 font-sans line-clamp-2 mt-1.5 leading-relaxed">
                                {item.description}
                              </p>
                            </div>

                            {/* Dietary Badges */}
                            <div className="flex flex-wrap items-center gap-1.5 mt-2">
                              {item.dietary.map((d) => (
                                <span
                                  key={d}
                                  className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                                    d === 'SPECIAL'
                                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                      : d === 'SPICY'
                                      ? 'bg-red-950/60 text-red-300 border border-red-500/30'
                                      : 'bg-zinc-800 text-amber-200/80 border border-zinc-700'
                                  }`}
                                >
                                  {d === 'SPECIAL' ? '★ Chef Special' : d === 'SPICY' ? '🌶️ Spicy' : d}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Order Button */}
                        <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                          <span className="text-[11px] text-amber-200/50">
                            Available for Dine-in & Pickup
                          </span>

                          <button
                            onClick={() => handleAdd(item)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                              isAdded
                                ? 'bg-emerald-500 text-zinc-950 scale-105'
                                : inCart
                                ? 'bg-amber-950/80 text-amber-300 border border-amber-500/40 hover:bg-amber-900'
                                : 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-zinc-950 shadow-md hover:shadow-amber-500/20'
                            }`}
                          >
                            {isAdded ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Added!</span>
                              </>
                            ) : (
                              <>
                                <Plus className="w-3.5 h-3.5" />
                                <span>{inCart ? 'Add Another' : 'Add to Order'}</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

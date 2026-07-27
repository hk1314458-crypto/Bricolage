import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // DINNER - SMALL BITES & ROLLS
  {
    id: 'd1',
    name: 'Crispy Imperial Rolls',
    vietnameseName: 'Chả Giò',
    category: 'dinner',
    subcategory: 'Small Plates & Rolls',
    price: 16,
    description: 'Heritage Berkshire pork, wood ear mushrooms, glass noodles, served with fresh herbs, butter lettuce wraps, and chili lime nước chấm.',
    dietary: ['GF', 'SPECIAL'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'd2',
    name: 'Vegetarian Summer Rolls',
    vietnameseName: 'Gỏi Cuốn Chay',
    category: 'dinner',
    subcategory: 'Small Plates & Rolls',
    price: 14,
    description: 'Organic fried tofu, avocado, pickled daikon & carrots, cucumber, fresh mint, wrapped in delicate rice paper with roasted peanut dipping sauce.',
    dietary: ['V', 'VG', 'GF'],
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'd3',
    name: 'Pork Belly Bao Buns',
    vietnameseName: 'Bánh Bao Thịt Kho',
    category: 'dinner',
    subcategory: 'Small Plates & Rolls',
    price: 18,
    description: 'Slow-braised Niman Ranch pork belly, pickled mustard greens, toasted crushed peanuts, scallions, sweet hoisin glazes in fluffy steamed bao.',
    dietary: ['SPECIAL'],
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'd4',
    name: 'Fish Sauce Caramel Wings',
    vietnameseName: 'Cánh Gà Chiên Nước Mắm',
    category: 'dinner',
    subcategory: 'Small Plates & Rolls',
    price: 17,
    description: 'Crispy organic chicken wings tossed in rich garlicky fish sauce caramel, toasted sesame, cilantro, and red jalapeño.',
    dietary: ['SPICY'],
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'd5',
    name: 'Green Papaya Salad',
    vietnameseName: 'Gỏi Đu Đủ',
    category: 'dinner',
    subcategory: 'Salads & Starters',
    price: 16,
    description: 'Shredded green papaya, house-made beef jerky, Thai basil, chili lime dressing, crushed roasted peanuts, fried shallots.',
    dietary: ['GF', 'SPICY'],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
  },

  // DINNER - MAINS & CLAYPOTS
  {
    id: 'd6',
    name: 'Shaking Beef',
    vietnameseName: 'Bò Lúc Lắc',
    category: 'dinner',
    subcategory: 'Chef Mains',
    price: 34,
    description: 'Seared grass-fed Angus filet mignon cubes, caramelized red onion, watercress salad, heirloom cherry tomatoes, served with black pepper lime dipping sea salt.',
    dietary: ['GF', 'SPECIAL'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'd7',
    name: 'Caramelized Claypot Catfish',
    vietnameseName: 'Cá Kho Tộ',
    category: 'dinner',
    subcategory: 'Chef Mains',
    price: 28,
    description: 'Wild-caught catfish simmered in traditional claypot caramel sauce, cracked black pepper, Thai chili, scallions, served with jasmine rice.',
    dietary: ['GF', 'SPICY'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'd8',
    name: 'Turmeric Dill Fish',
    vietnameseName: 'Chả Cá Lả Vọng',
    category: 'dinner',
    subcategory: 'Chef Mains',
    price: 29,
    description: 'Pan-seared cod marinated in turmeric & galangal, tossed with abundant fresh dill, scallions, vermicelli rice noodles, roasted peanuts, and shrimp paste dip.',
    dietary: ['GF', 'SPECIAL'],
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'd9',
    name: 'Lemongrass Pork Chop',
    vietnameseName: 'Sườn Nướng Sả',
    category: 'dinner',
    subcategory: 'Chef Mains',
    price: 27,
    description: 'Grilled double-cut Niman Ranch pork chop marinated in lemongrass & shallots, scallion oil, broken rice, pickled daikon, and sunny-side egg.',
    dietary: ['GF'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'd10',
    name: 'Duck Leg Confit Phở',
    vietnameseName: 'Phở Vịt Quay',
    category: 'dinner',
    subcategory: 'Soups & Noodles',
    price: 26,
    description: '24-hour aromatic bone broth, five-spice duck leg confit, flat rice noodles, star anise, ginger, fresh Thai basil, saw-leaf coriander, and charred onion.',
    dietary: ['GF', 'SPECIAL'],
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'd11',
    name: 'Vegan Mushroom Phở',
    vietnameseName: 'Phở Nấm Chay',
    category: 'dinner',
    subcategory: 'Soups & Noodles',
    price: 22,
    description: 'Slow-simmered shiitake & charred vegetable broth, king oyster mushrooms, fried tofu, bok choy, rice noodles, fresh herbs.',
    dietary: ['V', 'VG', 'GF'],
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80'
  },

  // BRUNCH
  {
    id: 'b1',
    name: 'Duck Confit Waffle',
    vietnameseName: 'Bánh Kẹp Vịt Quay',
    category: 'brunch',
    subcategory: 'Brunch Specialties',
    price: 24,
    description: 'Crispy pandan coconut waffle topped with five-spice duck confit, sunny-side egg, spicy bird’s eye maple syrup, and pickled shallots.',
    dietary: ['SPECIAL'],
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'b2',
    name: 'Pork Belly & Rice Hash',
    vietnameseName: 'Cơm Cấm Thịt Heo',
    category: 'brunch',
    subcategory: 'Brunch Specialties',
    price: 21,
    description: 'Crispy rice hash cake with seared Niman Ranch pork belly, pickled mustard greens, two poached eggs, and Sriracha hollandaise sauce.',
    dietary: ['GF', 'SPICY'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b3',
    name: 'Bánh Mì French Toast',
    vietnameseName: 'Bánh Mì Chiên Bơ',
    category: 'brunch',
    subcategory: 'Brunch Sweets',
    price: 18,
    description: 'Thick brioche soaked in condensed milk custard, pan-fried in brown butter, topped with condensed milk drizzle, toasted coconut flakes, and fresh mango.',
    dietary: ['V'],
    image: 'https://images.unsplash.com/photo-1484723091479-001595934f0d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b4',
    name: 'Bánh Xèo Omelette',
    vietnameseName: 'Bánh Xèo Trứng',
    category: 'brunch',
    subcategory: 'Brunch Specialties',
    price: 20,
    description: 'Crispy coconut turmeric crêpe filled with wild rock shrimp, pork belly, bean sprouts, served with mustard leaf lettuce and chili dip.',
    dietary: ['GF'],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
  },

  // DRINKS
  {
    id: 'dr1',
    name: 'Saigon Sling',
    category: 'drinks',
    subcategory: 'Craft Cocktails',
    price: 16,
    description: 'Mezcal, lemongrass liqueur, fresh dragonfruit juice, lime, Thai basil, topped with ginger beer.',
    dietary: ['SPECIAL'],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'dr2',
    name: 'Mekong Mule',
    category: 'drinks',
    subcategory: 'Craft Cocktails',
    price: 15,
    description: 'Vodka infused with kaffir lime leaves, muddled fresh cucumber, chili tincture, lime, house-made ginger elixir.',
    dietary: ['SPICY'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr3',
    name: 'Lychee Sparkler (Mocktail)',
    category: 'drinks',
    subcategory: 'Zero-Proof & Teas',
    price: 10,
    description: 'Fresh lychee puree, mint leaves, fresh lime juice, sparkling soda water.',
    dietary: ['V', 'VG', 'GF'],
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr4',
    name: 'Traditional Cà Phê Sữa Đá',
    category: 'drinks',
    subcategory: 'Zero-Proof & Teas',
    price: 7,
    description: 'Dark roasted Vietnamese Robusta drip coffee over sweetened condensed milk and ice.',
    dietary: ['V', 'GF'],
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'dr5',
    name: 'Natural Biodynamic Orange Wine',
    category: 'drinks',
    subcategory: 'Wine & Draft Beer',
    price: 16,
    description: 'Domaine de la Pinte, Jura France. Vibrant skin-contact notes of stone fruit, dried orange peel, crisp acidity.',
    dietary: ['VG', 'GF'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
  },

  // DESSERTS
  {
    id: 'ds1',
    name: 'Pandan Coconut Panna Cotta',
    vietnameseName: 'Rau Câu Lá Dứa',
    category: 'desserts',
    subcategory: 'House Desserts',
    price: 12,
    description: 'Silky pandan leaf panna cotta, coconut cream drizzle, passionfruit coulis, toasted sesame brittle.',
    dietary: ['V', 'GF', 'SPECIAL'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'ds2',
    name: 'Warm Banana Fritters',
    vietnameseName: 'Bánh Chuối Chiên',
    category: 'desserts',
    subcategory: 'House Desserts',
    price: 11,
    description: 'Crispy sesame-battered apple bananas, house-made salted caramel ice cream, roasted peanuts.',
    dietary: ['V'],
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80'
  },

  // HAPPY HOUR
  {
    id: 'hh1',
    name: 'Happy Hour Imperial Roll Pair',
    category: 'happy_hour',
    subcategory: 'Bites & Drinks (Tue-Fri 5-6:30PM)',
    price: 9,
    description: 'Two crispy pork imperial rolls served with mint and chili nước chấm.',
    dietary: ['GF'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hh2',
    name: 'Draft Brooklyn Lager & Bao Combo',
    category: 'happy_hour',
    subcategory: 'Bites & Drinks (Tue-Fri 5-6:30PM)',
    price: 14,
    description: '1 pint of local Brooklyn craft draft beer + 1 slow-braised pork belly bao bun.',
    dietary: ['SPECIAL'],
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80'
  }
];

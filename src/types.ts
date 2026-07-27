export type MenuCategory = 'dinner' | 'brunch' | 'drinks' | 'desserts' | 'happy_hour';

export type DietaryTag = 'V' | 'VG' | 'GF' | 'SPECIAL' | 'SPICY';

export interface MenuItem {
  id: string;
  name: string;
  vietnameseName?: string;
  category: MenuCategory;
  subcategory: string;
  price: number;
  description: string;
  dietary: DietaryTag[];
  image: string;
  popular?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface ReservationDetails {
  date: string;
  time: string;
  guests: number;
  seatingArea: 'main' | 'patio' | 'bar';
  occasion?: string;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface EventInquiry {
  name: string;
  email: string;
  phone: string;
  eventType: 'birthday' | 'corporate' | 'wedding_rehearsal' | 'cocktail_party' | 'other';
  guestCount: number;
  preferredDate: string;
  preferredTime: string;
  cateringOption: 'plated' | 'family_style' | 'cocktail_bites';
  notes: string;
}

export interface Review {
  id: string;
  author: string;
  role?: string;
  rating: number;
  source: 'Press' | 'Resy' | 'Google' | 'Yelp';
  comment: string;
  date: string;
  featured?: boolean;
}

export interface GiftCardOrder {
  amount: number;
  senderName: string;
  recipientName: string;
  recipientEmail: string;
  message: string;
  deliveryDate: string;
}

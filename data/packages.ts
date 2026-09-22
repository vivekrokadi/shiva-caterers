export type MenuCategory = {
  name: string;
  /** e.g. "Choose any 2" — optional, fill in once the client confirms selection limits */
  selectionText?: string;
  items: string[];
};

export type PriceTier = {
  guestRange: string;
  /** null = not yet confirmed by the client — shown as "TBD" until filled in */
  price: number | null;
};

export type CateringPackage = {
  slug: "classic" | "signature" | "royal";
  eyebrow: string;
  name: string;
  tagline: string;
  /**
   * Use `price` for a single flat rate, OR `priceTiers` for guest-count-based
   * pricing (e.g. Classic). If `priceTiers` is set, the card shows
   * "Starting from ₹<lowest confirmed price>" and the full tier table appears
   * in the menu modal. `price: null` with no tiers shows "Enquire for a
   * tailored quote".
   */
  price: number | null;
  priceUnit?: string;
  /** true = card/modal show "Starting from ₹<price>" instead of a flat price */
  priceIsStartingFrom?: boolean;
  priceTiers?: PriceTier[];
  guestRange: string;
  guestNote?: string;
  mostChosen?: boolean;
  highlights: string[];
  footnote: string;
  categories: MenuCategory[];
};

// Shared menu items across all three packages (per client's latest list).
// Signature and Royal currently mirror Classic's items — differentiate them
// with `selectionText` (e.g. "Choose any 3") once the client confirms limits.
const sharedCategories: MenuCategory[] = [
  {
    name: "Welcome Drinks",
    items: ["Buttermilk", "Fresh Lime Juice", "Jaljeera", "Lassi", "Mango", "Orange"],
  },
  {
    name: "Starters",
    items: ["Chilli Paneer", "Masala Papada", "Paneer Tikka", "Veg Manchurian", "Gobi 65"],
  },
  {
    name: "Sweets",
    items: [
      "Haluggi",
      "Hesarabele Payasa",
      "Amrakhanda",
      "Badam Puri",
      "Basundi",
      "Bundi",
      "Bundi Ladoo",
      "Carrot Halwa",
      "Fruit Custard",
      "Gulab Jamun",
      "Ladaki Ladoo",
      "Ladaki Vade",
      "Moti Chur Vade",
      "Shavige Payasa",
      "Akki Payasa",
      "Rasgulla",
      "Sanza",
      "Shira",
      "Shrikhanda",
    ],
  },
  {
    name: "Main Course · Vegetable Curries",
    items: [
      "Akka Masur",
      "Palak Paneer",
      "Paneer Butter Masala",
      "Shahi Paneer",
      "Kaju Masala",
      "Kaju Paneer",
      "Aloo Matar",
      "Aloo Paneer Matar",
      "Chole Masala",
      "Bhindi Fry",
      "Dal Fry",
      "Hesar Kala",
      "Malaki Kala",
      "Mix Veg",
      "Soya Masala",
      "Badanikayi",
      "Badanikayi Enagayi",
      "Baingan Bharta",
      "Batati Bhaji",
      "Veg Kolhapuri",
      "Veg Kurma",
    ],
  },
  {
    name: "Main Course · Breads",
    items: [
      "Chapati",
      "Methi Chapati",
      "Palak Chapati",
      "Puri",
      "Masala Puri",
      "Masala Roti",
      "Jolada Rotti",
      "Ragi Rotti",
      "Sajji Rotti",
      "Gonjal Rotti",
    ],
  },
  {
    name: "Main Course · Rice & Pulao",
    items: [
      "Jeera Rice",
      "Kuska Rice",
      "Masala Rice",
      "Ghee Rice",
      "Paneer Pulao",
      "Steamed Rice",
      "Veg Biryani",
      "Veg Pulao",
      "Curd Rice",
      "Dal Khichadi",
      "Puliyogare",
    ],
  },
  {
    name: "Breakfast",
    items: ["Idli", "Vada", "Uppit", "Shira", "Poha", "Susla", "Dosa"],
  },
  {
    name: "Soups",
    items: ["Lemon Coriander Soup", "Manchow Soup", "Tomato Soup"],
  },
];

export const packages: CateringPackage[] = [
  {
    slug: "classic",
    eyebrow: "The Traditional Table",
    name: "Classic",
    tagline: "Traditional favourites for memorable celebrations.",
    price: 140,
    priceUnit: "/ plate",
    priceIsStartingFrom: true,
    guestRange: "50–500 People",
    highlights: ["Sweets", "Starters", "Main course", "Rice & breads"],
    footnote:
      "Final price depends on guest count. Contact us for exact pricing based on your event size.",
    categories: sharedCategories,
  },
  {
    slug: "signature",
    eyebrow: "The Balanced Celebration",
    name: "Signature",
    tagline: "More variety. More choice. A richer celebration.",
    price: null,
    guestRange: "Ideal for Celebrations",
    mostChosen: true,
    highlights: [
      "Wider menu selection",
      "Multiple course options",
      "Optional add-ons",
      "Service planning",
    ],
    footnote: "Pricing and final selections shared after understanding your event.",
    categories: sharedCategories,
  },
  {
    slug: "royal",
    eyebrow: "The Elaborate Feast",
    name: "Royal",
    tagline: "A grand vegetarian feast for unforgettable occasions.",
    price: null,
    guestRange: "For Grand Occasions",
    highlights: [
      "Most expansive menu",
      "Celebration-ready variety",
      "Premium presentation",
      "Dedicated planning",
    ],
    footnote: "Pricing and final selections shared after understanding your event.",
    categories: sharedCategories,
  },
];
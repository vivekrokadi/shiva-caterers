export type GalleryCategory =
  | "All"
  | "Weddings"
  | "Engagements"
  | "Family Events"
  | "Public Events"
  | "Food";

export type GalleryItem = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
  caption?: string;
  featured?: boolean;
};

/**
 * Replace each `src` with a real Shiva Caterers photo at the same path.
 * Filenames are suggestions only — swap in actual event photography.
 */
export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/catering-athani.jpeg",
    alt: "A full traditional vegetarian feast served on a banana leaf",
    category: "Public Events",
    caption: "",
    featured: true,
  },
  {
    src: "/images/gallery/public-event.jpeg",
    alt: "A steel thali plated with rice, sabzi, dal and roti at an event",
    category: "Public Events",
  },
  {
    src: "/images/gallery/public-gathering-service.jpeg",
    alt: "Guests being served a vegetarian wedding meal on banana leaves",
    category: "Public Events",
  },
  {
    src: "/images/gallery/shiva-caterers.jpeg",
    alt: "A plate of traditional Indian sweets arranged for a celebration",
    category: "Public Events",
  },
  {
    src: "/images/gallery/thali.avif",
    alt: "A close-up of a rich vegetarian paneer curry in a serving bowl",
    category: "Food",
  },
  {
    src: "/images/gallery/catering1.jpeg",
    alt: "A festive food spread laid out for an engagement ceremony",
    category: "Food",
  },
  {
    src: "/images/gallery/shivacaterers.jpeg",
    alt: "Large-scale vegetarian catering service at a public event",
    category: "Public Events",
  },
];

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Weddings",
  "Engagements",
  "Family Events",
  "Public Events",
  "Food",
];
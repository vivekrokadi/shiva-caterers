export type Service = {
  slug: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "wedding-catering",
    title: "Wedding Catering",
    description: "Traditional vegetarian feasts for weddings and receptions.",
  },
  {
    slug: "engagement-ceremonies",
    title: "Engagement Ceremonies",
    description: "Elegant catering for engagement and ring ceremonies.",
  },
  {
    slug: "birthday-private-parties",
    title: "Birthday & Private Parties",
    description:
      "Personalized menus for birthdays, anniversaries and family gatherings.",
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    description: "Professional catering for meetings, conferences and team events.",
  },
  {
    slug: "festival-catering",
    title: "Festival Catering",
    description: "Traditional food for festivals and community celebrations.",
  },
  {
    slug: "religious-functions",
    title: "Religious Functions",
    description: "Pure vegetarian meals prepared with care for pujas and religious occasions.",
  },
];
export type Faq = {
  question: string;
  answer: string;
  /** true = placeholder copy, confirm the real answer with Shiva Caterers before launch */
  needsConfirmation?: boolean;
};

export const faqs: Faq[] = [
  {
    question: "Is Shiva Caterers 100% vegetarian?",
    answer:
      "Yes. Shiva Caterers is a pure vegetarian caterer — every dish, from starters to sweets, is prepared without meat, fish or eggs.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We are based in Athani and cater events across Athani, Belagavi (Belgaum) and nearby areas.",
  },
  {
    question: "What catering packages do you offer?",
    answer:
      "We offer three packages — Classic, Signature and Royal — covering everything from traditional favourites to elaborate, multi-course feasts. You can view the menu for each on our Packages page.",
  },
  {
    question: "Can I get a custom menu for my event?",
    answer:
      "Yes. Every celebration is different, so we plan final menu choices around your guest count, event type and food preferences rather than a fixed list.",
  },
  {
    question: "How do I book Shiva Caterers for my event?",
    answer:
      "Simply call or WhatsApp us with your event date, guest count and location, and we'll help you choose a package or plan a custom menu.",
  },
  {
    question: "Is there a minimum guest count for a booking?",
    answer:
      "Our Classic package is structured for 50–100 guests. For smaller or larger gatherings, get in touch and we'll let you know what's possible.",
  },
//   {
//     question: "How far in advance should I book?",
//     answer:
//       "[Confirm with Shiva Caterers] — add the recommended advance-booking window here (e.g. \"at least 2–3 weeks for weddings\").",
//     needsConfirmation: true,
//   },
  {
    question: "Do you cater religious functions, pujas and public events?",
    answer:
      "Yes. Alongside weddings and private celebrations, we regularly cater religious functions, pujas, and large public gatherings such as inaugurations and community events.",
  },
];
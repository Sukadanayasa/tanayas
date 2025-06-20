import type { Destination, Testimonial, FAQItem, TravelTip, Service } from "../types";

export const destinations: Destination[] = [
  {
    id: "nusa-penida",
    title: "Nusa Penida",
    description:
      "Discover dramatic cliffs, hidden beaches, and the iconic Kelingking Beach. Nusa Penida is Bali’s must-see island escape for adventure and breathtaking views.",
    image:
      "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Aerial view of Nusa Penida coastline with turquoise waters and cliffs.",
  },
  {
    id: "gili-islands",
    title: "Gili Islands",
    description:
      "Experience paradise on the Gilis—three car-free islands with white sand beaches, crystal-clear water, and world-class snorkeling with sea turtles.",
    image:
      "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Gili Islands tropical beach with clear blue water and palm trees.",
  },
  {
    id: "lombok",
    title: "Lombok",
    description:
      "Unwind on untouched beaches, explore the majestic Mount Rinjani, and discover the unique culture of Lombok’s traditional Sasak villages.",
    image:
      "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Lombok coastline with mountains and pristine beaches.",
  },
  {
    id: "nusa-lembongan",
    title: "Nusa Lembongan",
    description:
      "A tranquil island paradise known for its stunning beaches, vibrant marine life, and relaxed atmosphere, perfect for snorkeling and diving.",
    image:
      "https://images.pexels.com/photos/1004600/pexels-photo-1004600.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder image
    alt: "Nusa Lembongan beach with clear water and boats.",
  },
];

export const services: Service[] = [
  {
    id: "activities",
    title: "Island Activities",
    description: "Explore thrilling activities like snorkeling, diving, island tours, and more at your chosen destination.",
    image: "https://images.pexels.com/photos/1004600/pexels-photo-1004600.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder
    alt: "People snorkeling in clear water",
    icon: "Activity", // Placeholder for Lucide icon name
  },
  {
    id: "private-charter",
    title: "Private Charter",
    description: "Experience ultimate flexibility with a private charter, tailored to your group's schedule and preferences for island transfers or tours.",
    image: "https://images.pexels.com/photos/1004600/pexels-photo-1004600.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder
    alt: "Private fastboat on the ocean",
    icon: "Ship", // Placeholder for Lucide icon name
  },
  {
    id: "customized-route",
    title: "Customized Island Routes",
    description: "Design your perfect island hopping itinerary with our expert guidance for a truly unique adventure.",
    image: "https://images.pexels.com/photos/1004600/pexels-photo-1004600.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder
    alt: "Map with custom route",
    icon: "Map", // Placeholder for Lucide icon name
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    text: "BaliFastboat made our island adventure effortless! We got the best routes, real-time schedules, and even local tips that made our Nusa Penida trip unforgettable.",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    id: "2",
    name: "James R.",
    text: "The best decision for our Bali trip! Fast, professional, and super helpful. We saved hours of research and got the best deals—highly recommend!",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    id: "3",
    name: "Lisa K.",
    text: "From Gili T to Lombok, everything was smooth. Real-time updates, backup options, and insider knowledge you won’t find anywhere else.",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "How fast can I get boat schedules and prices?",
    answer:
      "In just minutes! Message us your travel dates and destinations, and we’ll send you real-time schedules, prices, and availability for all major routes.",
  },
  {
    id: "2",
    question: "Can you help me book, or just provide info?",
    answer:
      "We do both! Get all the details you need, plus direct connections to trusted operators for easy booking and the best deals.",
  },
  {
    id: "3",
    question: "Do you arrange hotel transfers and pickups?",
    answer:
      "Absolutely! We’ll tell you which operators include hotel transfers, pickup times, and meeting points—so your trip is hassle-free.",
  },
  {
    id: "4",
    question: "What if the weather changes my plans?",
    answer:
      "We monitor real-time weather and offer backup options. Our local team helps you adjust plans quickly and safely.",
  },
];

export const travelTips: TravelTip[] = [
  {
    id: "1",
    title: "Book Smart",
    description:
      "Booking morning departures often leads to calmer seas and smoother rides. Plan your journey for the best experience.",
    icon: "Clock",
    color: "blue",
  },
  {
    id: "2",
    title: "Pack Right",
    description:
      "Bring a waterproof bag, sunscreen, and light layers. Essential items for a comfortable and prepared island hopping adventure.",
    icon: "PackageCheck",
    color: "green",
  },
  {
    id: "3",
    title: "Stay Comfortable",
    description:
      "Consider motion sickness tablets if needed and stay hydrated. Choosing a seat near the back or center can help with stability.",
    icon: "Heart",
    color: "red",
  },
  {
    id: "4",
    title: "Plan Ahead",
    description:
      "Fastboat tickets sell out quickly during peak season (July-August). Plan and book your trip well in advance to secure your spot.",
    icon: "CalendarPlus",
    color: "purple",
  },
];
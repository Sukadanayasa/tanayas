import type { Destination, Testimonial, FAQItem, TravelTip } from "../types";

export const services: Destination[] = [
  {
    id: "nusa-penida",
    title: "Nusa Penida Fast Boat",
    description:
      "Discover dramatic cliffs, hidden beaches, and the iconic Kelingking Beach. Nusa Penida is Bali’s must-see island escape for adventure and breathtaking views.",
    image:
      "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Aerial view of Nusa Penida coastline with turquoise waters and cliffs.",
  },
  {
    id: "gili-islands",
    title: "Gili Islands Fast Boat",
    description:
      "Experience paradise on the Gilis—three car-free islands with white sand beaches, crystal-clear water, and world-class snorkeling with sea turtles.",
    image:
      "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Gili Islands tropical beach with clear blue water and palm trees.",
  },
  {
    id: "lombok",
    title: "Lombok Fast Boat",
    description:
      "Unwind on untouched beaches, explore the majestic Mount Rinjani, and discover the unique culture of Lombok’s traditional Sasak villages.",
    image:
      "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Lombok coastline with mountains and pristine beaches.",
  },
  {
    id: "lembongan",
    title: "Nusa Lembongan Fast Boat",
    description:
      "Just a short ride from Bali, Nusa Lembongan offers stunning beaches, vibrant marine life, and a laid-back island vibe perfect for a quick getaway.",
    image:
      "https://images.pexels.com/photos/1004600/pexels-photo-1004600.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Nusa Lembongan beach with boats and clear water.",
  },
  {
    id: "activities",
    title: "Island Activities & Tours",
    description:
      "Enhance your island experience with curated activities like snorkeling, diving, island tours, and cultural excursions. We connect you with the best local guides.",
    image:
      "https://images.pexels.com/photos/38238/maldives-ocean-island-beach-38238.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "People snorkeling in clear blue water.",
  },
  {
    id: "private-charter",
    title: "Private Boat Charter",
    description:
      "Enjoy the ultimate flexibility with a private fast boat charter. Customize your itinerary, explore secluded spots, and travel at your own pace.",
    image:
      "https://images.pexels.com/photos/1575930/pexels-photo-1575930.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Luxury private boat on calm waters.",
  },
  {
    id: "customized-route",
    title: "Customized Route Planning",
    description:
      "Have a unique island-hopping dream? We'll help you plan and book a customized fast boat route to any combination of islands, ensuring a seamless journey.",
    image:
      "https://images.pexels.com/photos/163864/thailand-krabi-longtail-boat-sea-163864.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Longtail boat on a beach with a map overlay, symbolizing custom routes.",
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
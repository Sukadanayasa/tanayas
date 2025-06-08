export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Define specific literal types for icons and colors used in TravelTip
export type TravelTipIcon = "Clock" | "PackageCheck" | "Heart" | "CalendarPlus";
export type TravelTipColor = "blue" | "green" | "red" | "purple";

export interface TravelTip {
  id: string;
  title: string;
  description: string;
  icon: TravelTipIcon; // Use the specific icon type
  color: TravelTipColor; // Use the specific color type
}
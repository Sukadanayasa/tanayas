export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  // New detailed content fields
  gallery?: string[];
  attractions?: {
    id: string;
    name: string;
    description: string;
    image: string;
  }[];
  travelTips?: string[];
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

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: string; // Using string for now, can be Lucide icon name later
}

export interface Route {
  id:string;
  from: string;
  to: string;
  image: string;
  alt: string;
  duration: string;
  price: string;
}
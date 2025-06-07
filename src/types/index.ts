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

export interface TravelTip {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}
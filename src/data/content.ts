import type { Destination, Testimonial, FAQItem, TravelTip, Service, Route } from "../types";

export const destinations: Destination[] = [
  {
    id: "nusa-penida",
    title: "Nusa Penida",
    description:
      "Discover dramatic cliffs, hidden beaches, and the iconic Kelingking Beach. Nusa Penida is Bali’s must-see island escape for adventure and breathtaking views.",
    image:
      "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Aerial view of Nusa Penida coastline with turquoise waters and cliffs.",
    attractions: [
      {
        id: "kelingking-beach",
        name: "Kelingking Beach",
        description: "Famous for its T-Rex shaped cliff, this spot offers jaw-dropping views and a challenging trek down to a pristine, secluded beach.",
        image: "https://images.pexels.com/photos/3776207/pexels-photo-3776207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: "angels-billabong",
        name: "Angel's Billabong",
        description: "A stunning natural infinity pool framed by rock cliffs. At low tide, you can swim in its crystal-clear waters.",
        image: "https://images.pexels.com/photos/1320694/pexels-photo-1320694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: "broken-beach",
        name: "Broken Beach (Pasih Uug)",
        description: "A spectacular circular cove with an archway that lets the ocean flow in. It's a perfect photo spot and a marvel of nature.",
        image: "https://images.pexels.com/photos/2404444/pexels-photo-2404444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ],
    gallery: [
      "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    travelTips: [
      "Rent a scooter for flexibility, but be cautious as roads can be challenging. Hiring a private driver is a safer, more comfortable option.",
      "Bring cash, as ATMs are scarce and not always reliable.",
      "Start your day early to avoid the crowds at popular spots like Kelingking Beach.",
      "Wear sturdy shoes, not flip-flops, especially if you plan to hike down to the beaches."
    ]
  },
  {
    id: "gili-islands",
    title: "Gili Islands",
    description:
      "Experience paradise on the Gilis—three car-free islands with white sand beaches, crystal-clear water, and world-class snorkeling with sea turtles.",
    image:
      "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Gili Islands tropical beach with clear blue water and palm trees.",
    attractions: [
      {
        id: "gili-trawangan",
        name: "Gili Trawangan",
        description: "The largest and most vibrant of the three Gilis, famous for its lively nightlife, dive schools, and iconic ocean swings.",
        image: "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: "turtle-point",
        name: "Snorkel with Turtles",
        description: "Swim alongside majestic sea turtles in the clear waters between Gili Meno and Gili Trawangan. A truly magical experience.",
        image: "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: "gili-meno",
        name: "Gili Meno",
        description: "The most tranquil of the islands, Gili Meno is perfect for a romantic getaway with its secluded beaches and the famous underwater statues.",
        image: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ],
    gallery: [
      "https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1031588/pexels-photo-1031588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    travelTips: [
      "There are no motorized vehicles. Rent a bicycle to explore the islands or use a 'cidomo' (horse-drawn cart).",
      "Bring enough cash, especially for smaller islands like Gili Meno and Gili Air, as ATMs can be unreliable.",
      "Book your fast boat in advance, particularly during high season, to secure your spot.",
      "Respect the local culture by dressing modestly when away from the beach areas."
    ]
  },
  {
    id: "lombok",
    title: "Lombok",
    description:
      "Unwind on untouched beaches, explore the majestic Mount Rinjani, and discover the unique culture of Lombok’s traditional Sasak villages.",
    image:
      "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Lombok coastline with mountains and pristine beaches.",
    attractions: [
      {
        id: "mount-rinjani",
        name: "Mount Rinjani",
        description: "Challenge yourself with a trek to the summit of Indonesia's second-highest volcano for breathtaking crater lake views.",
        image: "https://images.pexels.com/photos/2397653/pexels-photo-2397653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: "kuta-lombok",
        name: "Kuta Lombok Beaches",
        description: "Explore stunning beaches like Tanjung Aan, famous for its unique 'pepper sand', and enjoy world-class surfing spots.",
        image: "https://images.pexels.com/photos/2405628/pexels-photo-2405628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: "sasak-village",
        name: "Sasak Traditional Villages",
        description: "Visit traditional Sasak villages like Sade and Ende to learn about the indigenous culture, architecture, and weaving traditions of Lombok.",
        image: "https://images.pexels.com/photos/10258999/pexels-photo-10258999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ],
    gallery: [
      "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2674052/pexels-photo-2674052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    travelTips: [
      "Lombok is more conservative than Bali. Dress modestly, especially when visiting villages and religious sites.",
      "Renting a scooter is the best way to explore the island's vast and beautiful landscapes.",
      "Don't miss out on local Sasak cuisine, such as 'Ayam Taliwang' (spicy grilled chicken).",
      "Be prepared for a more rugged and adventurous travel experience compared to Bali."
    ]
  },
  {
    id: "nusa-lembongan",
    title: "Nusa Lembongan",
    description:
      "A tranquil island paradise known for its stunning beaches, vibrant marine life, and relaxed atmosphere, perfect for snorkeling and diving.",
    image:
      "https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Nusa Lembongan beach with clear water and boats.",
    attractions: [
      {
        id: "devils-tear",
        name: "Devil's Tear",
        description: "A dramatic rocky outcrop where powerful waves crash against the cliffs, creating spectacular plumes of water. A must-see at sunset.",
        image: "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: "yellow-bridge",
        name: "The Yellow Bridge",
        description: "The iconic 'Bridge of Love' connects Nusa Lembongan to its smaller sister island, Nusa Ceningan. Perfect for a photo op.",
        image: "https://images.pexels.com/photos/4179490/pexels-photo-4179490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: "mangrove-forest",
        name: "Mangrove Forest",
        description: "Explore the serene and lush mangrove forest by traditional boat or stand-up paddleboard for a peaceful nature experience.",
        image: "https://images.pexels.com/photos/2418486/pexels-photo-2418486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ],
    gallery: [
      "https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1004600/pexels-photo-1004600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    travelTips: [
      "Nusa Lembongan is much more relaxed than Nusa Penida, making it ideal for unwinding.",
      "It's a great spot for surfing, with breaks suitable for all levels. Diving with Manta Rays is also a popular activity.",
      "Easily explore Nusa Ceningan by crossing the Yellow Bridge on foot or by scooter.",
      "Observe the local seaweed farming, which is a major part of the island's economy."
    ]
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
  {
    id: "party-boat",
    title: "Party Boat Experience",
    description: "Organize unforgettable party boat trips for your clients, complete with music, drinks, and stunning sunset views.",
    image: "https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Using Hero image as placeholder
    alt: "People enjoying a party on a boat at sunset",
    icon: "PartyPopper", 
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

export const popularRoutes: Route[] = [
  {
    id: 'bali-penida',
    from: 'Bali (Sanur)',
    to: 'Nusa Penida',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Kelingking Beach in Nusa Penida',
    duration: 'Approx. 45 mins',
    price: 'From $15'
  },
  {
    id: 'bali-gili',
    from: 'Bali (Padang Bai)',
    to: 'Gili Trawangan',
    image: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Beach swing on Gili Trawangan',
    duration: 'Approx. 1.5 hours',
    price: 'From $25'
  },
  {
    id: 'bali-lombok',
    from: 'Bali (Padang Bai)',
    to: 'Lombok',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Coastline of Lombok',
    duration: 'Approx. 2 hours',
    price: 'From $30'
  },
  {
    id: 'bali-lembongan',
    from: 'Bali (Sanur)',
    to: 'Nusa Lembongan',
    image: 'https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Boats docked at Nusa Lembongan',
    duration: 'Approx. 30 mins',
    price: 'From $12'
  }
];
import { getDestination } from "./destinations";

export interface TourPackage {
  slug: string;
  name: string;
  duration: string;
  days: number;
  price: number;
  cover: string; // destination slug for image
  destinations: string[];
  highlights: string[];
  itinerary: { day: string; title: string; detail: string }[];
  inclusions: string[];
}

export const PACKAGES: TourPackage[] = [
  { slug: "ooty-coonoor", name: "Ooty & Coonoor Escape", duration: "3 Days / 2 Nights", days: 3, price: 12500, cover: "ooty", destinations: ["ooty", "coonoor", "pykara"],
    highlights: ["Nilgiri toy train ride", "Tea estate & factory visit", "Ooty Lake boating", "Dolphin's Nose viewpoint"],
    itinerary: [
      { day: "Day 1", title: "Arrive in Ooty", detail: "Pickup from Coimbatore, drive up the ghats. Evening at Ooty Lake and the Botanical Garden." },
      { day: "Day 2", title: "Ooty sightseeing", detail: "Doddabetta Peak, Tea Museum, Pine Forest and Pykara Falls & Lake." },
      { day: "Day 3", title: "Coonoor by toy train", detail: "Toy train to Coonoor, Sim's Park and Dolphin's Nose, then departure." },
    ], inclusions: ["2 nights hotel stay", "Daily breakfast", "Private cab", "Toy train tickets"] },
  { slug: "kodaikanal", name: "Kodaikanal Mist Trail", duration: "3 Days / 2 Nights", days: 3, price: 11000, cover: "kodaikanal", destinations: ["kodaikanal"],
    highlights: ["Kodai Lake cycling", "Pillar Rocks & Guna Caves", "Pine forest walk", "Berijam Lake"],
    itinerary: [
      { day: "Day 1", title: "Madurai to Kodaikanal", detail: "Scenic drive via Silver Cascade Falls; evening by the lake." },
      { day: "Day 2", title: "Forest & viewpoints", detail: "Coaker's Walk, Pine Forest, Pillar Rocks, Guna Caves and Berijam Lake." },
      { day: "Day 3", title: "Leisure & departure", detail: "Chocolate shopping and Bryant Park before the drive back." },
    ], inclusions: ["2 nights resort stay", "Daily breakfast", "Private cab", "Forest permits"] },
  { slug: "madurai-rameswaram", name: "Madurai & Rameswaram Pilgrimage", duration: "4 Days / 3 Nights", days: 4, price: 16500, cover: "meenakshi-temple", destinations: ["meenakshi-temple", "rameswaram", "ramanathaswamy", "dhanushkodi"],
    highlights: ["Meenakshi Temple night ceremony", "Pamban Bridge crossing", "Dhanushkodi ghost town", "22 sacred theerthams"],
    itinerary: [
      { day: "Day 1", title: "Madurai", detail: "Meenakshi Temple, Thirumalai Nayakkar Mahal and the evening ceremony." },
      { day: "Day 2", title: "To Rameswaram", detail: "Drive across Pamban Bridge; Ramanathaswamy Temple darshan." },
      { day: "Day 3", title: "Dhanushkodi", detail: "Arichal Munai, ruined town and the Kalam Memorial." },
      { day: "Day 4", title: "Return", detail: "Agnitheertham sunrise and return to Madurai." },
    ], inclusions: ["3 nights hotel stay", "Breakfast & dinner", "Private cab", "Local guide in Madurai"] },
  { slug: "kanyakumari", name: "Kanyakumari Sunrise Getaway", duration: "2 Days / 1 Night", days: 2, price: 7500, cover: "kanyakumari", destinations: ["kanyakumari"],
    highlights: ["Triple-sea sunrise", "Vivekananda Rock ferry", "Thiruvalluvar Statue", "Padmanabhapuram Palace"],
    itinerary: [
      { day: "Day 1", title: "Arrival & sunset", detail: "Suchindram Temple, Kumari Amman Temple and sunset at Sunset Point." },
      { day: "Day 2", title: "Sunrise & ferry", detail: "Sunrise, ferry to Vivekananda Rock, Padmanabhapuram Palace en route back." },
    ], inclusions: ["1 night sea-view hotel", "Breakfast", "Private cab", "Ferry tickets"] },
  { slug: "yercaud", name: "Yercaud Weekend Retreat", duration: "2 Days / 1 Night", days: 2, price: 6500, cover: "yercaud", destinations: ["yercaud", "kiliyur-falls"],
    highlights: ["Yercaud Lake boating", "Coffee estate walk", "Kiliyur Falls trek", "Lady's Seat sunset"],
    itinerary: [
      { day: "Day 1", title: "Salem to Yercaud", detail: "Ghat drive, lake boating, Rose Garden and Lady's Seat sunset." },
      { day: "Day 2", title: "Falls & estates", detail: "Kiliyur Falls trek, coffee estate tour and Pagoda Point." },
    ], inclusions: ["1 night estate stay", "Breakfast & dinner", "Private cab"] },
  { slug: "heritage-tour", name: "Tamil Nadu Heritage Tour", duration: "5 Days / 4 Nights", days: 5, price: 24000, cover: "brihadeeswarar", destinations: ["shore-temple", "chidambaram", "brihadeeswarar", "srirangam", "chettinad"],
    highlights: ["UNESCO Great Living Chola Temples", "Mahabalipuram monuments", "Chettinad mansions", "Chettinad cooking class"],
    itinerary: [
      { day: "Day 1", title: "Chennai to Mahabalipuram", detail: "Shore Temple, Five Rathas and Arjuna's Penance." },
      { day: "Day 2", title: "Chidambaram", detail: "Nataraja Temple and Pichavaram mangrove boat ride." },
      { day: "Day 3", title: "Thanjavur", detail: "Brihadeeswarar Temple, Thanjavur Palace and art plate studio." },
      { day: "Day 4", title: "Srirangam & Trichy", detail: "Ranganathaswamy Temple and Rockfort." },
      { day: "Day 5", title: "Chettinad", detail: "Mansion walk, Athangudi tiles and a Chettinad feast." },
    ], inclusions: ["4 nights heritage hotels", "Breakfast & dinner", "Private cab", "Expert heritage guide"] },
  { slug: "complete-tamil-nadu", name: "Complete Tamil Nadu Tour", duration: "7 Days / 6 Nights", days: 7, price: 38000, cover: "kanyakumari", destinations: ["mahabalipuram", "brihadeeswarar", "meenakshi-temple", "rameswaram", "kanyakumari", "kodaikanal"],
    highlights: ["Temples, beaches & hills", "Pamban Bridge & Dhanushkodi", "Kanyakumari sunrise", "Kodaikanal lake"],
    itinerary: [
      { day: "Day 1", title: "Chennai & Mahabalipuram", detail: "Marina Beach and the Pallava monuments." },
      { day: "Day 2", title: "Thanjavur", detail: "The Big Temple and Chola heritage." },
      { day: "Day 3", title: "Madurai", detail: "Meenakshi Temple and the night ceremony." },
      { day: "Day 4", title: "Rameswaram", detail: "Temple corridors and Dhanushkodi." },
      { day: "Day 5", title: "Kanyakumari", detail: "Sunset at land's end." },
      { day: "Day 6", title: "Kodaikanal", detail: "Drive up to the Princess of Hill Stations." },
      { day: "Day 7", title: "Departure", detail: "Morning by the lake, drop at Madurai." },
    ], inclusions: ["6 nights hotels", "Breakfast & dinner", "Private AC cab", "All sightseeing"] },
];

export const getPackage = (slug: string) => PACKAGES.find((p) => p.slug === slug);
export const packageImage = (p: TourPackage) => getDestination(p.cover)?.images[0] ?? "";
export const formatINR = (n: number) => "₹" + n.toLocaleString("en-IN");

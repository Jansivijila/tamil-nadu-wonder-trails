import { IMAGES } from "./images";
import kiliyur1 from "@/assets/kiliyur-1.jpg";
import kiliyur2 from "@/assets/kiliyur-2.jpg";

export type Category = "hill-stations" | "beaches" | "waterfalls" | "heritage" | "wildlife";

export const CATEGORIES: { id: Category; label: string; blurb: string }[] = [
  { id: "hill-stations", label: "Hill Stations", blurb: "Misty peaks, tea estates and cool mountain air" },
  { id: "beaches", label: "Beaches", blurb: "Sun-kissed shores where three seas meet" },
  { id: "waterfalls", label: "Waterfalls", blurb: "Thundering cascades deep in the Western Ghats" },
  { id: "heritage", label: "Temples & Heritage", blurb: "Dravidian masterpieces carved over millennia" },
  { id: "wildlife", label: "Wildlife & Nature", blurb: "Tigers, elephants, flamingos and coral reefs" },
];

export interface Destination {
  slug: string;
  name: string;
  category: Category;
  location: string;
  tagline: string;
  description: string;
  bestTime: string;
  howToReach: string;
  duration: string;
  nearby: string[];
  things: string[];
  foods: string[];
  tips: string[];
  images: string[];
}

type Raw = Omit<Destination, "images" | "tips" | "foods"> & { tips?: string[]; foods?: string[] };

const CAT_DEFAULTS: Record<Category, { tips: string[]; foods: string[] }> = {
  "hill-stations": {
    tips: ["Carry light woollens even in summer", "Ghat roads have many hairpin bends — avoid night driving", "Book stays early for April–June weekends"],
    foods: ["Homemade chocolates", "Fresh estate tea", "Hot bajji and masala corn"],
  },
  beaches: {
    tips: ["Swim only where lifeguards are present", "Carry sunscreen and stay hydrated", "Sunrise and sunset are the most magical hours"],
    foods: ["Fresh fish fry", "Prawn masala", "Tender coconut water"],
  },
  waterfalls: {
    tips: ["Bathing may be closed during heavy monsoon flow", "Wear shoes with good grip on wet rocks", "Respect forest department timings"],
    foods: ["Fried river fish", "Hot vada and tea", "Local fruit stalls"],
  },
  heritage: {
    tips: ["Dress modestly — shoulders and knees covered", "Footwear is not allowed inside temple premises", "Hire an authorised guide to understand the carvings"],
    foods: ["Temple prasadam (pongal & puliyodharai)", "Filter coffee", "Banana-leaf South Indian meals"],
  },
  wildlife: {
    tips: ["Book forest department safaris in advance", "Wear earthy colours and keep quiet", "Carry binoculars and a zoom lens"],
    foods: ["Simple forest-lodge meals", "Ragi-based dishes", "Fresh local fruits"],
  },
};

const RAW: Raw[] = [
  // Hill stations
  { slug: "ooty", name: "Ooty", category: "hill-stations", location: "Nilgiris District", tagline: "Queen of Hill Stations",
    description: "Perched at 2,240 m in the Nilgiri Hills, Ooty charms with rolling tea gardens, eucalyptus forests, a serene lake and the UNESCO-listed Nilgiri Mountain Railway. Colonial bungalows and flower-filled gardens make it Tamil Nadu's most loved mountain retreat.",
    bestTime: "October to June", howToReach: "Nearest airport: Coimbatore (88 km). Nearest railhead: Mettupalayam, connected by the toy train. Well-connected by road from Coimbatore, Mysuru and Bengaluru.", duration: "2–3 days",
    nearby: ["Coonoor", "Pykara Falls", "Avalanche Lake", "Doddabetta Peak"], things: ["Ride the Nilgiri toy train", "Boating on Ooty Lake", "Stroll the Government Botanical Garden", "Visit the Tea Factory & Museum"],
    foods: ["Ooty homemade chocolates", "Nilgiri tea", "Varkey (crisp baked biscuit)"] },
  { slug: "kodaikanal", name: "Kodaikanal", category: "hill-stations", location: "Dindigul District", tagline: "Princess of Hill Stations",
    description: "Set around a star-shaped lake in the Palani Hills, Kodaikanal is a dreamy town of pine forests, misty valleys and dramatic cliffs. It's famed for the rare Kurinji flower that blooms once every twelve years.",
    bestTime: "September to May", howToReach: "Nearest airport: Madurai (120 km). Nearest railhead: Kodai Road (80 km). Regular buses from Madurai, Dindigul and Coimbatore.", duration: "2–3 days",
    nearby: ["Coaker's Walk", "Pillar Rocks", "Guna Caves", "Berijam Lake"], things: ["Cycle around Kodai Lake", "Walk through the Pine Forest", "Watch sunrise from Coaker's Walk", "Shop for homemade chocolates"],
    foods: ["Homemade chocolates", "Eucalyptus honey", "Plum cake"] },
  { slug: "yercaud", name: "Yercaud", category: "hill-stations", location: "Salem District", tagline: "Jewel of the South",
    description: "A quiet hill station in the Shevaroy Hills, Yercaud is wrapped in coffee and orange plantations. Its gentle climate, emerald lake and sweeping viewpoints make it a perfect budget-friendly getaway.",
    bestTime: "October to June", howToReach: "Nearest airport and railhead: Salem (30 km). A scenic 20-hairpin ghat road climbs from Salem.", duration: "1–2 days",
    nearby: ["Kiliyur Falls", "Lady's Seat", "Shevaroyan Temple", "Pagoda Point"], things: ["Boating on Yercaud Lake", "Visit coffee estates", "Sunset at Lady's Seat", "Explore the Rose Garden"],
    foods: ["Estate-fresh coffee", "Oranges and jackfruit", "Pepper chicken"] },
  { slug: "coonoor", name: "Coonoor", category: "hill-stations", location: "Nilgiris District", tagline: "Tea country serenity",
    description: "Quieter than Ooty, Coonoor is blanketed by tea estates and dotted with viewpoints over the plains. Sim's Park, Dolphin's Nose and Lamb's Rock reward visitors with endless green panoramas.",
    bestTime: "October to June", howToReach: "Nearest airport: Coimbatore (70 km). Coonoor is a stop on the Nilgiri Mountain Railway.", duration: "1–2 days",
    nearby: ["Ooty", "Kotagiri", "Catherine Falls", "Dolphin's Nose"], things: ["Tea tasting at estates", "Sim's Park botanical walk", "Viewpoint hopping", "Toy train ride"],
    foods: ["Nilgiri tea", "Fresh-baked bakery treats", "Badaga cuisine"] },
  { slug: "valparai", name: "Valparai", category: "hill-stations", location: "Coimbatore District", tagline: "Eden of the Anamalais",
    description: "Reached via 40 hairpin bends, Valparai is an untouched plateau of tea and coffee estates surrounded by rainforest. Lion-tailed macaques, elephants and hornbills roam freely here.",
    bestTime: "September to May", howToReach: "Nearest airport: Coimbatore (105 km). Nearest railhead: Pollachi (65 km).", duration: "2 days",
    nearby: ["Aliyar Dam", "Sholayar Dam", "Topslip", "Nallamudi viewpoint"], things: ["Drive the 40 hairpin bends", "Spot lion-tailed macaques", "Estate walks", "Visit Sholayar Dam"] },
  { slug: "kotagiri", name: "Kotagiri", category: "hill-stations", location: "Nilgiris District", tagline: "The oldest Nilgiri hill station",
    description: "Kotagiri is a peaceful hill town with one of the best climates in India. Its tea gardens, Kodanad viewpoint and Catherine Falls make it ideal for slow travel.",
    bestTime: "Year-round (best March–June)", howToReach: "Nearest airport: Coimbatore (65 km). Nearest railhead: Mettupalayam (33 km).", duration: "1–2 days",
    nearby: ["Kodanad Viewpoint", "Catherine Falls", "Coonoor", "Longwood Shola"], things: ["Kodanad viewpoint", "Longwood Shola forest walk", "Tea estate stays", "Trek to Rangaswamy Pillar"] },
  { slug: "kolli-hills", name: "Kolli Hills", category: "hill-stations", location: "Namakkal District", tagline: "Mountain of 70 hairpins",
    description: "Kolli Hills is a wild, mystical range known for its 70 hairpin bends, medicinal herbs, pepper plantations and the thundering Agaya Gangai Falls.",
    bestTime: "October to May", howToReach: "Nearest airport: Tiruchirappalli (90 km). Nearest railhead: Namakkal (55 km).", duration: "1–2 days",
    nearby: ["Agaya Gangai Falls", "Arapaleeswarar Temple", "Seekuparai viewpoint", "Botanical Garden"], things: ["Drive the 70 hairpins", "Trek to Agaya Gangai", "Visit spice plantations", "Bird watching"],
    foods: ["Kolli Hills pepper", "Wild honey", "Jackfruit"] },
  { slug: "meghamalai", name: "Meghamalai", category: "hill-stations", location: "Theni District", tagline: "High wavy mountains",
    description: "Meghamalai — the 'cloud mountains' — is an offbeat paradise of mist-wrapped tea estates, cardamom forests and quiet dams, still blissfully free of crowds.",
    bestTime: "September to April", howToReach: "Nearest airport: Madurai (130 km). Nearest railhead: Theni.", duration: "2 days",
    nearby: ["Suruli Falls", "Highwavys Dam", "Cumbum valley", "Thekkady"], things: ["Estate trails", "Cloud watching", "Wildlife spotting", "Photography"] },
  { slug: "yelagiri", name: "Yelagiri", category: "hill-stations", location: "Tirupattur District", tagline: "Adventure in the Eastern Ghats",
    description: "A cluster of villages amid orchards and rose gardens, Yelagiri is a weekend favourite for paragliding, trekking and lakeside picnics.",
    bestTime: "Year-round", howToReach: "Nearest railhead: Jolarpettai (20 km). Nearest airport: Bengaluru (160 km).", duration: "1–2 days",
    nearby: ["Punganoor Lake", "Jalagamparai Falls", "Swamimalai Hill", "Nature Park"], things: ["Paragliding", "Trek Swamimalai Hill", "Boating at Punganoor", "Orchard visits"] },
  // Beaches
  { slug: "marina-beach", name: "Marina Beach", category: "beaches", location: "Chennai", tagline: "India's longest urban beach",
    description: "Stretching 13 km along the Bay of Bengal, Marina Beach is the beating heart of Chennai — sunrise joggers, kite-fliers, food stalls and colonial landmarks line its golden sand.",
    bestTime: "November to February", howToReach: "Chennai International Airport (15 km); Chennai Central (5 km). Well served by city buses and metro.", duration: "Half a day",
    nearby: ["San Thome Basilica", "Kapaleeshwarar Temple", "Fort St. George", "Elliot's Beach"], things: ["Sunrise walk", "Street food crawl", "Visit the lighthouse", "Horse rides along the shore"],
    foods: ["Sundal", "Murukku and bajji", "Kulfi"] },
  { slug: "mahabalipuram", name: "Mahabalipuram", category: "beaches", location: "Chengalpattu District", tagline: "Where stone meets sea",
    description: "A UNESCO World Heritage town of 7th-century Pallava rock-cut temples, Mahabalipuram blends ancient sculpture with a laid-back beach and surfing culture.",
    bestTime: "November to February", howToReach: "60 km south of Chennai via the scenic East Coast Road.", duration: "1–2 days",
    nearby: ["Shore Temple", "Five Rathas", "Arjuna's Penance", "Covelong Beach"], things: ["Explore the monuments", "Learn to surf", "Watch stone carvers at work", "Dance Festival (Dec–Jan)"] },
  { slug: "kanyakumari", name: "Kanyakumari", category: "beaches", location: "Kanyakumari District", tagline: "Land's end of India",
    description: "At the southernmost tip of mainland India, the Arabian Sea, Bay of Bengal and Indian Ocean merge. Watch the sun rise and set over the ocean beside the Vivekananda Rock Memorial and the towering Thiruvalluvar Statue.",
    bestTime: "October to March", howToReach: "Nearest airport: Thiruvananthapuram (90 km). Kanyakumari has its own railway station.", duration: "1–2 days",
    nearby: ["Vivekananda Rock Memorial", "Thiruvalluvar Statue", "Padmanabhapuram Palace", "Suchindram Temple"], things: ["Sunrise at the triple-sea point", "Ferry to Vivekananda Rock", "Visit Kumari Amman Temple", "Shop for seashell crafts"],
    foods: ["Nanjil Nadu fish curry", "Banana chips", "Kanyakumari halwa"] },
  { slug: "dhanushkodi", name: "Dhanushkodi", category: "beaches", location: "Ramanathapuram District", tagline: "The ghost town by the sea",
    description: "Swept away by a cyclone in 1964, Dhanushkodi's haunting ruins sit on a narrow strip of sand where the Bay of Bengal meets the Indian Ocean — just 29 km from Sri Lanka.",
    bestTime: "October to April", howToReach: "20 km from Rameswaram by road along the new causeway to Arichal Munai.", duration: "Half a day",
    nearby: ["Rameswaram", "Arichal Munai", "Pamban Bridge", "Kothandaramaswamy Temple"], things: ["See the ruined church & station", "Visit Arichal Munai point", "Photography at dawn", "Beach walk between two seas"] },
  { slug: "rameswaram", name: "Rameswaram", category: "beaches", location: "Ramanathapuram District", tagline: "Sacred island of the south",
    description: "An island pilgrimage town linked to the mainland by the iconic Pamban Bridge, Rameswaram is home to the Ramanathaswamy Temple and its legendary pillared corridors.",
    bestTime: "October to April", howToReach: "Nearest airport: Madurai (175 km). Direct trains to Rameswaram from Chennai and Madurai.", duration: "1–2 days",
    nearby: ["Dhanushkodi", "Pamban Bridge", "APJ Abdul Kalam Memorial", "Agnitheertham"], things: ["Temple corridor walk", "Holy dip at Agnitheertham", "Cross the Pamban Bridge", "Visit the Kalam Memorial"] },
  { slug: "poompuhar", name: "Poompuhar", category: "beaches", location: "Mayiladuthurai District", tagline: "Ancient Chola port",
    description: "Once the great port of Kaveripoompattinam, Poompuhar is where the Kaveri river meets the sea — a quiet beach steeped in Sangam-era legend.",
    bestTime: "October to March", howToReach: "Nearest railhead: Mayiladuthurai (24 km). Nearest airport: Tiruchirappalli (170 km).", duration: "Half a day",
    nearby: ["Tharangambadi", "Sirkazhi", "Chidambaram", "Karaikal"], things: ["Silappathikaram Art Gallery", "Kaveri estuary beach", "Visit Tranquebar's Danish fort", "Heritage walk"] },
  { slug: "silver-beach", name: "Silver Beach", category: "beaches", location: "Cuddalore", tagline: "Long, quiet sands",
    description: "One of the longest beaches on the Coromandel Coast, Silver Beach in Cuddalore is a relaxed seafront loved by local families, with boating and the nearby Pichavaram mangroves.",
    bestTime: "November to March", howToReach: "Cuddalore railway station (2 km); Puducherry (25 km).", duration: "Half a day",
    nearby: ["Pichavaram Mangroves", "Fort St. David", "Puducherry", "Chidambaram"], things: ["Evening beach walk", "Boating", "Mangrove boat rides at Pichavaram", "Fort St. David ruins"] },
  // Waterfalls
  { slug: "hogenakkal", name: "Hogenakkal Falls", category: "waterfalls", location: "Dharmapuri District", tagline: "Niagara of India",
    description: "Here the Kaveri river crashes through ancient carbonatite rocks in a series of smoking cascades. Ride a round coracle boat right up to the spray — an unforgettable experience.",
    bestTime: "August to December", howToReach: "Nearest railhead: Dharmapuri (46 km). Nearest airport: Bengaluru (180 km).", duration: "1 day",
    nearby: ["Melagiri Hills", "Dharmapuri", "Krishnagiri Dam", "Yelagiri"], things: ["Coracle (parisal) ride", "Oil massage by the river", "Hanging bridge view", "Fresh fish lunch on the banks"],
    foods: ["Fresh river fish fry", "Meen kuzhambu", "Tender coconut"] },
  { slug: "courtallam", name: "Courtallam Falls", category: "waterfalls", location: "Tenkasi District", tagline: "Spa of South India",
    description: "A cluster of nine falls at the foot of the Western Ghats, Courtallam is believed to have healing waters that flow through medicinal herbs. Season brings joyful crowds to its bathing pools.",
    bestTime: "June to September", howToReach: "Nearest railhead: Tenkasi (5 km). Nearest airport: Thoothukudi or Madurai (160 km).", duration: "1–2 days",
    nearby: ["Five Falls", "Old Courtallam", "Thirumalai Kovil", "Papanasam"], things: ["Bathe in Main Falls", "Visit Five Falls", "Herbal oil massage", "Tiger Falls trek"] },
  { slug: "pykara", name: "Pykara Falls", category: "waterfalls", location: "Nilgiris District", tagline: "Cascade in the Toda highlands",
    description: "Tumbling through grassy Toda lands and shola forest, the Pykara river forms a pretty two-step fall, with a lake below ideal for boating.",
    bestTime: "September to May", howToReach: "20 km from Ooty along the Ooty–Mysuru road.", duration: "Half a day",
    nearby: ["Ooty", "Pine Forest", "Shooting Point", "Mudumalai"], things: ["Boating at Pykara Lake", "Pine forest photo walk", "Shooting Point meadows", "Picnic by the falls"] },
  { slug: "catherine-falls", name: "Catherine Falls", category: "waterfalls", location: "Kotagiri, Nilgiris", tagline: "A 250-foot double cascade",
    description: "One of the tallest falls in the Nilgiris, Catherine Falls drops 250 ft into a forested gorge, best seen from Dolphin's Nose viewpoint.",
    bestTime: "September to May", howToReach: "8 km from Kotagiri; 20 km from Coonoor.", duration: "Half a day",
    nearby: ["Kotagiri", "Dolphin's Nose", "Coonoor", "Kodanad"], things: ["Viewpoint photography", "Short trek to the top", "Tea estate drive", "Bird watching"] },
  { slug: "agaya-gangai", name: "Agaya Gangai Falls", category: "waterfalls", location: "Kolli Hills", tagline: "The river from the sky",
    description: "Plunging 300 ft amid the Kolli Hills, Agaya Gangai is reached by around 1,000 steps through forest. The reward: a breathtaking roar of water and mist.",
    bestTime: "July to December", howToReach: "Located in Kolli Hills, 55 km from Namakkal.", duration: "Half a day",
    nearby: ["Arapaleeswarar Temple", "Kolli Hills", "Seekuparai viewpoint", "Masila Falls"], things: ["Trek the 1,000 steps", "Bathe at the base", "Visit Arapaleeswarar Temple", "Herbal farm visits"] },
  { slug: "kiliyur-falls", name: "Kiliyur Falls", category: "waterfalls", location: "Yercaud, Salem", tagline: "Hidden forest cascade",
    description: "A 300-ft waterfall fed by Yercaud Lake, Kiliyur Falls lies at the end of a short forest trail — wildest and most beautiful just after the monsoon.",
    bestTime: "August to November", howToReach: "3 km from Yercaud town; final stretch is a short trek.", duration: "Half a day",
    nearby: ["Yercaud Lake", "Lady's Seat", "Pagoda Point", "Salem"], things: ["Forest trek", "Photography", "Bird spotting", "Picnic"] },
  { slug: "suruli-falls", name: "Suruli Falls", category: "waterfalls", location: "Theni District", tagline: "Two-tier sacred falls",
    description: "Originating from Meghamalai, the Suruli Falls drop in two stages and are revered by pilgrims, with ancient cave shrines nearby.",
    bestTime: "June to October", howToReach: "Nearest town: Cumbum (10 km). Nearest airport: Madurai (130 km).", duration: "Half a day",
    nearby: ["Meghamalai", "Cumbum vineyards", "Thekkady", "Vaigai Dam"], things: ["Holy bath", "Cave shrine visit", "Grape vineyard tour", "Drive to Meghamalai"] },
  // Heritage
  { slug: "meenakshi-temple", name: "Meenakshi Amman Temple", category: "heritage", location: "Madurai", tagline: "The jewel of Madurai",
    description: "A dazzling temple city with 14 gopurams covered in thousands of painted sculptures, the Meenakshi Amman Temple has been the soul of Madurai for over 2,500 years.",
    bestTime: "October to March", howToReach: "Madurai Airport (12 km); Madurai Junction railway station (1.5 km).", duration: "1 day",
    nearby: ["Thirumalai Nayakkar Mahal", "Gandhi Museum", "Alagar Kovil", "Thiruparankundram"], things: ["Evening Palliyarai ceremony", "Hall of Thousand Pillars", "Golden Lotus Tank", "Night food walk"],
    foods: ["Jigarthanda", "Kari dosa", "Madurai malli idli"] },
  { slug: "brihadeeswarar", name: "Brihadeeswarar Temple", category: "heritage", location: "Thanjavur", tagline: "The Big Temple",
    description: "Built by Raja Raja Chola I in 1010 CE, this UNESCO World Heritage temple is crowned by a 66 m vimana topped with a single granite capstone — a marvel of Chola engineering.",
    bestTime: "October to March", howToReach: "Nearest airport: Tiruchirappalli (60 km). Thanjavur Junction (2 km).", duration: "1 day",
    nearby: ["Thanjavur Palace", "Saraswathi Mahal Library", "Gangaikonda Cholapuram", "Darasuram"], things: ["Admire Chola frescoes", "See the giant Nandi", "Thanjavur art plate shopping", "Evening lighting"],
    foods: ["Thanjavur thali", "Degree coffee", "Ashoka halwa"] },
  { slug: "ramanathaswamy", name: "Ramanathaswamy Temple", category: "heritage", location: "Rameswaram", tagline: "World's longest temple corridor",
    description: "One of the twelve Jyotirlingas, this island temple features the world's longest temple corridor — nearly 1,200 m of carved pillars — and 22 sacred wells.",
    bestTime: "October to April", howToReach: "Within Rameswaram town; Rameswaram railway station (2 km).", duration: "Half a day",
    nearby: ["Dhanushkodi", "Agnitheertham", "Pamban Bridge", "Gandamadhana Parvatham"], things: ["Bathe in the 22 theerthams", "Walk the third corridor", "Early morning Spatika Linga darshan", "Sunset at Agnitheertham"] },
  { slug: "shore-temple", name: "Shore Temple", category: "heritage", location: "Mahabalipuram", tagline: "Pallava gem on the sea",
    description: "Built in the 8th century, the Shore Temple is among the oldest structural stone temples in South India, standing gracefully against the waves of the Bay of Bengal.",
    bestTime: "November to February", howToReach: "Within Mahabalipuram, 60 km from Chennai.", duration: "Half a day",
    nearby: ["Five Rathas", "Arjuna's Penance", "Krishna's Butterball", "Tiger Cave"], things: ["Sunrise photography", "Sound & light show", "Monument trail", "Beach café hopping"] },
  { slug: "srirangam", name: "Srirangam Temple", category: "heritage", location: "Tiruchirappalli", tagline: "Largest functioning Hindu temple",
    description: "On an island between the Kaveri and Kollidam rivers, Sri Ranganathaswamy Temple spans 156 acres with 21 gopurams, including the 73 m Rajagopuram.",
    bestTime: "October to March", howToReach: "Tiruchirappalli Airport (15 km); Srirangam railway station (1 km).", duration: "1 day",
    nearby: ["Rockfort Temple", "Jambukeswarar Temple", "Kallanai Dam", "Thanjavur"], things: ["Climb the Rajagopuram viewpoint", "Thousand-pillared hall", "Vaikunta Ekadasi festival", "Rockfort sunset"] },
  { slug: "chidambaram", name: "Chidambaram Nataraja Temple", category: "heritage", location: "Cuddalore District", tagline: "Home of the cosmic dancer",
    description: "Dedicated to Shiva as Nataraja, the Lord of Dance, this temple's golden roof and gopurams carved with all 108 Bharatanatyam poses make it a cultural treasure.",
    bestTime: "October to March", howToReach: "Chidambaram railway station (1 km). Nearest airport: Puducherry or Tiruchirappalli.", duration: "Half a day",
    nearby: ["Pichavaram Mangroves", "Poompuhar", "Silver Beach", "Vaitheeswaran Koil"], things: ["Natyanjali dance festival", "Golden hall darshan", "Pichavaram boat ride", "Gopuram carvings tour"] },
  { slug: "gingee-fort", name: "Gingee Fort", category: "heritage", location: "Villupuram District", tagline: "Troy of the East",
    description: "Spread across three hills, Gingee Fort was called 'the most impregnable fortress in India' by Shivaji. Climb to Rajagiri for a sweeping view of the Deccan plains.",
    bestTime: "October to February", howToReach: "Nearest railhead: Tindivanam (28 km). 160 km from Chennai.", duration: "1 day",
    nearby: ["Tiruvannamalai", "Puducherry", "Mel Sithamur Jain Math", "Thiruvakkarai"], things: ["Trek to Rajagiri citadel", "Kalyana Mahal", "Granaries & stables", "Photography at golden hour"] },
  { slug: "chettinad", name: "Chettinad", category: "heritage", location: "Sivaganga District", tagline: "Palaces and peppery cuisine",
    description: "A region of 73 villages with grand mansions built by the Nattukottai Chettiar merchants — Burmese teak pillars, Italian marble and Athangudi tiles — and India's most celebrated spicy cuisine.",
    bestTime: "October to March", howToReach: "Nearest airport: Madurai (90 km). Karaikudi railway station.", duration: "2 days",
    nearby: ["Karaikudi", "Kanadukathan Palace", "Athangudi", "Pillayarpatti Temple"], things: ["Mansion heritage walks", "Athangudi tile workshop", "Chettinad cooking class", "Antique market shopping"],
    foods: ["Chettinad chicken", "Kuzhi paniyaram", "Kavuni arisi"] },
  // Wildlife
  { slug: "mudumalai", name: "Mudumalai Tiger Reserve", category: "wildlife", location: "Nilgiris District", tagline: "Where elephants roam",
    description: "At the junction of three states, Mudumalai is a lush reserve teeming with Asian elephants, tigers, gaur and leopards, with the historic Theppakadu elephant camp.",
    bestTime: "October to May", howToReach: "36 km from Ooty; nearest airport: Coimbatore (120 km).", duration: "1–2 days",
    nearby: ["Masinagudi", "Ooty", "Bandipur", "Pykara Falls"], things: ["Jeep or bus safari", "Theppakadu elephant camp", "Masinagudi stays", "Bird watching"] },
  { slug: "anamalai", name: "Anamalai Tiger Reserve", category: "wildlife", location: "Coimbatore District", tagline: "Elephant hills",
    description: "Anamalai (Indira Gandhi Wildlife Sanctuary) protects rainforests, shola grasslands and tribal hamlets, home to tigers, elephants and the endangered Nilgiri tahr.",
    bestTime: "October to May", howToReach: "Nearest railhead: Pollachi (35 km). Nearest airport: Coimbatore (90 km).", duration: "2 days",
    nearby: ["Topslip", "Valparai", "Aliyar Dam", "Parambikulam"], things: ["Safari from Topslip", "Tribal village visits", "Trekking", "Elephant camp at Kozhikamuthi"] },
  { slug: "vedanthangal", name: "Vedanthangal Bird Sanctuary", category: "wildlife", location: "Chengalpattu District", tagline: "India's oldest bird sanctuary",
    description: "Protected since 1798, Vedanthangal welcomes over 40,000 migratory birds each winter — pelicans, painted storks, herons and pintails nest over its tranquil lake.",
    bestTime: "November to March", howToReach: "75 km from Chennai via GST Road; nearest railhead: Chengalpattu.", duration: "Half a day",
    nearby: ["Karikili Bird Sanctuary", "Mahabalipuram", "Kanchipuram", "Chengalpattu"], things: ["Dawn birding from the watchtower", "Photography", "Nature trail", "Visit Kanchipuram silk weavers"] },
  { slug: "point-calimere", name: "Point Calimere", category: "wildlife", location: "Nagapattinam District", tagline: "Flamingo wetlands",
    description: "Point Calimere's wetlands, mangroves and dry forests host flamingos by the thousand along with blackbucks and wild ponies — a Ramsar site of global importance.",
    bestTime: "November to January", howToReach: "Nearest railhead: Vedaranyam (11 km). Nearest airport: Tiruchirappalli (200 km).", duration: "1 day",
    nearby: ["Velankanni", "Vedaranyam", "Muthupet Mangroves", "Nagapattinam"], things: ["Flamingo watching", "Blackbuck spotting", "Mangrove boating at Muthupet", "Lighthouse visit"] },
  { slug: "gulf-of-mannar", name: "Gulf of Mannar", category: "wildlife", location: "Ramanathapuram & Thoothukudi", tagline: "India's first marine biosphere",
    description: "21 islands, coral reefs, seagrass beds and the gentle dugong — the Gulf of Mannar Marine National Park is a living underwater treasure.",
    bestTime: "October to March", howToReach: "Glass-bottom boat trips from Mandapam near Rameswaram.", duration: "1 day",
    nearby: ["Rameswaram", "Pamban Bridge", "Dhanushkodi", "Thoothukudi"], things: ["Glass-bottom boat ride", "Coral reef viewing", "Snorkelling (where permitted)", "Marine museum"] },
  { slug: "topslip", name: "Topslip", category: "wildlife", location: "Anamalai Hills", tagline: "Gateway to the rainforest",
    description: "Topslip is the base for Anamalai Tiger Reserve adventures — elephant camps, forest treks and watchtowers amid towering teak and rosewood.",
    bestTime: "October to May", howToReach: "35 km from Pollachi; nearest airport: Coimbatore.", duration: "1–2 days",
    nearby: ["Anamalai Tiger Reserve", "Parambikulam", "Valparai", "Aliyar Dam"], things: ["Forest treks with guides", "Elephant camp visit", "Watchtower stays", "Night in a forest lodge"] },
];

const LOCAL_IMAGES: Record<string, string[]> = { "kiliyur-falls": [kiliyur1, kiliyur2] };

export const DESTINATIONS: Destination[] = RAW.map((d) => ({
  ...d,
  tips: d.tips ?? CAT_DEFAULTS[d.category].tips,
  foods: d.foods ?? CAT_DEFAULTS[d.category].foods,
  images: LOCAL_IMAGES[d.slug] ?? IMAGES[d.slug] ?? [],
}));

export const getDestination = (slug: string) => DESTINATIONS.find((d) => d.slug === slug);
export const byCategory = (c: Category) => DESTINATIONS.filter((d) => d.category === c);
export const categoryLabel = (c: Category) => CATEGORIES.find((x) => x.id === c)?.label ?? c;
export const HERO_SLUGS = ["ooty", "kodaikanal", "kanyakumari", "rameswaram", "hogenakkal", "mahabalipuram", "yercaud"];

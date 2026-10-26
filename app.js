const REGIONS = [
  { name: "India", group: "India", pop: 1452000000, tz: "Asia/Kolkata" },
  { name: "China", group: "China", pop: 1410000000, tz: "Asia/Shanghai" },
  { name: "United States", group: "United States", pop: 148000000, tz: "America/New_York" },
  { name: "United States", group: "United States", pop: 102000000, tz: "America/Chicago" },
  { name: "United States", group: "United States", pop: 24000000, tz: "America/Denver" },
  { name: "United States", group: "United States", pop: 71000000, tz: "America/Los_Angeles" },
  { name: "Indonesia", group: "Indonesia", pop: 284000000, tz: "Asia/Jakarta" },
  { name: "Pakistan", group: "Pakistan", pop: 247000000, tz: "Asia/Karachi" },
  { name: "Nigeria", group: "Nigeria", pop: 232000000, tz: "Africa/Lagos" },
  { name: "Brazil", group: "Brazil", pop: 217000000, tz: "America/Sao_Paulo" },
  { name: "Bangladesh", group: "Bangladesh", pop: 174000000, tz: "Asia/Dhaka" },
  { name: "Russia", group: "Russia", pop: 110000000, tz: "Europe/Moscow" },
  { name: "Russia", group: "Russia", pop: 34000000, tz: "Asia/Krasnoyarsk" },
  { name: "Mexico", group: "Mexico", pop: 131000000, tz: "America/Mexico_City" },
  { name: "Ethiopia", group: "Ethiopia", pop: 132000000, tz: "Africa/Addis_Ababa" },
  { name: "Japan", group: "Japan", pop: 123000000, tz: "Asia/Tokyo" },
  { name: "Philippines", group: "Philippines", pop: 118000000, tz: "Asia/Manila" },
  { name: "Egypt", group: "Egypt", pop: 116000000, tz: "Africa/Cairo" },
  { name: "DR Congo", group: "DR Congo", pop: 109000000, tz: "Africa/Kinshasa" },
  { name: "Vietnam", group: "Vietnam", pop: 101000000, tz: "Asia/Ho_Chi_Minh" },
  { name: "Iran", group: "Iran", pop: 91000000, tz: "Asia/Tehran" },
  { name: "Turkey", group: "Turkey", pop: 87000000, tz: "Europe/Istanbul" },
  { name: "Germany", group: "Germany", pop: 84000000, tz: "Europe/Berlin" },
  { name: "Thailand", group: "Thailand", pop: 72000000, tz: "Asia/Bangkok" },
  { name: "United Kingdom", group: "United Kingdom", pop: 69000000, tz: "Europe/London" },
  { name: "Tanzania", group: "Tanzania", pop: 69000000, tz: "Africa/Dar_es_Salaam" },
  { name: "France", group: "France", pop: 68000000, tz: "Europe/Paris" },
  { name: "South Africa", group: "South Africa", pop: 63000000, tz: "Africa/Johannesburg" },
  { name: "Italy", group: "Italy", pop: 59000000, tz: "Europe/Rome" },
  { name: "Kenya", group: "Kenya", pop: 56000000, tz: "Africa/Nairobi" },
  { name: "Myanmar", group: "Myanmar", pop: 55000000, tz: "Asia/Yangon" },
  { name: "South Korea", group: "South Korea", pop: 52000000, tz: "Asia/Seoul" },
  { name: "Colombia", group: "Colombia", pop: 53000000, tz: "America/Bogota" },
  { name: "Spain", group: "Spain", pop: 48000000, tz: "Europe/Madrid" },
  { name: "Argentina", group: "Argentina", pop: 46000000, tz: "America/Argentina/Buenos_Aires" },
  { name: "Algeria", group: "Algeria", pop: 47000000, tz: "Africa/Algiers" },
  { name: "Sudan", group: "Sudan", pop: 50000000, tz: "Africa/Khartoum" },
  { name: "Uganda", group: "Uganda", pop: 49000000, tz: "Africa/Kampala" },
  { name: "Iraq", group: "Iraq", pop: 46000000, tz: "Asia/Baghdad" },
  { name: "Ukraine", group: "Ukraine", pop: 37000000, tz: "Europe/Kyiv" },
  { name: "Poland", group: "Poland", pop: 38000000, tz: "Europe/Warsaw" },
  { name: "Canada", group: "Canada", pop: 28000000, tz: "America/Toronto" },
  { name: "Canada", group: "Canada", pop: 13000000, tz: "America/Vancouver" },
  { name: "Morocco", group: "Morocco", pop: 38000000, tz: "Africa/Casablanca" },
  { name: "Saudi Arabia", group: "Saudi Arabia", pop: 37000000, tz: "Asia/Riyadh" },
  { name: "Uzbekistan", group: "Uzbekistan", pop: 36000000, tz: "Asia/Tashkent" },
  { name: "Malaysia", group: "Malaysia", pop: 35000000, tz: "Asia/Kuala_Lumpur" },
  { name: "Peru", group: "Peru", pop: 34000000, tz: "America/Lima" },
  { name: "Angola", group: "Angola", pop: 38000000, tz: "Africa/Luanda" },
  { name: "Ghana", group: "Ghana", pop: 35000000, tz: "Africa/Accra" },
  { name: "Mozambique", group: "Mozambique", pop: 35000000, tz: "Africa/Maputo" },
  { name: "Yemen", group: "Yemen", pop: 35000000, tz: "Asia/Aden" },
  { name: "Nepal", group: "Nepal", pop: 31000000, tz: "Asia/Kathmandu" },
  { name: "Venezuela", group: "Venezuela", pop: 28000000, tz: "America/Caracas" },
  { name: "Australia", group: "Australia", pop: 21000000, tz: "Australia/Sydney" },
  { name: "Australia", group: "Australia", pop: 6000000, tz: "Australia/Perth" },
  { name: "Taiwan", group: "Taiwan", pop: 23000000, tz: "Asia/Taipei" },
  { name: "Sri Lanka", group: "Sri Lanka", pop: 22000000, tz: "Asia/Colombo" },
  { name: "Romania", group: "Romania", pop: 19000000, tz: "Europe/Bucharest" },
  { name: "Chile", group: "Chile", pop: 20000000, tz: "America/Santiago" },
  { name: "Kazakhstan", group: "Kazakhstan", pop: 20000000, tz: "Asia/Almaty" },
  { name: "Netherlands", group: "Netherlands", pop: 18000000, tz: "Europe/Amsterdam" },
  { name: "Ecuador", group: "Ecuador", pop: 18000000, tz: "America/Guayaquil" },
  { name: "Guatemala", group: "Guatemala", pop: 18000000, tz: "America/Guatemala" },
  { name: "Cambodia", group: "Cambodia", pop: 17000000, tz: "Asia/Phnom_Penh" },
  { name: "Belgium", group: "Belgium", pop: 12000000, tz: "Europe/Brussels" },
  { name: "Cuba", group: "Cuba", pop: 11000000, tz: "America/Havana" },
  { name: "Greece", group: "Greece", pop: 10000000, tz: "Europe/Athens" },
  { name: "Portugal", group: "Portugal", pop: 10000000, tz: "Europe/Lisbon" },
  { name: "Sweden", group: "Sweden", pop: 11000000, tz: "Europe/Stockholm" },
  { name: "Israel", group: "Israel", pop: 10000000, tz: "Asia/Jerusalem" },
  { name: "United Arab Emirates", group: "United Arab Emirates", pop: 10000000, tz: "Asia/Dubai" },
  { name: "Switzerland", group: "Switzerland", pop: 9000000, tz: "Europe/Zurich" },
  { name: "Hong Kong", group: "Hong Kong", pop: 7500000, tz: "Asia/Hong_Kong" },
  { name: "Singapore", group: "Singapore", pop: 6000000, tz: "Asia/Singapore" },
  { name: "Denmark", group: "Denmark", pop: 6000000, tz: "Europe/Copenhagen" },
  { name: "Finland", group: "Finland", pop: 5600000, tz: "Europe/Helsinki" },
  { name: "Norway", group: "Norway", pop: 5600000, tz: "Europe/Oslo" },
  { name: "Ireland", group: "Ireland", pop: 5300000, tz: "Europe/Dublin" },
  { name: "New Zealand", group: "New Zealand", pop: 5300000, tz: "Pacific/Auckland" },
  { name: "Rest of Africa", group: "Rest of Africa", pop: 310000000, tz: "Africa/Lagos" },
  { name: "Rest of Asia", group: "Rest of Asia", pop: 190000000, tz: "Asia/Bangkok" },
  { name: "Rest of Europe", group: "Rest of Europe", pop: 95000000, tz: "Europe/Paris" },
  { name: "Rest of the Americas", group: "Rest of the Americas", pop: 85000000, tz: "America/Bogota" },
  { name: "Pacific islands", group: "Pacific islands", pop: 12000000, tz: "Pacific/Fiji" }
];

const CATEGORIES = [
  { id: "sleeping", name: "sleeping", kinds: [
    { id: "deep", name: "deep sleep" }, { id: "light", name: "light sleep" }, { id: "rem", name: "rem" }, { id: "nap", name: "napping" }
  ]},
  { id: "dreaming", name: "dreaming", kinds: [
    { id: "wild", name: "a vivid one" }, { id: "ordinary", name: "something ordinary" }, { id: "nightmare", name: "a nightmare" }, { id: "lucid", name: "lucid" }
  ]},
  { id: "eating", name: "eating", kinds: [
    { id: "breakfast", name: "breakfast" }, { id: "lunch", name: "lunch" }, { id: "dinner", name: "dinner" }, { id: "snack", name: "snacking" }
  ]},
  { id: "love", name: "making love", kinds: [
    { id: "together", name: "with someone" }, { id: "almost", name: "about to" }, { id: "after", name: "just after" }
  ]},
  { id: "masturbating", name: "masturbating", kinds: [
    { id: "bed", name: "in bed" }, { id: "bathroom", name: "in the bathroom" }, { id: "else", name: "somewhere else" }
  ]},
  { id: "kissing", name: "kissing", kinds: [
    { id: "romance", name: "romantically" }, { id: "hello", name: "hello or goodbye" }, { id: "family", name: "family" }
  ]},
  { id: "working", name: "working", kinds: [
    { id: "office", name: "in an office" }, { id: "remote", name: "from home" }, { id: "labor", name: "with their hands" }, { id: "night", name: "night shift" }
  ]},
  { id: "commuting", name: "commuting", kinds: [
    { id: "car", name: "by car" }, { id: "transit", name: "on transit" }, { id: "walk", name: "walking" }, { id: "bike", name: "by bike" }
  ]},
  { id: "traffic", name: "stuck in traffic", kinds: [
    { id: "car", name: "in a car" }, { id: "bus", name: "on a bus" }, { id: "bike", name: "on a bike" }, { id: "rage", name: "honking" }
  ]},
  { id: "driving", name: "driving", kinds: [
    { id: "city", name: "in a city" }, { id: "highway", name: "on a highway" }, { id: "work", name: "for work" }, { id: "else", name: "somewhere else" }
  ]},
  { id: "walking", name: "walking", kinds: [
    { id: "somewhere", name: "somewhere" }, { id: "nowhere", name: "nowhere in particular" }, { id: "dog", name: "a dog" }, { id: "kid", name: "with a child" }
  ]},
  { id: "phone", name: "on their phone", kinds: [
    { id: "scroll", name: "scrolling" }, { id: "chat", name: "messaging" }, { id: "video", name: "watching videos" }, { id: "other", name: "anything else" }
  ]},
  { id: "online", name: "online", kinds: [
    { id: "social", name: "on social media" }, { id: "work", name: "for work" }, { id: "video", name: "watching" }, { id: "else", name: "the rest of the internet" }
  ]},
  { id: "watching", name: "watching something", kinds: [
    { id: "tv", name: "television" }, { id: "stream", name: "a stream" }, { id: "film", name: "a film" }, { id: "sport", name: "sports" }
  ]},
  { id: "music", name: "listening to music", kinds: [
    { id: "headphones", name: "on headphones" }, { id: "speakers", name: "out loud" }, { id: "live", name: "live" }, { id: "car", name: "in a car" }
  ]},
  { id: "gaming", name: "playing a game", kinds: [
    { id: "phone", name: "on a phone" }, { id: "console", name: "on a console" }, { id: "pc", name: "on a computer" }, { id: "field", name: "outside" }
  ]},
  { id: "reading", name: "reading", kinds: [
    { id: "book", name: "a book" }, { id: "news", name: "the news" }, { id: "chat", name: "a message" }, { id: "else", name: "a screen" }
  ]},
  { id: "school", name: "in school", kinds: [
    { id: "class", name: "in class" }, { id: "break", name: "on a break" }, { id: "homework", name: "doing homework" }, { id: "teacher", name: "teaching" }
  ]},
  { id: "studying", name: "studying", kinds: [
    { id: "school", name: "for school" }, { id: "exam", name: "for an exam" }, { id: "language", name: "a language" }, { id: "else", name: "something else" }
  ]},
  { id: "meeting", name: "in a meeting", kinds: [
    { id: "useful", name: "a useful one" }, { id: "long", name: "one that should be an email" }, { id: "video", name: "on a video call" }, { id: "hallway", name: "in a hallway" }
  ]},
  { id: "shopping", name: "shopping", kinds: [
    { id: "food", name: "for food" }, { id: "online", name: "online" }, { id: "clothes", name: "for clothes" }, { id: "else", name: "something else" }
  ]},
  { id: "exercising", name: "exercising", kinds: [
    { id: "walk", name: "walking" }, { id: "run", name: "running" }, { id: "gym", name: "at a gym" }, { id: "sport", name: "playing a sport" }
  ]},
  { id: "bathroom", name: "in the bathroom", kinds: [
    { id: "toilet", name: "on the toilet" }, { id: "shower", name: "showering" }, { id: "teeth", name: "brushing teeth" }, { id: "else", name: "something else" }
  ]},
  { id: "drinking", name: "drinking", kinds: [
    { id: "water", name: "water" }, { id: "coffee", name: "coffee or tea" }, { id: "alcohol", name: "alcohol" }, { id: "soda", name: "something sweet" }
  ]},
  { id: "cooking", name: "cooking", kinds: [
    { id: "breakfast", name: "breakfast" }, { id: "lunch", name: "lunch" }, { id: "dinner", name: "dinner" }, { id: "else", name: "a snack, or later" }
  ]},
  { id: "farming", name: "farming", kinds: [
    { id: "field", name: "in a field" }, { id: "animals", name: "with animals" }, { id: "market", name: "getting it to market" }, { id: "else", name: "the rest" }
  ]},
  { id: "praying", name: "praying", kinds: [
    { id: "islam", name: "in islam" }, { id: "christian", name: "in christianity" }, { id: "hindu", name: "in hinduism" }, { id: "other", name: "another way" }
  ]},
  { id: "smoking", name: "smoking", kinds: [
    { id: "cig", name: "a cigarette" }, { id: "vape", name: "a vape" }, { id: "other", name: "something else" }
  ]},
  { id: "waiting", name: "waiting", kinds: [
    { id: "line", name: "in a line" }, { id: "reply", name: "for a reply" }, { id: "transit", name: "for a ride" }, { id: "else", name: "for something else" }
  ]},
  { id: "laughing", name: "laughing", kinds: [
    { id: "someone", name: "with someone" }, { id: "screen", name: "at a screen" }, { id: "nervous", name: "nervously" }, { id: "alone", name: "alone" }
  ]},
  { id: "crying", name: "crying", kinds: [
    { id: "sad", name: "from sadness" }, { id: "happy", name: "from joy" }, { id: "kids", name: "a child" }, { id: "film", name: "at a story" }
  ]},
  { id: "dancing", name: "dancing", kinds: [
    { id: "party", name: "at a party" }, { id: "home", name: "at home" }, { id: "ritual", name: "in a ritual" }, { id: "club", name: "in a club" }
  ]},
  { id: "nothing", name: "doing nothing", kinds: [
    { id: "stare", name: "staring" }, { id: "lie", name: "lying down" }, { id: "sit", name: "sitting" }, { id: "zone", name: "zoning out" }
  ]},
  { id: "talking", name: "talking", kinds: [
    { id: "friend", name: "to a friend" }, { id: "family", name: "to family" }, { id: "work", name: "for work" }, { id: "stranger", name: "to a stranger" }
  ]},
  { id: "call", name: "on a call", kinds: [
    { id: "voice", name: "a voice call" }, { id: "video", name: "a video call" }, { id: "work", name: "for work" }, { id: "family", name: "family" }
  ]},
  { id: "sitting", name: "sitting", kinds: [
    { id: "chair", name: "in a chair" }, { id: "sofa", name: "on a sofa" }, { id: "floor", name: "on the floor" }, { id: "else", name: "somewhere else" }
  ]},
  { id: "inbed", name: "in bed", kinds: [
    { id: "awake", name: "awake" }, { id: "phone", name: "on their phone" }, { id: "almost", name: "falling asleep" }, { id: "lazy", name: "just staying there" }
  ]},
  { id: "kids", name: "with children", kinds: [
    { id: "care", name: "looking after them" }, { id: "play", name: "playing" }, { id: "school", name: "getting them to school" }, { id: "else", name: "the rest" }
  ]},
  { id: "cleaning", name: "cleaning", kinds: [
    { id: "home", name: "the house" }, { id: "dishes", name: "dishes" }, { id: "clothes", name: "laundry" }, { id: "else", name: "something else" }
  ]},
  { id: "dressed", name: "getting dressed", kinds: [
    { id: "morning", name: "for the day" }, { id: "out", name: "to go out" }, { id: "bed", name: "for bed" }, { id: "else", name: "something else" }
  ]},
  { id: "restaurant", name: "at a restaurant", kinds: [
    { id: "lunch", name: "lunch" }, { id: "dinner", name: "dinner" }, { id: "cafe", name: "a café" }, { id: "else", name: "something else" }
  ]},
  { id: "computer", name: "on a computer", kinds: [
    { id: "work", name: "working" }, { id: "browse", name: "browsing" }, { id: "game", name: "gaming" }, { id: "else", name: "something else" }
  ]},
  { id: "hospital", name: "in a hospital", kinds: [
    { id: "patient", name: "as a patient" }, { id: "work", name: "working there" }, { id: "visit", name: "visiting" }
  ]},
  { id: "flying", name: "flying", kinds: [
    { id: "plane", name: "in a plane" }, { id: "wait", name: "in an airport" }, { id: "crew", name: "as crew" }
  ]},
  { id: "photo", name: "taking a photo", kinds: [
    { id: "selfie", name: "a selfie" }, { id: "someone", name: "of someone" }, { id: "place", name: "of a place" }
  ]},
  { id: "hugging", name: "hugging", kinds: [
    { id: "love", name: "someone they love" }, { id: "hello", name: "hello or goodbye" }, { id: "kid", name: "a child" }
  ]},
  { id: "arguing", name: "arguing", kinds: [
    { id: "home", name: "at home" }, { id: "work", name: "at work" }, { id: "online", name: "online" }, { id: "street", name: "in the street" }
  ]},
  { id: "meditating", name: "meditating", kinds: [
    { id: "sit", name: "sitting" }, { id: "walk", name: "walking" }, { id: "pray", name: "with prayer" }
  ]},
  { id: "born", name: "being born", kinds: [
    { id: "baby", name: "a baby arriving" }, { id: "labor", name: "a mother in labor" }, { id: "wait", name: "someone waiting" }
  ]},
  { id: "dying", name: "dying", kinds: [
    { id: "hospital", name: "in a hospital" }, { id: "home", name: "at home" }, { id: "else", name: "somewhere else" }
  ]}
];

const FPS = 240;
const STEP = 1 / FPS;
const fmt = new Intl.NumberFormat("en-US");
const listEl = document.getElementById("list");
const detailEl = document.getElementById("detail");
const blankEl = document.getElementById("blank");
const odoState = new WeakMap();

const shown = {};
let odoNodes = [];
let selected = null;
let cycleIndex = 0;
let lastSort = 0;
let lastMachine = 0;
let acc = 0;
let cached = null;
let snapshotAge = 1;

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

const AGE15 = 0.756;
const MIN = (minutes) => minutes / 1440;

function unit(weights) {
  const mean = weights.reduce((sum, value) => sum + value, 0) / weights.length;
  return weights.map((value) => value / mean);
}

function shaped(minutes, hour, table) {
  return MIN(minutes) * hourValue(table, hour);
}

function hourValue(table, hour) {
  const h = ((hour % 24) + 24) % 24;
  const i0 = Math.floor(h);
  const i1 = (i0 + 1) % 24;
  return lerp(table[i0], table[i1], h - i0);
}

function localParts(date, timeZone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  }).formatToParts(date);

  const get = (type) => parts.find((part) => part.type === type)?.value || "0";
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return {
    weekday: weekdays.indexOf(get("weekday")),
    hour: Number(get("hour")) + Number(get("minute")) / 60 + Number(get("second")) / 3600
  };
}

function weekend(weekday) {
  return weekday === 0 || weekday === 6 ? 1 : 0;
}

function peak(hour, center, width, height) {
  const d = Math.min(Math.abs(hour - center), 24 - Math.abs(hour - center));
  return height * Math.exp(-0.5 * (d / width) ** 2);
}

function sleepShare(hour) {
  return hourValue([
    0.88, 0.91, 0.93, 0.92, 0.85, 0.65,
    0.36, 0.16, 0.07, 0.04, 0.03, 0.03,
    0.045, 0.06, 0.04, 0.03, 0.03, 0.035,
    0.045, 0.07, 0.12, 0.27, 0.52, 0.74
  ], hour);
}

function awakeShare(hour) {
  return 1 - sleepShare(hour);
}

function split(total, weights) {
  const sum = Object.values(weights).reduce((a, b) => a + b, 0) || 1;
  const parts = {};
  for (const key of Object.keys(weights)) parts[key] = total * (weights[key] / sum);
  return { total, parts };
}

const H = {
  meal: unit([0.12, 0.06, 0.04, 0.04, 0.08, 0.22, 0.85, 1.7, 1.35, 0.45, 0.35, 1.05, 1.85, 1.4, 0.5, 0.38, 0.45, 0.75, 1.25, 1.75, 1.2, 0.65, 0.35, 0.18]),
  work: unit([0.08, 0.07, 0.07, 0.08, 0.1, 0.18, 0.42, 0.9, 1.4, 1.55, 1.6, 1.52, 1.2, 1.45, 1.55, 1.48, 1.2, 0.8, 0.48, 0.3, 0.2, 0.15, 0.11, 0.09]),
  rush: unit([0.05, 0.04, 0.04, 0.05, 0.08, 0.25, 1.1, 2.4, 1.3, 0.45, 0.3, 0.28, 0.35, 0.3, 0.32, 0.55, 1.5, 2.3, 1.2, 0.55, 0.28, 0.16, 0.1, 0.06]),
  evening: unit([0.25, 0.18, 0.12, 0.1, 0.1, 0.15, 0.28, 0.45, 0.55, 0.6, 0.65, 0.75, 0.85, 0.8, 0.85, 0.95, 1.15, 1.35, 1.55, 1.75, 1.7, 1.45, 0.9, 0.5]),
  morning: unit([0.15, 0.1, 0.08, 0.1, 0.2, 0.7, 1.8, 2.2, 1.4, 0.7, 0.5, 0.45, 0.4, 0.4, 0.45, 0.5, 0.7, 0.9, 0.85, 0.7, 0.55, 0.85, 1.1, 0.45]),
  day: unit([0.12, 0.1, 0.08, 0.08, 0.12, 0.25, 0.55, 0.9, 1.2, 1.35, 1.4, 1.45, 1.4, 1.35, 1.3, 1.25, 1.2, 1.1, 0.9, 0.7, 0.5, 0.35, 0.22, 0.15]),
  private: unit([1.6, 1.3, 0.7, 0.4, 0.3, 0.45, 1.1, 0.7, 0.25, 0.15, 0.12, 0.12, 0.14, 0.15, 0.16, 0.2, 0.28, 0.4, 0.55, 0.8, 1.1, 1.5, 1.8, 1.75]),
  school: unit([0.02, 0.02, 0.02, 0.02, 0.03, 0.08, 0.25, 1.2, 1.7, 1.8, 1.75, 1.7, 1.2, 1.65, 1.7, 1.4, 0.5, 0.2, 0.12, 0.1, 0.08, 0.06, 0.04, 0.03]),
  farm: unit([0.05, 0.04, 0.04, 0.08, 0.25, 0.8, 1.5, 1.7, 1.6, 1.5, 1.4, 1.35, 1.1, 1.3, 1.4, 1.3, 1.1, 0.7, 0.4, 0.2, 0.12, 0.08, 0.06, 0.05]),
  pray: unit([0.3, 0.2, 0.15, 0.2, 0.7, 2.2, 1.1, 0.6, 0.5, 0.45, 0.4, 0.55, 1.6, 0.7, 0.5, 1.3, 0.7, 1.4, 1.6, 1.3, 1.1, 0.7, 0.45, 0.35])
};

function rates(hour, weekday) {
  const awake = awakeShare(hour);
  const sleep = sleepShare(hour);
  const we = weekend(weekday);
  const workMin = we ? 59 : 235;
  const commuteMin = we ? 8 : 22;
  const schoolMin = we ? 8 : 45;
  const a15 = AGE15;

  const breakfast = peak(hour, 7.6, 0.9, 1);
  const lunch = peak(hour, 12.6, 0.85, 1);
  const dinner = peak(hour, 19.4, 1.05, 1);
  const snack = 0.25 + 0.15 * awake;

  const eating = shaped(80, hour, H.meal) * lerp(1, 1.06, we);
  const working = a15 * shaped(workMin, hour, H.work);
  const commute = a15 * shaped(commuteMin, hour, H.rush);
  const traffic = commute * (0.28 + peak(hour, 8, 0.6, 0.22) + peak(hour, 17.7, 0.65, 0.22));
  const driving = a15 * shaped(we ? 18 : 28, hour, H.rush);
  const walking = a15 * shaped(22, hour, H.day);
  const phone = 0.683 * shaped(220, hour, H.evening);
  const online = 0.73 * shaped(360, hour, H.evening);
  const watching = a15 * shaped(156, hour, H.evening);
  const music = 0.4 * shaped(80, hour, H.evening);
  const gaming = 0.44 * shaped(28, hour, H.evening) * lerp(1, 1.25, we);
  const reading = a15 * shaped(16, hour, H.evening);
  const school = 0.171 * shaped(schoolMin, hour, H.school);
  const studying = a15 * shaped(we ? 8 : 16, hour, H.evening);
  const meeting = working * 0.07;
  const shopping = a15 * shaped(we ? 24 : 16, hour, H.day);
  const exercising = a15 * shaped(19, hour, H.morning) * lerp(1, 1.1, we);
  const bathroom = a15 * shaped(28, hour, H.morning);
  const drinking = shaped(22, hour, H.day);
  const cooking = a15 * shaped(40, hour, H.meal);
  const farming = 0.112 * shaped(we ? 180 : 335, hour, H.farm);
  const praying = shaped(weekday === 0 ? 18 : 12, hour, H.pray);
  const smoking = 0.152 * shaped(55, hour, H.day);
  const waiting = a15 * shaped(12, hour, H.day);
  const laughing = a15 * shaped(8, hour, H.evening);
  const crying = shaped(3, hour, H.private);
  const dancing = shaped(we ? 6 : 1.5, hour, H.evening);
  const nothing = a15 * shaped(22, hour, H.evening);
  const talking = a15 * shaped(35, hour, H.evening);
  const call = a15 * shaped(11, hour, H.day);
  const sitting = a15 * shaped(480, hour, H.day);
  const inbed = a15 * shaped(32, hour, H.private);
  const kids = a15 * shaped(23, hour, H.day);
  const cleaning = a15 * shaped(we ? 52 : 38, hour, H.day);
  const dressed = a15 * shaped(12, hour, H.morning);
  const restaurant = a15 * shaped(we ? 12 : 7, hour, H.meal);
  const computer = a15 * shaped(we ? 40 : 70, hour, H.work);
  const hospital = 0.0039;
  const flying = 0.00017 * hourValue(H.day, hour) + 0.0003;
  const photo = a15 * shaped(2.5, hour, H.day);
  const hugging = a15 * shaped(2, hour, H.evening);
  const arguing = a15 * shaped(4, hour, H.evening);
  const meditating = a15 * shaped(3, hour, H.morning);
  const love = shaped(1.3, hour, H.private) * lerp(1, 1.2, we);
  const masturbating = shaped(1.15, hour, H.private) * lerp(1, 1.08, we);
  const kissing = shaped(0.7, hour, H.private) * lerp(1, 1.15, we);
  const dreaming = sleep * 0.22;
  const born = 0.0000155;
  const dying = 0.000002;

  return {
    sleeping: split(sleep, {
      nap: hour >= 10 && hour <= 17 ? 0.22 : 0.03,
      deep: 0.28 + peak(hour, 2.1, 1.6, 0.22),
      rem: 0.16 + peak(hour, 5.1, 1.3, 0.18),
      light: 0.38
    }),
    dreaming: split(dreaming, { wild: 0.28, ordinary: 0.52, nightmare: 0.14, lucid: 0.06 }),
    eating: split(eating, { breakfast, lunch, dinner, snack }),
    love: split(love, { together: 0.78, almost: 0.14, after: 0.08 }),
    masturbating: split(masturbating, { bed: 0.58, bathroom: 0.26, else: 0.16 }),
    kissing: split(kissing, { romance: 0.48, hello: 0.27, family: 0.25 }),
    working: split(working, {
      office: 0.28,
      remote: 0.16,
      labor: 0.48,
      night: hour < 6 || hour >= 22 ? 0.22 : 0.08
    }),
    commuting: split(commute, { car: 0.52, transit: 0.28, walk: 0.14, bike: 0.06 }),
    traffic: split(traffic, { car: 0.72, bus: 0.18, bike: 0.05, rage: 0.05 }),
    driving: split(driving, { city: 0.42, highway: 0.28, work: 0.18, else: 0.12 }),
    walking: split(walking, { somewhere: 0.56, nowhere: 0.22, dog: 0.12, kid: 0.10 }),
    phone: split(phone, { scroll: 0.46, chat: 0.24, video: 0.20, other: 0.10 }),
    online: split(online, { social: 0.38, work: 0.22, video: 0.26, else: 0.14 }),
    watching: split(watching, { tv: 0.34, stream: 0.38, film: 0.16, sport: 0.12 }),
    music: split(music, { headphones: 0.48, speakers: 0.26, live: 0.06, car: 0.20 }),
    gaming: split(gaming, { phone: 0.46, console: 0.22, pc: 0.20, field: 0.12 }),
    reading: split(reading, { book: 0.22, news: 0.18, chat: 0.36, else: 0.24 }),
    school: split(school, { class: 0.62, break: 0.14, homework: 0.16, teacher: 0.08 }),
    studying: split(studying, { school: 0.48, exam: 0.22, language: 0.12, else: 0.18 }),
    meeting: split(meeting, { useful: 0.22, long: 0.38, video: 0.28, hallway: 0.12 }),
    shopping: split(shopping, { food: 0.48, online: 0.28, clothes: 0.12, else: 0.12 }),
    exercising: split(exercising, { walk: 0.48, run: 0.16, gym: 0.22, sport: 0.14 }),
    bathroom: split(bathroom, {
      toilet: 0.46,
      shower: 0.22 + peak(hour, 7.1, 0.6, 0.18),
      teeth: 0.14 + peak(hour, 7.4, 0.45, 0.16) + peak(hour, 22.3, 0.45, 0.12),
      else: 0.12
    }),
    drinking: split(drinking, {
      water: 0.42,
      coffee: 0.22 + peak(hour, 8.2, 1.2, 0.2),
      alcohol: 0.08 + peak(hour, 21.5, 2, 0.18) * lerp(1, 1.4, we),
      soda: 0.16
    }),
    cooking: split(cooking, { breakfast, lunch, dinner, else: 0.18 }),
    farming: split(farming, { field: 0.58, animals: 0.22, market: 0.10, else: 0.10 }),
    praying: split(praying, {
      islam: peak(hour, 5.4, 0.45, 0.018) + peak(hour, 12.3, 0.35, 0.012) + peak(hour, 15.6, 0.35, 0.01) + peak(hour, 18.2, 0.4, 0.014) + peak(hour, 20.1, 0.5, 0.012),
      christian: peak(hour, 8.8, 1.2, 0.008) * (weekday === 0 ? 1.8 : 0.35) + 0.0015 * awake,
      hindu: peak(hour, 6.2, 1, 0.006) + peak(hour, 18.8, 1, 0.005),
      other: 0.0022 * awake
    }),
    smoking: split(smoking, { cig: 0.62, vape: 0.26, other: 0.12 }),
    waiting: split(waiting, { line: 0.34, reply: 0.30, transit: 0.22, else: 0.14 }),
    laughing: split(laughing, { someone: 0.48, screen: 0.28, nervous: 0.12, alone: 0.12 }),
    crying: split(crying, { sad: 0.42, happy: 0.14, kids: 0.30, film: 0.14 }),
    dancing: split(dancing, { party: 0.38, home: 0.28, ritual: 0.16, club: 0.18 }),
    nothing: split(nothing, { stare: 0.28, lie: 0.22, sit: 0.32, zone: 0.18 }),
    talking: split(talking, { friend: 0.38, family: 0.32, work: 0.18, stranger: 0.12 }),
    call: split(call, { voice: 0.42, video: 0.22, work: 0.24, family: 0.12 }),
    sitting: split(sitting, { chair: 0.48, sofa: 0.28, floor: 0.12, else: 0.12 }),
    inbed: split(inbed, { awake: 0.34, phone: 0.32, almost: 0.18, lazy: 0.16 }),
    kids: split(kids, { care: 0.46, play: 0.26, school: 0.14, else: 0.14 }),
    cleaning: split(cleaning, { home: 0.42, dishes: 0.28, clothes: 0.18, else: 0.12 }),
    dressed: split(dressed, { morning: 0.48, out: 0.22, bed: 0.22, else: 0.08 }),
    restaurant: split(restaurant, { lunch: 0.34, dinner: 0.38, cafe: 0.18, else: 0.10 }),
    computer: split(computer, { work: 0.42, browse: 0.28, game: 0.18, else: 0.12 }),
    hospital: split(hospital, { patient: 0.58, work: 0.28, visit: 0.14 }),
    flying: split(flying, { plane: 0.62, wait: 0.28, crew: 0.10 }),
    photo: split(photo, { selfie: 0.42, someone: 0.32, place: 0.26 }),
    hugging: split(hugging, { love: 0.48, hello: 0.28, kid: 0.24 }),
    arguing: split(arguing, { home: 0.42, work: 0.18, online: 0.28, street: 0.12 }),
    meditating: split(meditating, { sit: 0.62, walk: 0.18, pray: 0.20 }),
    born: split(born, { baby: 0.28, labor: 0.46, wait: 0.26 }),
    dying: split(dying, { hospital: 0.58, home: 0.28, else: 0.14 })
  };
}

function snapshot(date = new Date()) {
  const rows = REGIONS.map((region) => {
    const local = localParts(date, region.tz);
    return { ...region, ...local, awake: awakeShare(local.hour), activities: rates(local.hour, local.weekday) };
  });

  const totals = {};
  for (const category of CATEGORIES) {
    const parts = Object.fromEntries(category.kinds.map((kind) => [kind.id, 0]));
    let total = 0;
    for (const row of rows) {
      const block = row.activities[category.id];
      total += block.total * row.pop;
      for (const kind of category.kinds) parts[kind.id] += (block.parts[kind.id] || 0) * row.pop;
    }
    totals[category.id] = { total, parts };
  }

  const countries = new Map();
  for (const row of rows) {
    const prev = countries.get(row.group) || { name: row.group, pop: 0, awakePop: 0 };
    prev.pop += row.pop;
    prev.awakePop += row.pop * row.awake;
    countries.set(row.group, prev);
  }

  const ranked = [...countries.values()]
    .map((country) => ({ ...country, awake: country.awakePop / country.pop }))
    .sort((a, b) => b.pop - a.pop);

  const order = CATEGORIES
    .map((category) => category.id)
    .sort((a, b) => totals[b].total - totals[a].total);

  return { rows, totals, countries: ranked, order, date };
}

function formatCount(value) {
  return fmt.format(Math.max(0, Math.round(value)));
}

function rankedCategories(data) {
  return [...CATEGORIES].sort((a, b) => (data.totals[b.id].total - data.totals[a.id].total));
}

const type = { target: "", shown: "", pause: 0, hold: 0, locked: false };

function bindOdos() {
  odoNodes = [...document.querySelectorAll("[data-count].odo")];
}

function buildOdo(el, text, value) {
  el.innerHTML = text.split("").map((ch) => {
    if (ch === ",") return `<span class="odo-sep">,</span>`;
    return `<span class="odo-ch"><span class="odo-a">${ch}</span><span class="odo-b">${ch}</span></span>`;
  }).join("");
  const cols = text.replace(/,/g, "").split("").map((digit) => ({
    from: digit, to: digit, want: digit, t: 1, dir: 1
  }));
  return { face: text, value: Math.round(value), dir: 1, cols, nodes: [...el.querySelectorAll(".odo-ch")] };
}

function stepOdo(el, value, dt) {
  const text = formatCount(value);
  const nextInt = Math.round(value);
  let state = odoState.get(el);
  if (!state || state.face.replace(/\d/g, "0") !== text.replace(/\d/g, "0")) {
    state = buildOdo(el, text, value);
    odoState.set(el, state);
    return;
  }
  if (nextInt !== state.value) {
    state.dir = nextInt > state.value ? 1 : -1;
    state.value = nextInt;
  }
  state.face = text;
  const digits = text.replace(/,/g, "");
  for (let i = 0; i < state.cols.length; i++) {
    const col = state.cols[i];
    col.want = digits[i];
    if (col.t >= 1 && col.to !== col.want) {
      col.from = col.to;
      col.to = col.want;
      col.dir = state.dir;
      col.t = 0;
    }
    if (col.t < 1) col.t = Math.min(1, col.t + 16 * dt);
  }
}

function drawOdo(el) {
  const state = odoState.get(el);
  if (!state) return;
  for (let i = 0; i < state.cols.length; i++) {
    const col = state.cols[i];
    const node = state.nodes[i];
    if (!node) continue;
    const a = node.firstElementChild;
    const b = node.lastElementChild;
    a.textContent = col.from;
    b.textContent = col.to;
    const t = col.t;
    a.style.transform = `translateY(${(col.dir > 0 ? -t : t) * 1.1}em)`;
    b.style.transform = `translateY(${(col.dir > 0 ? 1 - t : t - 1) * 1.1}em)`;
  }
}

function setTypeTarget(word, locked) {
  type.target = word;
  type.locked = locked;
  if (!type.shown) type.pause = 0;
}

function stepType(dt) {
  if (type.pause > 0) {
    type.pause -= dt;
    return;
  }

  if (type.shown === type.target) {
    if (!type.locked && !selected) {
      type.hold += dt;
      if (type.hold > 1.35) {
        type.hold = 0;
        const ranked = cached ? rankedCategories(cached) : CATEGORIES;
        cycleIndex = (cycleIndex + 1) % ranked.length;
        type.target = ranked[cycleIndex].name;
      }
    }
    return;
  }

  type.hold = 0;
  if (type.target.startsWith(type.shown)) {
    type.shown = type.target.slice(0, type.shown.length + 1);
    type.pause = 0.038 + Math.random() * 0.05;
  } else {
    type.shown = type.shown.slice(0, -1);
    type.pause = 0.022;
  }
}

function drawType() {
  blankEl.textContent = type.shown || "\u00a0";
  blankEl.classList.toggle("is-empty", type.shown.length === 0);
  blankEl.classList.toggle("is-typing", type.shown !== type.target);
}

function ensureList() {
  listEl.innerHTML = CATEGORIES.map((category, index) => `
    <button class="row" data-id="${category.id}">
      <span class="row-rank">${String(index + 1).padStart(2, "0")}</span>
      <span class="row-name">${category.name}</span>
      <span class="row-count odo" data-count="${category.id}"></span>
    </button>
  `).join("");
}

function sortList(data) {
  const rows = [...listEl.querySelectorAll(".row")];
  const first = new Map(rows.map((row) => [row, row.getBoundingClientRect().top]));
  rows.sort((a, b) => (shown[b.dataset.id] || 0) - (shown[a.dataset.id] || 0));
  rows.forEach((row, index) => {
    row.querySelector(".row-rank").textContent = String(index + 1).padStart(2, "0");
    listEl.appendChild(row);
  });
  for (const row of rows) {
    const dy = first.get(row) - row.getBoundingClientRect().top;
    if (Math.abs(dy) < 1) continue;
    row.animate(
      [{ transform: `translateY(${dy}px)` }, { transform: "translateY(0)" }],
      { duration: 640, easing: "cubic-bezier(.16,.84,.32,1)" }
    );
  }
}

function renderDetail(category, data) {
  const block = data.totals[category.id];
  const asleep = data.countries.filter((country) => country.awake < 0.38).slice(0, 16);
  const awake = data.countries.filter((country) => country.awake > 0.62).slice(0, 16);
  const kinds = [...category.kinds].sort((a, b) => (block.parts[b.id] || 0) - (block.parts[a.id] || 0));
  const maxPart = Math.max(...kinds.map((kind) => block.parts[kind.id] || 0), 1);

  detailEl.innerHTML = `
    <button class="back" type="button" id="back">← all activities</button>
    <div class="big">
      <div class="big-count odo" data-count="${category.id}"></div>
      <p class="big-label">people ${category.name}, ranked from the clock and who is awake</p>
    </div>
    ${kinds.map((kind) => `
      <div class="sub">
        <span class="sub-name">${kind.name}</span>
        <div class="track"><span data-bar="${category.id}:${kind.id}"></span></div>
        <span class="sub-count odo" data-count="${category.id}:${kind.id}"></span>
      </div>
    `).join("")}
    <div class="world">
      <div>
        <h2>mostly awake</h2>
        <div class="chips">${awake.map(chip).join("")}</div>
      </div>
      <div>
        <h2>mostly asleep</h2>
        <div class="chips">${asleep.map(chip).join("")}</div>
      </div>
    </div>
  `;

  for (const kind of kinds) {
    const bar = detailEl.querySelector(`[data-bar="${category.id}:${kind.id}"]`);
    if (bar) bar.style.width = `${((block.parts[kind.id] || 0) / maxPart) * 100}%`;
  }
}

function chip(country) {
  const percent = Math.round(country.awake * 100);
  return `<span class="chip" style="opacity:${0.38 + country.awake * 0.62}">${country.name}<span>${percent}%</span></span>`;
}

function setView(id) {
  selected = CATEGORIES.find((category) => category.id === id) || null;
  if (selected) {
    listEl.classList.add("hidden");
    detailEl.classList.remove("hidden");
    setTypeTarget(selected.name, true);
    renderDetail(selected, snapshot());
    bindOdos();
    history.replaceState(null, "", `#${selected.id}`);
  } else {
    detailEl.classList.add("hidden");
    listEl.classList.remove("hidden");
    detailEl.innerHTML = "";
    setTypeTarget(CATEGORIES[cycleIndex]?.name || "sleeping", false);
    bindOdos();
    history.replaceState(null, "", "#");
  }
}

function readHash() {
  const id = decodeURIComponent(location.hash.replace("#", ""));
  setView(id);
}

function ease(current, target, dt) {
  if (current == null) return target;
  return target + (current - target) * Math.exp(-7.2 * dt);
}

function stepCounts(data, dt) {
  for (const category of CATEGORIES) {
    shown[category.id] = ease(shown[category.id], data.totals[category.id].total, dt);
    for (const kind of category.kinds) {
      const key = `${category.id}:${kind.id}`;
      shown[key] = ease(shown[key], data.totals[category.id].parts[kind.id] || 0, dt);
    }
  }
  for (const node of odoNodes) {
    const value = shown[node.dataset.count];
    if (value != null) stepOdo(node, value, dt);
  }
  stepType(dt);
}

function drawCounts() {
  for (const node of odoNodes) drawOdo(node);
  drawType();
}

function frame(now) {
  const machineDt = lastMachine ? Math.min((now - lastMachine) / 1000, 0.05) : STEP;
  lastMachine = now;
  acc += machineDt;
  snapshotAge += machineDt;

  if (!cached || snapshotAge >= 0.5) {
    cached = snapshot();
    snapshotAge = 0;
  }

  let steps = 0;
  while (acc >= STEP && steps < 12) {
    stepCounts(cached, STEP);
    acc -= STEP;
    steps++;
  }

  drawCounts();

  if (!selected && now - lastSort > 1800) {
    lastSort = now;
    sortList(cached);
  }

  requestAnimationFrame(frame);
}

listEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-id]");
  if (button) setView(button.dataset.id);
});

detailEl.addEventListener("click", (event) => {
  if (event.target.closest("#back")) setView(null);
});

blankEl.addEventListener("click", () => setView(null));

window.addEventListener("hashchange", readHash);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setView(null);
});

ensureList();
readHash();
bindOdos();
const first = snapshot();
cached = first;
for (const category of CATEGORIES) {
  shown[category.id] = first.totals[category.id].total;
  for (const kind of category.kinds) {
    shown[`${category.id}:${kind.id}`] = first.totals[category.id].parts[kind.id] || 0;
  }
}
setTypeTarget(selected ? selected.name : "sleeping", Boolean(selected));
stepCounts(first, STEP);
drawCounts();
sortList(first);
requestAnimationFrame(frame);

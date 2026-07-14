export const BUSINESS = {
  name: 'Sunrise Cafe',
  tagline: 'Make the most important meal of the day a good one.',
  subTagline: "Battle Creek's award-winning breakfast & lunch spot",
  address: {
    street: '117 E Coolidge Ave',
    city: 'Battle Creek',
    state: 'MI',
    zip: '49017',
  },
  phoneDisplay: '(269) 965-1606',
  phoneHref: 'tel:+12699651606',
  email: 'hamiltonhort@gmail.com',
  directionsUrl:
    'https://maps.google.com/?q=117+E+Coolidge+Ave,+Battle+Creek,+MI+49017',
  mapEmbedUrl:
    'https://www.google.com/maps?q=117+E+Coolidge+Ave,+Battle+Creek,+MI+49017&output=embed',
  facebook: 'https://www.facebook.com/sunrisecafebattlecreek',
  award: {
    short: "People's Choice — The Big Cheese 2023",
    categories: ['People’s Choice', 'Loaded'],
    festival: "Battle Creek's Mac & Cheese Festival (“The Big Cheese”)",
    year: 2023,
    dish: 'White Cheddar Mac with Brisket Burnt Ends',
  },
} as const

export type DayHours = { day: string; short: string; hours: string; closed?: boolean }

/** Index matches JS Date.getDay(): 0 = Sunday. */
export const HOURS: DayHours[] = [
  { day: 'Sunday', short: 'Sun', hours: '6:00 AM – 2:00 PM' },
  { day: 'Monday', short: 'Mon', hours: '6:00 AM – 2:00 PM' },
  { day: 'Tuesday', short: 'Tue', hours: 'Closed', closed: true },
  { day: 'Wednesday', short: 'Wed', hours: '6:00 AM – 2:00 PM' },
  { day: 'Thursday', short: 'Thu', hours: '6:00 AM – 2:00 PM' },
  { day: 'Friday', short: 'Fri', hours: '6:00 AM – 2:00 PM' },
  { day: 'Saturday', short: 'Sat', hours: '6:00 AM – 2:00 PM' },
]

export const HOURS_SUMMARY = 'Mon 6AM–2PM · Tue Closed · Wed–Sun 6AM–2PM'
